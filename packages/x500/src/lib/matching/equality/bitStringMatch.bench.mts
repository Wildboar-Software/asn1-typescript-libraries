// Run with `npx vitest bench --run src/lib/matching` from packages/x500.
import { Buffer } from "node:buffer";
import { describe, expect, test } from "vitest";
import { bytesEqual } from "../constantTime.mjs";
import { bitStringMatchTyped } from "./bitStringMatch.mjs";

const localTyped = bitStringMatchTyped;
const localBytesEqual = bytesEqual;

function wrapThenEqual (a: Uint8ClampedArray, b: Uint8ClampedArray): boolean {
    return localBytesEqual(
        Buffer.from(a.buffer, a.byteOffset, a.byteLength),
        Buffer.from(b.buffer, b.byteOffset, b.byteLength),
        0,
    );
}

function directEqual (a: Uint8ClampedArray, b: Uint8ClampedArray): boolean {
    return localBytesEqual(a, b, 0);
}

const lengths = [ 2, 6, 16, 32 ];

let sink = 0;

describe("bitStringMatchTyped skips Buffer.from wrapping", () => {
    for (const len of lengths) {
        const a = new Uint8ClampedArray(len).fill(0xA5);
        const b = new Uint8ClampedArray(len).fill(0xA5);
        test(`${len} bits-octets, equal`, async ({ bench }) => {
            expect(localTyped(a, b)).toBe(wrapThenEqual(a, b));
            expect(directEqual(a, b)).toBe(wrapThenEqual(a, b));
            const result = await bench.compare(
                bench("Buffer.from wrap", () => {
                    sink += wrapThenEqual(a, b) ? 1 : 0;
                }),
                bench("direct clamped arrays", () => {
                    sink += directEqual(a, b) ? 1 : 0;
                }),
            );
            expect(result.get("direct clamped arrays")).toBeFasterThan(result.get("Buffer.from wrap"));
        });
    }
});

export { sink };
