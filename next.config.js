// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Acepta cualquier dominio
        port: "",
        pathname: "**", // Acepta cualquier ruta
      },
    ],
  },
};
