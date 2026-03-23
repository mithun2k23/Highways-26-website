
export const ASSET_BASE_URL = 'https://cdn.highways26.com'; // Adjust this to your R2 domain

export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http')) return path;

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${ASSET_BASE_URL}${cleanPath}`;
};
