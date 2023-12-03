/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.REPO_PATH,
    assetPrefix: process.env.REPO_PATH,
    output: 'export'
}

module.exports = nextConfig
