// Run with `npx vitest bench --run src/lib/matching` from packages/x500.
import { Buffer } from "node:buffer";
import { describe, expect, test } from "vitest";
import { bytesEqual } from "./constantTime.mjs";

// Vite's module runner turns imported bindings into getters. A local copy keeps
// that per-call overhead out of the measurement.
const localBytesEqual = bytesEqual;
const fastBytesEqual = (a: Uint8Array, b: Uint8Array) => localBytesEqual(a, b, false);

function bufferCompareEqual (a: Uint8Array, b: Uint8Array): boolean {
    return Buffer.compare(a, b) === 0;
}

const smallLengths = [ 1, 4, 8, 16, 24, 32 ];

let sink = 0;

describe("bytesEqual (non-constant-time) vs Buffer.compare on small byte arrays", () => {
    for (const len of smallLengths) {
        const a = new Uint8Array(len).fill(0x5A);
        const b = new Uint8Array(len).fill(0x5A);
        test(`${len} octets, equal`, async ({ bench }) => {
            expect(fastBytesEqual(a, b)).toBe(bufferCompareEqual(a, b));
            const result = await bench.compare(
                bench("Buffer.compare", () => {
                    sink += bufferCompareEqual(a, b) ? 1 : 0;
                }),
                bench("indexed loop", () => {
                    sink += fastBytesEqual(a, b) ? 1 : 0;
                }),
            );
            expect(result.get("indexed loop")).toBeFasterThan(result.get("Buffer.compare"));
        });
    }
});

export { sink };
