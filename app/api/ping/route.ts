import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'pong from nextjs',
    timestamp: Date.now(),
  });
}


export async function POST(req: Request) {
  const data = await req.json()

  console.log("Datos recibidos:", data)

  // Aquí podrías guardarlo en DB
  // await prisma.sensor.create({ data })

  return NextResponse.json({ success: true })
}