import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope: "read:user",
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            try {
                return {
                    ...session,
                    id: token.sub,
                };
            } catch (err) {
                return {
                    ...session,
                    id: null,
                };
            }
        },
        async signIn(user, account, profile) {
            const { email } = user;
            try {
                return true;
            } catch (err) {
                return false;
            }
        },
    },
};
export default NextAuth(authOptions);
