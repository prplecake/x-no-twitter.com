"use client";

const getOrigin = () => window.location.origin
  .replace(/https?:\/\//, "");

export default getOrigin;