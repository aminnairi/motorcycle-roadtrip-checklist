/// <reference types="vite/client" />

interface ImportMeta {
  env: {
    DEV: boolean,
    PROD: boolean,
    MODE: string,
    BASE_URL: string
  }
}
