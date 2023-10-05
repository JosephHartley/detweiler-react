import { createClient } from "@sanity/client";

export default createClient({
  projectId: "wh4vei9o",
  dataset: "production",
  useCdn: true,
});
