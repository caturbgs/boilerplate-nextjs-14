// Storing Global Variables that being referenced from .env variabels or no
export const appConfig = {
  revalidateTime: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) || 60,
};
