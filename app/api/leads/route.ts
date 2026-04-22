import { NextRequest, NextResponse } from 'next/server'

// In-memory store (replace with DB like Supabase/MongoDB in production)
const leads: Lead[] = []

interface Lead {
  id: string
  name: string
  email: string
  company: string
  phone: string
  employees: string
  message: string
  createdAt: string
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, phone, employees, message } = body

    // Validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required.' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      name,
      email,
      company,
      phone: phone || '',
      employees: employees || '',
      message: message || '',
      createdAt: new Date().toISOString(),
    }

    leads.push(lead)

    console.log('New enterprise lead:', lead)

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! Our enterprise team will reach out within 24 hours.",
        leadId: lead.id,
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('Lead capture error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // In production, add auth middleware to protect this
  return NextResponse.json({ count: leads.length, leads })
}
