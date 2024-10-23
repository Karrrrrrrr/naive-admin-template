export const useEnv = () => {
    const env = import.meta.env
    return {
        mapboxSecret: env.VITE_MAPBOX_SECRET as string,
        name: env.VITE_NAME as string,
        title: env.VITE_TITLE as string,
        storagePrefix: env.VITE_STORAGE_PREFIX as string,
        apiBase: env.VITE_API_BASE as string,
        amapSecret: env.VITE_AMAP_SECRET as string,
        baiduMapSecret: env.VITE_BAIDU_MAP_SECRET as string,
        tencentMapSecret: env.VITE_TENCENT_MAP_SECRET as string,

        BASE_URL: env.BASE_URL,
        MODE: env.MODE,
        DEV: env.DEV,
        PROD: env.PROD,
        SSR: env.SSR,
    }
}
