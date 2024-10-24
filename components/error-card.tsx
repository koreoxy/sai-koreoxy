import { CardWrapper } from "@/components/auth/CardWrapper/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Ooops! Something Wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
      buttonHomeLabel="Home"
      buttonHomeHref="/"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
