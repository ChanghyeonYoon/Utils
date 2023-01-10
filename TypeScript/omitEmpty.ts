export const omitEmpty = (obj: Record<string, any>) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (value) {
            acc[key] = value;
        }
        return acc;
    }, {} as Record<string, any>);
};
