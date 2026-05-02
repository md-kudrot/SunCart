import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://sun-cart-tau.vercel.app"
    // baseURL: "http://localhost:3000"
})

export const { signIn, signUp, useSession } = createAuthClient()

//baseurl change kore diyechi, jodi local host e run korte chai tahole baseurl change kore dite hobe.