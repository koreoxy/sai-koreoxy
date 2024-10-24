"use client ";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const SocialWrapper = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-2">
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        disabled
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        disabled
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />{" "}
      </Button>
    </div>
  );
};
