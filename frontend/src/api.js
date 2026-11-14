const PRODUCTION_API_URL = "https://ai-resume-analyzer-mern-1.onrender.com";
const DEVELOPMENT_API_URL = "http://localhost:5000";

const stripTrailingSlashes = (value) => value.replace(/\/+$/, "");

const resolveApiBaseUrl = () => {
    const configuredUrl = import.meta.env.VITE_API_URL;

    if (configuredUrl && configuredUrl.trim() !== "") {
        return stripTrailingSlashes(configuredUrl.trim());
    }

    return import.meta.env.DEV ? DEVELOPMENT_API_URL : PRODUCTION_API_URL;
};

export const API_BASE_URL = resolveApiBaseUrl();

export const apiUrl = (path) => {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${API_BASE_URL}${normalizedPath}`;
};
