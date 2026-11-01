// Run with `npx vitest bench --run src/lib/matching/ordering` from packages/x500.
import { ObjectIdentifier, type ASN1Element, type INTEGER } from "@wildboar/asn1";
import { DER, _encodeInteger } from "@wildboar/asn1/functional";
import { describe, expect, test } from "vitest";
import { Attribute } from "../../modules/InformationFramework/Attribute.ta.mjs";
import { createOrderingMatcher } from "../../types/matching.mjs";
import integerOrderingMatch, {
    integerOrderingMatchTyped,
} from "./integerOrderingMatch.mjs";

// Vite's module runner turns imported bindings into getters. Local copies keep
// that per-call overhead out of the measurement for both implementations.
const octetsTyped = integerOrderingMatchTyped;
const octetsMatcher = integerOrderingMatch;

function readInteger (value: INTEGER | ASN1Element): bigint {
    if (typeof value === "number") {
        return BigInt(value);
    }
    if (typeof value === "bigint") {
        return value;
    }
    const decoded = value.integer;
    return typeof decoded === "bigint" ? decoded : BigInt(decoded);
}

/** The implementation that decoded both INTEGERs and subtracted them. */
function decodingTyped (assertion: INTEGER | ASN1Element, value: INTEGER | ASN1Element): number {
    return Number(readInteger(assertion) - readInteger(value));
}

const decodingMatcher = createOrderingMatcher((el) => el.integer, decodingTyped);

function integer (value: number | bigint): ASN1Element {
    return _encodeInteger(value, DER);
}

const pairs: [ string, ASN1Element, ASN1Element ][] = [
    [ "1 octet (5 vs 100)", integer(5), integer(100) ],
    [ "4 octets (-2^30 vs 2^30)", integer(-(2 ** 30)), integer(2 ** 30) ],
    [ "8 octets (2^62 vs 2^62 + 1)", integer(2n ** 62n), integer(2n ** 62n + 1n) ],
    [ "different lengths (2^40 vs 7)", integer(2n ** 40n), integer(7) ],
    [ "32 octets, equal", integer(2n ** 250n + 12345n), integer(2n ** 250n + 12345n) ],
];

let sink = 0;

describe("integerOrderingMatchTyped", () => {
    for (const [ name, a, b ] of pairs) {
        test(name, async ({ bench }) => {
            expect(Math.sign(octetsTyped(a, b)!)).toBe(Math.sign(decodingTyped(a, b)));
            const result = await bench.compare(
                bench("decode", () => {
                    sink += decodingTyped(a, b);
                }),
                bench("compare octets", () => {
                    sink += octetsTyped(a, b)!;
                }),
            );
            expect(result.get("compare octets")).toBeFasterThan(result.get("decode"));
        });
    }
});

describe("integerOrderingMatch", () => {
    const values: ASN1Element[] = [];
    for (let i = 0; i < 20; i++) {
        values.push(integer(1_000_000n + BigInt(i) * 7919n));
    }
    const attribute = new Attribute(ObjectIdentifier.fromParts([ 2, 5, 4, 999 ]), values);
    const assertion = integer(0);

    test("20 non-matching 3-octet values", async ({ bench }) => {
        expect(decodingMatcher(assertion, attribute)).toBe(false);
        expect(octetsMatcher(assertion, attribute)).toBe(false);
        const result = await bench.compare(
            bench("decode", () => {
                sink += decodingMatcher(assertion, attribute) ? 1 : 0;
            }),
            bench("compare octets", () => {
                sink += octetsMatcher(assertion, attribute) ? 1 : 0;
            }),
        );
        expect(result.get("compare octets")).toBeFasterThan(result.get("decode"));
    });
});

export { sink };
