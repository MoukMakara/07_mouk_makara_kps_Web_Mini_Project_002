/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APIURL: "http://96.9.81.187:8080/api/v1",
  },
  redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
