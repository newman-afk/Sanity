import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-10-21",
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: "true",
});
