// BEGIN
const bind = (obj, fn) => {
    return function(...args) {
        return fn.call(obj, ...args);
    };
};
export default bind;// END