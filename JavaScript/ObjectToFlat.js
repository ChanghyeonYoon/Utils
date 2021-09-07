/**
 * @function objectFlat
 * @params obj {array} json
 * @example json.map((x) => objectFlat(x))
 * */
const objectFlat = (obj, parents = []) => {
    return Object.entries(obj).reduce((acc, [childKey, value]) => {
        typeof value === 'object'
            ? { …acc, …objectFlat(value, […parents, childKey]) }
    : { …acc, [[…parents, childKey].join('.')]: value };
    }, {});
};