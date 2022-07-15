export
function compareUint8Arrays (a: Uint8Array, b: Uint8Array): boolean {
    return !Buffer.compare(a, b);
}

export default compareUint8Arrays;
