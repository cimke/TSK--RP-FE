export const isMobile = (userAgent: string): boolean => {
    return /android.+mobile|ip(hone|od|ad)/i.test(userAgent);
};
