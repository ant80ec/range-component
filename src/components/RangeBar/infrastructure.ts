export const calculatePosition = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
};