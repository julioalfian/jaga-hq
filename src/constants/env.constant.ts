import packageJson from "../../package.json"
export const ENV = {
    ENDPOINT: import.meta.env.VITE_APP_BASE_ENDPOINT,
    ENV_TYPE: import.meta.env.VITE_APP_ENV,
    VERSION: packageJson.version
}