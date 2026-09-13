"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalProvider() {
  useEffect(() => {
    const initOneSignal = async () => {
      // OneSignal is configured for the production website.
      // Do not initialize it while running on localhost.
      if (window.location.origin !== "https://shrimanbuildcon.com") {
        console.log("OneSignal skipped on localhost.");
        return;
      }

      try {
        await OneSignal.init({
          appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID!,
        });

        console.log("OneSignal initialized successfully");
      } catch (error) {
        console.error("OneSignal initialization failed:", error);
      }
    };

    initOneSignal();
  }, []);

  return null;
}