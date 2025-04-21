// BEGIN
function magic(...args) {
    let sum = args.reduce((acc, cur) => acc + cur, 0);
    let next = (...nextArgs) => {return magic(...args, ...nextArgs);};
    next.valueOf =()=>sum;
    return next;
}
export default magic
// END
