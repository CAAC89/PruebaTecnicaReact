import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();

  // Configurar encabezados CORS
  res.headers.set('Access-Control-Allow-Origin', 'http://localhost:4000');
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.headers.set('Access-Control-Allow-Credentials', 'true');

  return res;
}

// Aplica el middleware solo a rutas de API
export const config = {
  matcher: '/users/:path*',
};