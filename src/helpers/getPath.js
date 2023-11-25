export const getImagePath = (imgName) => {
    return new URL(`../assets/Images/${imgName}`, import.meta.url).href;
};

export const getIconPath = (iconName) => {
    return new URL(`../assets/Icons/${iconName}`, import.meta.url).href;
};