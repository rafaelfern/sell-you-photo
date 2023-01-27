import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps extends LinkProps {
    children: string;
    activeClassName: string;
}

export function ActiveLink({
    children,
    activeClassName,
    href,
}: ActiveLinkProps) {
    const pathname = usePathname();

    const className = pathname === href ? activeClassName : "";

    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}
