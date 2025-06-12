export
function bytesToAscii (bytes: Uint8Array): string {
    return Array.from(bytes).map((byte) => String.fromCharCode(byte)).join("");
}

export default bytesToAscii;
