"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CardHeaderWrapper } from "@/components/auth/CardWrapper/card-header-wrapper";
import { SocialWrapper } from "@/components/auth/CardWrapper/social-wrapper";
import { BackButtonWrapper } from "@/components/auth/CardWrapper/back-button-wrapper";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  buttonHomeHref: string;
  buttonHomeLabel: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  buttonHomeHref,
  buttonHomeLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <CardHeaderWrapper label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <SocialWrapper />
        </CardFooter>
      )}
      <CardFooter>
        <BackButtonWrapper href={buttonHomeHref} label={buttonHomeLabel} />
        {/* <BackButtonWrapper href={backButtonHref} label={backButtonLabel} /> */}
      </CardFooter>
    </Card>
  );
};
