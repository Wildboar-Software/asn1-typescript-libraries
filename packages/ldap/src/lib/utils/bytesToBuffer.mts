import { Buffer } from "node:buffer";

/**
 * @summary Copy a `Uint8Array` view into a `Buffer` without reading sibling bytes.
 * @param bytes The bytes to copy.
 * @returns A buffer containing exactly `bytes`.
 * @function
 */
export
function bytesToBuffer (bytes: Uint8Array): Buffer {
    return Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

export default bytesToBuffer;
