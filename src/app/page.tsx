"use client";
import getOrigin from "@/functions/getOrigin";
import {useEffect, useState} from "react";
import {TrackedLink} from "@/components/fathom";

const title = "Are you serious, X Corp?";
const description = `Ahoy there, welcome to {this_site}!
    I assure you, there's nothing fishy going on here, so feel free to read on.

    Yeah, it's a "honeypot". Sorry about that.
    I'm not trying to apologize and get away with it, though.

    But when you clicked on this link, you probably thought
    you were looking at something like "{domain}".
    Simple URL substitution can cause this kind of thing to happen,
    so I made this site.

    So let's shout it out.

    "Are you serious, X Corp?"`;

export default function Home() {
  const [origin, setOrigin] = useState("");
  useEffect(() => {
    setOrigin(process.env.NODE_ENV === "development" ? "carfatwitter.com" : getOrigin());
  }, []);
  const this_site = origin
    .replace(/https?:\/\//, "");
  const domain = this_site.replace("twitter.com", "x.com");
  return (
    <main>
      <div>
        <h1>{title}</h1>
        <p
          className={"main"}
          dangerouslySetInnerHTML={{
            __html: description
              .replaceAll("\n", "<br/>")
              .replace("{this_site}", this_site)
              .replace("{domain}", domain)
          }}
        ></p>
        <p><TrackedLink
          href={process.env.REPO_URL}
          event={"repo link clicked"}
          rel="noopener noreferrer">
          btw this page is open source, prplecake/x-no-twitter.com
        </TrackedLink></p>
        <p><TrackedLink
          href={"https://compostintraining.club/@prplecake"}
          event={"fediverse link clicked"}
          rel={"me"}>by prplecake.</TrackedLink></p>
        <p><TrackedLink
          href={"https://roblotwitter.com"}
          event={"original page link clicked"}
        >Original page</TrackedLink> by <TrackedLink
          href={"https://sevenc7c.com/"}
          event={"original author link clicked"}
        >Nanashi.</TrackedLink></p>
      </div>
    </main>
  );
}
