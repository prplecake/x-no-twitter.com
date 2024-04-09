"use client";
import {EventOptions, load, trackEvent, trackPageview} from "fathom-client";
import {Suspense, useEffect} from "react";
import {usePathname, useSearchParams} from "next/navigation";

const SITE_ID = process.env.NEXT_PUBLIC_FATHOM_SITE_ID as string;

export const TrackEvent = (event: string, opts?: EventOptions) => {
  trackEvent(event, opts);
}

const TrackPageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    load(SITE_ID, {
      spa: "auto",
    });
  }, []);

  useEffect(() => {
    trackPageview();
  }, [pathname, searchParams]);

  return null;
}

const Fathom = () => {
  return (
    <Suspense fallback={null}>
      <TrackPageView/>
    </Suspense>
  );
}

export default Fathom;