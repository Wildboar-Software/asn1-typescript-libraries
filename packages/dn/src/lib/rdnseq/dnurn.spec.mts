import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodePrintableString, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import type { RDNSequenceDescending } from "../brands.mjs";
import { urnCOID } from "../attributeTypes.mjs";
import { asDITDescending } from "./order.mjs";
import { dnFromURN } from "./dnfromurn.mjs";
import { dnToURN } from "./dntourn.mjs";

function urnC (value: string): RelativeDistinguishedName {
    return [
        new AttributeTypeAndValue(
            ObjectIdentifier.fromString(urnCOID),
            _encodePrintableString(value, BER),
        ),
    ];
}

function desc (...rdns: RelativeDistinguishedName[]): RDNSequenceDescending {
    return asDITDescending(rdns);
}

describe("dnToURN()", () => {
    it("joins the components after an implied urn prefix, highest first", () => {
        expect(dnToURN(desc(urnC("isbn"), urnC("0451450523")))).toBe("urn:isbn:0451450523");
    });

    it("converts a single component", () => {
        expect(dnToURN(desc(urnC("isbn")))).toBe("urn:isbn");
    });

    it("returns null for an empty sequence", () => {
        expect(dnToURN(desc())).toBeNull();
    });

    it("returns null if an RDN does not have exactly one ATAV", () => {
        expect(dnToURN(desc(urnC("a"), [...urnC("b"), ...urnC("c")]))).toBeNull();
        expect(dnToURN(desc(urnC("a"), []))).toBeNull();
    });

    it("returns null if an attribute type is not urnC", () => {
        const cn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                ObjectIdentifier.fromParts([2, 5, 4, 3]),
                _encodePrintableString("b", BER),
            ),
        ];
        expect(dnToURN(desc(urnC("a"), cn))).toBeNull();
    });

    it("returns null if a value is not a PrintableString", () => {
        const utf8: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                ObjectIdentifier.fromString(urnCOID),
                _encodeUTF8String("b", BER),
            ),
        ];
        expect(dnToURN(desc(urnC("a"), utf8))).toBeNull();
    });

    it("returns null if a value contains the delimiter", () => {
        expect(dnToURN(desc(urnC("a"), urnC("b:c")))).toBeNull();
    });
});

describe("dnFromURN()", () => {
    it("creates one urnC RDN per component, highest first", () => {
        const rdns = dnFromURN("urn:isbn:0451450523")!;
        expect(rdns).toHaveLength(2);
        for (const rdn of rdns) {
            expect(rdn).toHaveLength(1);
            expect(rdn[0].type_.toString()).toBe(urnCOID);
        }
        expect(rdns.map((rdn) => rdn[0].value.printableString))
            .toEqual(["isbn", "0451450523"]);
    });

    it("recognizes the urn prefix without regard to case", () => {
        expect(dnToURN(dnFromURN("URN:Isbn:12")!)).toBe("urn:Isbn:12");
        expect(dnToURN(dnFromURN("Urn:isbn:12")!)).toBe("urn:isbn:12");
    });

    it("round-trips with dnToURN()", () => {
        for (const urn of ["urn:a", "urn:ietf:rfc:8141", "urn:x:(a+b),c=d.e-f/g?h 'i'"]) {
            expect(dnToURN(dnFromURN(urn)!)).toBe(urn);
        }
    });

    it("converts the bare prefix to an empty sequence", () => {
        expect(dnFromURN("urn:")).toEqual([]);
    });

    it("returns null if there is no urn: prefix", () => {
        expect(dnFromURN("")).toBeNull();
        expect(dnFromURN("urn")).toBeNull();
        expect(dnFromURN("isbn:0451450523")).toBeNull();
        expect(dnFromURN("urnx:a")).toBeNull();
    });

    it("returns null if a component is empty", () => {
        expect(dnFromURN("urn:a::b")).toBeNull();
        expect(dnFromURN("urn:a:")).toBeNull();
        expect(dnFromURN("urn::a")).toBeNull();
    });

    it("returns null if a component has a character a PrintableString cannot have", () => {
        expect(dnFromURN("urn:a:b%20c")).toBeNull();
        expect(dnFromURN("urn:a:b_c")).toBeNull();
        expect(dnFromURN("urn:a:b@c")).toBeNull();
        expect(dnFromURN("urn:a:é")).toBeNull();
    });
});
