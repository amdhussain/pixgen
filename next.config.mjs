// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   images: {
//     remotePatterns: [
//       {
//          hostname: 'i.pinimg.com'
//   }
// ]
// }
// };

// export default nextConfig;





// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true,

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "i.pinimg.com",
//       },
//     ],
//   },
// };

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;