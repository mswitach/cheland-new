import * as React from "react";

export function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-2xl border shadow-sm ${className}`}>{children}</div>;
}

export function CardHeader({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

export function CardContent({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`p-4 border-t ${className}`}>{children}</div>;
}
