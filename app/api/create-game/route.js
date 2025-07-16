import { supabase } from '../../../lib/supabase'

export async function POST(request) {
  try {
    const formData = await request.json()

    // Validate required fields
    const requiredFields = [
      'organizationType', 'causeCategory', 'audienceSize',
      'gameType', 'fundraisingGoal', 'timeline',
      'firstName', 'lastName', 'email', 'organizationName'
    ]

    for (const field of requiredFields) {
      if (!formData[field]) {
        return Response.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('game_requests')
      .insert([
        {
          organization_type: formData.organizationType,
          cause_category: formData.causeCategory,
          audience_size: formData.audienceSize,
          game_type: formData.gameType,
          fundraising_goal: formData.fundraisingGoal,
          timeline: formData.timeline,
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone?.trim() || null,
          organization_name: formData.organizationName.trim(),
          additional_details: formData.additionalDetails?.trim() || null,
          submitted_at: new Date().toISOString(),
          status: 'pending'
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return Response.json(
        { error: 'Failed to submit request. Please try again.' },
        { status: 500 }
      )
    }

    return Response.json(
      { 
        success: true, 
        message: 'Thank you! Your game request has been submitted successfully. We\'ll contact you within 24 hours.',
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