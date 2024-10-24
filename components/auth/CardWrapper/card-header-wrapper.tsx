interface HeaderProps {
  label: string;
}

export const CardHeaderWrapper = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-y-4 justify-center">
      <h1 className="text-3xl font-bold">Sai/Koreoxy</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
