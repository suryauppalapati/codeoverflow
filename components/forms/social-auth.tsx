"use client";

import Image from "next/image";
import { AuthError } from "next-auth";
import { signIn } from "next-auth/react";
import React from "react";

import routes from "@/constants/routes";

import { Alert } from "../ui/alert";
import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleProviderAuth = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: routes.HOME,
      });
    } catch (error: unknown) {
      console.error("Sign in error:", error);
      Alert({ title: error instanceof AuthError ? error.message : "An error occured during signin" });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={async () => handleProviderAuth("github")}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={async () => handleProviderAuth("google")}>
        <Image src="/icons/google.svg" alt="Google Logo" width={20} height={20} className={`
          mr-2.5 object-contain
        `} />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
