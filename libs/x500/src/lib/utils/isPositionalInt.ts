export
function isPositionalInt (max: number): (num: number) => boolean {
    return function (num: number): boolean {
        return (
            (num > 0)
            && (num <= max)
            && (Number.isSafeInteger(num))
        );
    };
}

export default isPositionalInt;
