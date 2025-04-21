// BEGIN
export default function make(numer, denom){
    return {
        numer,
        denom,
        setNumer(newNum){
            this.numer = newNum;
        },
        setDenom(newDenom){
            this.denom = newDenom;
        },
        getDenom(){
            return this.denom;
        },
        getNumer(){
            return this.numer;
        },
        toString(){
            return `${this.numer}/${this.denom}`;
        },
        add(rat){
            let newNum = this.numer * rat.getDenom() + this.denom * rat.getNumer();
            let newDenom = this.denom * rat.getDenom();
            return make(newNum, newDenom);
        },
    };
};
// END