import { createClient } from "@sanity/client";

export default createClient({
  projectId: "wh4vei9o",
  dataset: "production",
  apiVersion: '2021-10-21',
  useCdn: true,
});
