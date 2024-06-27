"use client";
import Link from "next/link";
import Header from "../components/Header";
import AuthProvider from "../auth/Provider";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1>loading...</h1>;
  }

  if (status === "unauthenticated") {
    // signIn("google");
    // // redirect("/api/auth/signin");
    return (
      <div className="flex justify-center  gap-2 mt-20 flex-col">
        <h1 className="text-xl">You need to be logged in to create a job.</h1>{" "}
        <button
          className="bg-blue-600 py-1 px-1 text-white font-bold text-md rounded-md w-fit cursor-pointer"
          onClick={() => {
            signIn("google");
          }}
        >
          Login now
        </button>
      </div>
    );
  } else {
    return (
      <html lang="en">
        <body>
          <AuthProvider>
            <div className="w-full">
              <div className="area">
                <ul className="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <main className=" py-4 px-4 sm:px-10 md:30 lg:px-52  w-full">
                <Header />
                {children}
              </main>
            </div>
          </AuthProvider>
        </body>
      </html>
    );
  }
}
