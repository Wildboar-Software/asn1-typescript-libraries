import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import type { RDNSequence } from "../RDNSequence.ta.mjs";
import {
    asDITAscending,
    asDITDescending,
    getRDNFromDITAscending,
    getRDNFromDITDescending,
    getTopLevelRDNFromDITAscending,
    getTopLevelRDNFromDITDescending,
    toDITAscending,
    toDITDescending,
} from "./order.mjs";

function rdn (arcs: number[], value: string): RelativeDistinguishedName {
    return [
        new AttributeTypeAndValue(
            ObjectIdentifier.fromParts(arcs),
            _encodeUTF8String(value, BER),
        ),
    ];
}

const c: RelativeDistinguishedName = rdn([2, 5, 4, 6], "US");
const o: RelativeDistinguishedName = rdn([2, 5, 4, 10], "Company");
const cn: RelativeDistinguishedName = rdn([2, 5, 4, 3], "Bob");

describe("asDITAscending() and asDITDescending()", () => {
    it("return the same array, unchanged", () => {
        const rdns: RDNSequence = [cn, o, c];
        expect(asDITAscending(rdns)).toBe(rdns);
        expect(asDITDescending(rdns)).toBe(rdns);
        expect(rdns).toEqual([cn, o, c]);
    });
});

describe("toDITAscending()", () => {
    it("returns a reversed copy without modifying the input", () => {
        const descending = asDITDescending([c, o, cn]);
        const ascending = toDITAscending(descending);
        expect(ascending).not.toBe(descending);
        expect(ascending).toEqual([cn, o, c]);
        expect(descending).toEqual([c, o, cn]);
    });

    it("converts the root DN", () => {
        expect(toDITAscending(asDITDescending([])))
            .toEqual([]);
    });
});

describe("toDITDescending()", () => {
    it("returns a reversed copy without modifying the input", () => {
        const ascending = asDITAscending([cn, o, c]);
        const descending = toDITDescending(ascending);
        expect(descending).not.toBe(ascending);
        expect(descending).toEqual([c, o, cn]);
        expect(ascending).toEqual([cn, o, c]);
    });

    it("is undone by toDITAscending()", () => {
        const ascending = asDITAscending([cn, o, c]);
        expect(toDITAscending(toDITDescending(ascending)))
            .toEqual(ascending);
    });
});

describe("getRDNFromDITAscending()", () => {
    it("returns the first RDN without modifying the input", () => {
        const ascending = asDITAscending([cn, o, c]);
        expect(getRDNFromDITAscending(ascending)).toBe(cn);
        expect(ascending).toEqual([cn, o, c]);
    });

    it("returns undefined for the root DN", () => {
        expect(getRDNFromDITAscending(asDITAscending([])))
            .toBeUndefined();
    });
});

describe("getRDNFromDITDescending()", () => {
    it("returns the last RDN without modifying the input", () => {
        const descending = asDITDescending([c, o, cn]);
        expect(getRDNFromDITDescending(descending)).toBe(cn);
        expect(descending).toEqual([c, o, cn]);
    });

    it("returns undefined for the root DN", () => {
        expect(getRDNFromDITDescending(asDITDescending([])))
            .toBeUndefined();
    });

    it("agrees with getRDNFromDITAscending() after conversion", () => {
        const descending = asDITDescending([c, o, cn]);
        expect(getRDNFromDITAscending(
            toDITAscending(descending),
        )).toBe(getRDNFromDITDescending(descending));
    });
});

describe("getTopLevelRDNFromDITAscending()", () => {
    it("returns the last RDN without modifying the input", () => {
        const ascending = asDITAscending([cn, o, c]);
        expect(getTopLevelRDNFromDITAscending(ascending)).toBe(c);
        expect(ascending).toEqual([cn, o, c]);
    });

    it("returns undefined for the root DN", () => {
        expect(getTopLevelRDNFromDITAscending(asDITAscending([])))
            .toBeUndefined();
    });
});

describe("getTopLevelRDNFromDITDescending()", () => {
    it("returns the first RDN without modifying the input", () => {
        const descending = asDITDescending([c, o, cn]);
        expect(getTopLevelRDNFromDITDescending(descending)).toBe(c);
        expect(descending).toEqual([c, o, cn]);
    });

    it("returns undefined for the root DN", () => {
        expect(getTopLevelRDNFromDITDescending(asDITDescending([])))
            .toBeUndefined();
    });

    it("agrees with getTopLevelRDNFromDITAscending() after conversion", () => {
        const descending = asDITDescending([c, o, cn]);
        expect(getTopLevelRDNFromDITAscending(
            toDITAscending(descending),
        )).toBe(getTopLevelRDNFromDITDescending(descending));
    });

    it("returns the same RDN as getRDNFromDITDescending() for one RDN", () => {
        const descending = asDITDescending([c]);
        expect(getTopLevelRDNFromDITDescending(descending))
            .toBe(getRDNFromDITDescending(descending));
    });
});
