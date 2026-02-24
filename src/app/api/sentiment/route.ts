import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET - Get sentiment scores
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const ticker = searchParams.get('ticker');
    const days = parseInt(searchParams.get('days') || '30');

    const whereClause: Record<string, unknown> = {};
    
    if (ticker) {
      const company = await db.egyptianCompany.findFirst({
        where: {
          OR: [
            { tickerSymbol: ticker },
            { tickerSymbol: ticker.toUpperCase() },
          ],
        },
      });
      
      if (company) {
        whereClause.companyId = company.id;
      }
    }

    whereClause.date = {
      gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000),
    };

    const sentimentScores = await db.sentimentScore.findMany({
      where: whereClause,
      include: {
        company: {
          select: {
            tickerSymbol: true,
            nameEn: true,
            nameAr: true,
          },
        },
      },
      orderBy: { date: 'desc' },
      take: 100,
    });

    // If no data, return sample data
    if (sentimentScores.length === 0) {
      const companies = await db.egyptianCompany.findMany({ take: 10 });
      
      if (companies.length === 0) {
        // Return static sample sentiment data
        const sampleSentiment = [
          {
            id: '1',
            companyId: 'COMI',
            company: { tickerSymbol: 'COMI', nameEn: 'Commercial International Bank', nameAr: 'البنك التجاري الدولي' },
            date: new Date().toISOString(),
            sentimentScore: 0.65,
            sentimentLabel: 'positive',
            newsCount: 12,
            confidence: 0.85,
          },
          {
            id: '2',
            companyId: 'TMGH',
            company: { tickerSymbol: 'TMGH', nameEn: 'Talaat Moustafa Group', nameAr: 'مجموعة طلعت مصطفى' },
            date: new Date().toISOString(),
            sentimentScore: 0.45,
            sentimentLabel: 'neutral',
            newsCount: 8,
            confidence: 0.72,
          },
          {
            id: '3',
            companyId: 'SWDY',
            company: { tickerSymbol: 'SWDY', nameEn: 'Elsewedy Electric', nameAr: 'السويدي إليكتريك' },
            date: new Date().toISOString(),
            sentimentScore: -0.25,
            sentimentLabel: 'negative',
            newsCount: 5,
            confidence: 0.68,
          },
        ];

        return NextResponse.json({
          success: true,
          data: sampleSentiment,
        });
      }
    }

    return NextResponse.json({
      success: true,
      data: sentimentScores,
    });
  } catch (error) {
    console.error('Error fetching sentiment scores:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch sentiment scores' },
      { status: 500 }
    );
  }
}

// POST - Update sentiment score (for manual updates or automated analysis)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyId, sentimentScore, sentimentLabel, newsCount, confidence, sourceKeywords } = body;

    if (!companyId || sentimentScore === undefined) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newSentiment = await db.sentimentScore.create({
      data: {
        companyId,
        date: new Date(),
        sentimentScore,
        sentimentLabel: sentimentLabel || (sentimentScore > 0.2 ? 'positive' : sentimentScore < -0.2 ? 'negative' : 'neutral'),
        newsCount: newsCount || 0,
        confidence,
        sourceKeywords,
      },
    });

    return NextResponse.json({
      success: true,
      data: newSentiment,
    });
  } catch (error) {
    console.error('Error creating sentiment score:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create sentiment score' },
      { status: 500 }
    );
  }
}
