import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path=request.nextUrl.pathname;
    const publicPath=path==='/login' || path==='/signup';
    const isAuth=request.cookies.get("token")?.value || '';
        if(publicPath && isAuth){
            return NextResponse.redirect(new URL('/logout', request.url))
        }
        if(!isAuth && !publicPath){
            return NextResponse.redirect(new URL('/signup', request.url))
        }
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/login',
    '/signup'
  ]
}