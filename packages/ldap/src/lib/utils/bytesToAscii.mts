import { Buffer } from "node:buffer";

export
function bytesToAscii (bytes: Uint8Array): string {
    return Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString("ascii");
}

export default bytesToAscii;
