/**
 * @function objectFlat
 * @params obj {array} json
 * @example json.map((x) => objectFlat(x))
 * */
export const objectTo1depth = (obj, join = '_', parents = []) => {
    return Object.entries(obj).reduce((acc, [childKey, value]) => {
        return value !== null && typeof value === 'object'
            ? { ...acc, ...objectTo1depth(value, join, [...parents, childKey]) }
            : { ...acc, [[...parents, childKey].join(join)]: value };
    }, {});
};