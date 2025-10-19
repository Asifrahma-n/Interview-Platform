import { isAuthenticated, signOutAction } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  // Fetch user details (optional)
  // Example: const user = await getUser(); // implement this in your auth utils
  const user = { photoURL: "/default-avatar.png" }; // temporary placeholder

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" height={32} width={38} />
          <h2 className="text-primary-100 font-semibold">InterviewPrep AI</h2>
        </Link>

        {/* Right: Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={user.photoURL || "/default-avatar.png"}
              alt="Profile"
              width={56}
              height={56}
              className="rounded-full cursor-pointer "
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/profile">View Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <form action={signOutAction}>
                <button type="submit" className="text-red-500">
                  Sign Out
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Page content */}
      {children}
    </div>
  );
};

export default RootLayout;
