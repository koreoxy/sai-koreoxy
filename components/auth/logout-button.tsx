"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  const onClick = () => {
    signOut();
  };

  return (
    <Button onClick={onClick} className="cursor-pointer">
      Logout
    </Button>
  );
};
