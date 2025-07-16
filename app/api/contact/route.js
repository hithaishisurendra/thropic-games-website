import { supabase } from '../../../lib/supabase'

export async function POST(request) {
  try {
    const { name, email, message, phone, company } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          message: message.trim(),
          phone: phone?.trim() || null,
          company: company?.trim() || null,
          submitted_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return Response.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 500 }
      )
    }

    return Response.json(
      { 
        success: true, 
        message: 'Thank you! Your message has been sent successfully.',
        data: data[0]
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    return Response.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
} 