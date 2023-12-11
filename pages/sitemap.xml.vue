<template>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>{{ baseUrl }}</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>{{ baseUrl }}/#about</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>{{ baseUrl }}/#projects</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>{{ baseUrl }}/#contact</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
</template>

<script>
export default {
  computed: {
    baseUrl() {
      return process.env.BASE_URL || "https://olablac.com";
    },
  },
  async asyncData({ $http }) {},
};
</script>
