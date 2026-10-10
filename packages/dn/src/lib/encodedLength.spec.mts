import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeOctetString, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue, _encode_AttributeTypeAndValue } from "./AttributeTypeAndValue.ta.mjs";
import { _encode_RelativeDistinguishedName } from "./RelativeDistinguishedName.ta.mjs";
import { _encode_RDNSequence } from "./RDNSequence.ta.mjs";
import { _encode_Name } from "./Name.ta.mjs";
import getAttributeTypeAndValueEncodedLength from "./atav/encodedLength.mjs";
import getRelativeDistinguishedNameEncodedLength from "./rdn/encodedLength.mjs";
import getRDNSequenceEncodedLength from "./rdnseq/encodedLength.mjs";
import getNameEncodedLength from "./name/encodedLength.mjs";
import { definiteLengthLength } from "./encodedLength.mjs";

function atav (arcs: number[], value: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        ObjectIdentifier.fromParts(arcs),
        _encodeUTF8String(value, BER),
    );
}

// Value sizes that straddle every length-of-length boundary.
const sizes = [0, 1, 100, 124, 125, 126, 127, 128, 200, 252, 253, 254, 255, 256, 1000, 65000, 70000];

describe("definiteLengthLength()", () => {
    it("matches the library's boundaries", () => {
        expect(definiteLengthLength(0)).toBe(1);
        expect(definiteLengthLength(126)).toBe(1);
        expect(definiteLengthLength(127)).toBe(2);
        expect(definiteLengthLength(255)).toBe(2);
        expect(definiteLengthLength(256)).toBe(3);
        expect(definiteLengthLength(0xFFFF)).toBe(3);
        expect(definiteLengthLength(0x10000)).toBe(4);
        expect(definiteLengthLength(0xFFFFFF)).toBe(4);
        expect(definiteLengthLength(0x1000000)).toBe(5);
    });
});

describe("getAttributeTypeAndValueEncodedLength()", () => {
    it("matches the encoding for many value sizes", () => {
        for (const size of sizes) {
            const a = atav([2, 5, 4, 3], "a".repeat(size));
            const actual = _encode_AttributeTypeAndValue(a).toBytes().length;
            expect(getAttributeTypeAndValueEncodedLength(a)).toBe(actual);
            expect(a.getEncodedLength()).toBe(actual);
        }
    });

    it("handles long and multi-byte OIDs", () => {
        const a = new AttributeTypeAndValue(
            ObjectIdentifier.fromParts([2, 999, 1, 200, 70000, 300000000]),
            _encodeUTF8String("x", BER),
        );
        expect(getAttributeTypeAndValueEncodedLength(a))
            .toBe(_encode_AttributeTypeAndValue(a).toBytes().length);
    });

    it("handles constructed values", () => {
        const inner = _encodeOctetString(new Uint8Array(300), BER);
        const value = _encodeUTF8String("", BER);
        value.construct([inner, inner]);
        const a = new AttributeTypeAndValue(ObjectIdentifier.fromParts([2, 5, 4, 3]), value);
        expect(getAttributeTypeAndValueEncodedLength(a))
            .toBe(_encode_AttributeTypeAndValue(a).toBytes().length);
    });

    it("includes unrecognized extensions", () => {
        const a = new AttributeTypeAndValue(
            ObjectIdentifier.fromParts([2, 5, 4, 3]),
            _encodeUTF8String("abc", BER),
            [_encodeUTF8String("x".repeat(200), BER), _encodeUTF8String("y", BER)],
        );
        expect(getAttributeTypeAndValueEncodedLength(a))
            .toBe(_encode_AttributeTypeAndValue(a).toBytes().length);
    });
});

describe("getRelativeDistinguishedNameEncodedLength()", () => {
    it("matches the encoding", () => {
        const rdns = [
            [atav([2, 5, 4, 3], "Bob")],
            [atav([2, 5, 4, 3], "Bob"), atav([2, 5, 4, 4], "S".repeat(300))],
        ];
        for (const rdn of rdns) {
            expect(getRelativeDistinguishedNameEncodedLength(rdn))
                .toBe(_encode_RelativeDistinguishedName(rdn, BER).toBytes().length);
        }
    });

    it("is two bytes for an empty set", () => {
        expect(getRelativeDistinguishedNameEncodedLength([])).toBe(2);
    });
});

describe("getRDNSequenceEncodedLength()", () => {
    it("is two bytes for the root DN", () => {
        expect(getRDNSequenceEncodedLength([])).toBe(2);
    });

    it("matches the encoding across length boundaries", () => {
        for (let n = 0; n < 40; n++) {
            const rdns = Array.from({ length: n }, (_, i) => [atav([2, 5, 4, 10], `Org ${i}`)]);
            expect(getRDNSequenceEncodedLength(rdns))
                .toBe(_encode_RDNSequence(rdns, BER).toBytes().length);
        }
        const big = [[atav([2, 5, 4, 3], "z".repeat(70000))]];
        expect(getRDNSequenceEncodedLength(big))
            .toBe(_encode_RDNSequence(big, BER).toBytes().length);
    });
});

describe("getNameEncodedLength()", () => {
    it("matches the encoding", () => {
        const name = {
            rdnSequence: [
                [atav([2, 5, 4, 6], "US")],
                [atav([2, 5, 4, 10], "Wildboar"), atav([2, 5, 4, 11], "Eng")],
                [atav([2, 5, 4, 3], "Jonathan")],
            ],
        };
        expect(getNameEncodedLength(name)).toBe(_encode_Name(name, BER).toBytes().length);
    });
});
