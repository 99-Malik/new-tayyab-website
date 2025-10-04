import { NextResponse } from 'next/server'

export async function GET() {
  // Return a simple SVG-based favicon
  const svgFavicon = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#2563eb;stop-opacity:1" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="16" fill="url(#bgGradient)"/>
    <circle cx="16" cy="16" r="12" fill="white" opacity="0.9"/>
    <g transform="translate(8, 8)">
      <rect x="6" y="2" width="8" height="2" rx="1" fill="#06b6d4" transform="rotate(45 10 3)"/>
      <circle cx="4" cy="4" r="3" fill="none" stroke="#2563eb" stroke-width="1.5"/>
      <circle cx="4" cy="4" r="1.5" fill="#2563eb"/>
      <g transform="translate(12, 12)">
        <circle cx="0" cy="0" r="2" fill="#06b6d4"/>
        <rect x="-0.5" y="-3" width="1" height="2" fill="#06b6d4"/>
        <rect x="-0.5" y="1" width="1" height="2" fill="#06b6d4"/>
        <rect x="-3" y="-0.5" width="2" height="1" fill="#06b6d4"/>
        <rect x="1" y="-0.5" width="2" height="1" fill="#06b6d4"/>
      </g>
    </g>
  </svg>`

  return new NextResponse(svgFavicon, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
