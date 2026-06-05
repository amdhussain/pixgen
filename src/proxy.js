import{NextResponse} from 'next/server'
// import {auth} from '@clerk/nextjs/server'
import { auth } from "./lib/auth";
import {headers} from 'next/headers'


export async function proxy(request){

    const sesssion = await auth.api.getSession({
        headers: await headers()
    })

    if(!sesssion){
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }
}

    export const config = {
        matcher: ["/profile", "/all-photos/:path"],
    
};