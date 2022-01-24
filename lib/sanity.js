import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "mv4xbeen",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skNDmU0mkT9waqSc5ZJSW7JWdLS6oUl6D9C5aOs3ZeW6S7SrYO6UuciLg2E5yhKnakNHPDUk51YRUvzQQLUzbyGqv1d068Jdf31YoZnbs1saU5T8SeaY0UKGO2cpoWOALRkj4NptK9hIGFNEbrMDCZ8M6mYbiYaCzO6nESRAxsXTfzLWhu1G",
  useCdn: false,
});
