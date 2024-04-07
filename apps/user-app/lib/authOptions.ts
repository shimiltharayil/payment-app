import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  provider: [
    Credentials({
      name: "Credentials",
      credentials: {
        phoneNumber: {
          label: "phoneNumber",
          type: "number",
          placeholder: "Phone Number",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
            const user = await 
      },
    }),
  ],
};
