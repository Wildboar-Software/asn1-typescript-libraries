// Run with `npx vitest bench --run src/lib/matching` from packages/x500.
import { Buffer } from "node:buffer";
import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import { describe, expect, test } from "vitest";
import type { AssertedSubstring } from "../../types/matching.mjs";
import { octetStringSubstringsMatchTyped } from "./octetStringSubstringsMatch.mjs";

const localTyped = octetStringSubstringsMatchTyped;

function matchByCopying (
    stored: Uint8Array,
    assertion: AssertedSubstring<Uint8Array>[],
): boolean {
    const buf = Buffer.from(stored);
    let start = 0;
    let end = stored.length;
    for (let i = 0; i < assertion.length; i++) {
        const piece = assertion[i];
        if ("initial" in piece) {
            const needle = piece.initial;
            const next = start + needle.length;
            if (next > end || Buffer.compare(stored.subarray(start, next), needle) !== 0) {
                return false;
            }
            start = next;
        } else if ("any_" in piece) {
            const needle = piece.any_;
            const idx = buf.indexOf(needle, start);
            if (idx < 0 || (idx + needle.length) > end) {
                return false;
            }
            start = idx + needle.length;
        } else if ("final" in piece) {
            const needle = piece.final;
            const finalStart = end - needle.length;
            if (
                finalStart < start
                || Buffer.compare(stored.subarray(finalStart, end), needle) !== 0
            ) {
                return false;
            }
            end = finalStart;
        }
    }
    return true;
}

function storedElement (bytes: Uint8Array): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.octetString,
        bytes,
    );
}

const small = Buffer.from("the quick brown fox jumps over the lazy dog the quick brown fox");
const smallAssertion: AssertedSubstring<Uint8Array>[] = [
    { initial: Buffer.from("the") },
    { any_: Buffer.from("fox") },
    { any_: Buffer.from("lazy") },
    { final: Buffer.from("fox") },
];
const large = Buffer.alloc(4096, 0x61);
large.set(Buffer.from("NEEDLE"), 2000);
large.set(Buffer.from("TAIL"), 4092);
const largeAssertion: AssertedSubstring<Uint8Array>[] = [
    { any_: Buffer.from("NEEDLE") },
    { final: Buffer.from("TAIL") },
];

let sink = 0;

describe("octetStringSubstringsMatchTyped Buffer view vs copy", () => {
    for (const [ name, stored, assertion ] of [
        [ "~60 octets", small, smallAssertion ],
        [ "4KiB", large, largeAssertion ],
    ] as const) {
        test(name, async ({ bench }) => {
            const el = storedElement(stored);
            expect(localTyped(assertion, el)).toBe(matchByCopying(el.octetString, assertion));
            const result = await bench.compare(
                bench("Buffer.from copy", () => {
                    sink += matchByCopying(el.octetString, assertion) ? 1 : 0;
                }),
                bench("Buffer view", () => {
                    sink += localTyped(assertion, el) ? 1 : 0;
                }),
            );
            expect(result.get("Buffer view")).toBeFasterThan(result.get("Buffer.from copy"));
        });
    }
});

export { sink };
