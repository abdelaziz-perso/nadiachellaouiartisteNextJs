"use client";

import { useEffect } from "react";

type ClientRedirectProps = {
  href: string;
};

export default function ClientRedirect({ href }: ClientRedirectProps) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return null;
}
