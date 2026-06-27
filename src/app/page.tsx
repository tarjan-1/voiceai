import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-column min-h-screen items-center justify-center gap-4 bg-background">
      <h1 className="text-2xl font-semibold ">Welcome to VoiceAI</h1>
      <div className="flex items-center gap-4 ">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
}
