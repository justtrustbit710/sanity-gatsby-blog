export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61cb4cec5ab84b750b1b3cce",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-mkqeqe34",
                  apiId: "bac6090a-9fe8-4566-b34a-91bd90826775",
                },
                {
                  buildHookId: "61cb4ced2738dab8366fdbea",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-rsd7tv7d",
                  apiId: "f6d5b58e-bedc-495f-b54d-e68767808420",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/justtrustbit710/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-rsd7tv7d.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
