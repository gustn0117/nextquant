"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function Shell({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const bare = pathname.startsWith("/admin");
  if (bare) return <>{children}</>;
  return (
    <>
      {header}
      <main className="pt-16">{children}</main>
      {footer}
    </>
  );
}
