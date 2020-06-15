"use strict";

const isFirstRun = async () => {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup",
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
};

const setDefaultFileUploader = async () => {
  if (strapi.config.environment !== "production") {
    return;
  }
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "plugin",
    name: "upload",
  });
  const config = await pluginStore.get({ key: "provider" });
  await pluginStore.set({
    key: "provider",
    value: {
      ...config,
      ...{
        provider: "cloudinary",
        name: "Cloudinary",
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      },
    },
  });
};

module.exports = async () => {
  const shouldInit = await isFirstRun();
  if (shouldInit) {
    await setDefaultFileUploader();
  }
};
