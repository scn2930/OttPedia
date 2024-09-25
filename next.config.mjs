/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 이미지 url 설정 추가
  images: {
    domains: ['poc-cf-image.cjenm.com', 'disney.images.edge.bamgrid.com', 'image.tving.com'], // 허용할 도메인 추가
  },
};

export default nextConfig;
