import { NextResponse } from 'next/server'

export function GET() {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  const secretKey = process.env.CLERK_SECRET_KEY
  const signingSecret = process.env.CLERK_SIGNING_SECRET // DODALI SMO OVU LINIJU

  console.log('--- Provera ENV varijabli sa servera ---')
  console.log('Publishable Key učitan:', publishableKey)
  console.log('Secret Key učitan:', secretKey)
  console.log('Signing secret ucitan:', signingSecret)
  console.log('-----------------------------------------')

  return NextResponse.json({
    publishableKeyIsPresent: !!publishableKey, // !! pretvara vrednost u true/false
    secretKeyIsPresent: !!secretKey,
    signingSecretPersent: !!signingSecret,
  })
}
