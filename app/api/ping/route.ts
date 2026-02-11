import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'pong from nextjs',
    timestamp: Date.now(),
  });
}
