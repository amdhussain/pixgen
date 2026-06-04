// import { createAuthClient } from "better-auth/react"
// export const authClient = createAuthClient({
//     /** The base URL of the server (optional if you're using the same domain) */
//     baseURL: process.env.BETTER_AUTH_URL

// })




import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL  
});

export const { signIn, signOut, useSession } = authClient;




// export const authClient = createAuthClient({
//     // ডিফল্ট হিসেবে localhost যোগ করে রাখা নিরাপদ
//     baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
// })

  