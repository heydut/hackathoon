"use client";

import { usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";

export default function PrelineScript() {
  const path = usePathname();
  const loadPreline = useCallback(async () => {
    try {
      const preline = await import("preline/preline");

      if (preline?.HSStaticMethods) {
        preline.HSStaticMethods.autoInit();
      }
    } catch (error) {
      console.error("Failed to load preline:", error);
    }
  }, []);

  useEffect(() => {
    loadPreline();
  }, [loadPreline, path]);

  return null;
}
