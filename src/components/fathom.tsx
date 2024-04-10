"use client";
import {EventOptions, load, trackEvent, trackPageview} from "fathom-client";
import React, {Suspense, useEffect} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import Link from "next/link";

const SITE_ID = process.env.NEXT_PUBLIC_FATHOM_SITE_ID as string;

export const TrackEvent = (event: string, opts?: EventOptions) => {
  trackEvent(event, opts);
}

export const TrackedLink = ({event, children, ...rest}) => {
  const {href} = rest;

  useEffect(() => {
    load(SITE_ID, {
      spa: "auto",
    });
  }, [])
  return (
    <Link
      href={href}
      {...rest}
      onClick={() => TrackEvent(event)}>{children}</Link>
  )
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