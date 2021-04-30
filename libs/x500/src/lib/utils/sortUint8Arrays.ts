
export
function sortUint8Arrays (a: Uint8Array, b: Uint8Array): number {
    const len: number = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) {
        if (b[i] !== a[i]) {
            return (b[i] - a[i]);
        }
    }
    return (b.length - a.length);
}

export default sortUint8Arrays;
