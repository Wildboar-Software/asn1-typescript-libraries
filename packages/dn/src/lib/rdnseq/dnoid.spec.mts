import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeInteger, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import type { RDNSequenceDescending } from "../brands.mjs";
import { oidC1OID, oidC2OID, oidCOID } from "../attributeTypes.mjs";
import { asDITDescending } from "./order.mjs";
import { dnFromOID } from "./dnfromoid.mjs";
import { dnToOID } from "./dntooid.mjs";

function atav (type_: string, arc: number | bigint): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        ObjectIdentifier.fromString(type_),
        _encodeInteger(arc, BER),
    );
}

const c1 = (arc: number | bigint) => atav(oidC1OID, arc);
const c2 = (arc: number | bigint) => atav(oidC2OID, arc);
const c = (arc: number | bigint) => atav(oidCOID, arc);

function desc (...rdns: RelativeDistinguishedName[]): RDNSequenceDescending {
    return asDITDescending(rdns);
}

function summarize (rdns: RDNSequenceDescending): string[][] {
    return rdns.map((rdn) => rdn.map((a) => `${a.type_}=${a.value.integer}`));
}

describe("dnToOID()", () => {
    it("converts oidC-only RDNs from the highest down", () => {
        const oid = dnToOID(desc([c(2)], [c(5)], [c(4)], [c(3)]));
        expect(oid?.toString()).toBe("2.5.4.3");
    });

    it("converts oidC1 and oidC2 in the highest RDN to arcs 1 and 2", () => {
        expect(dnToOID(desc([c1(2), c2(5)], [c(4)], [c(3)]))?.toString()).toBe("2.5.4.3");
    });

    it("places the highest RDN's oidC after oidC1 and oidC2, in any order", () => {
        expect(dnToOID(desc([c1(2), c2(5), c(4)], [c(3)]))?.toString()).toBe("2.5.4.3");
        expect(dnToOID(desc([c(4), c2(5), c1(2)], [c(3)]))?.toString()).toBe("2.5.4.3");
    });

    it("allows oidC1 without oidC2", () => {
        expect(dnToOID(desc([c1(2)], [c(5)], [c(4)]))?.toString()).toBe("2.5.4");
        expect(dnToOID(desc([c1(2), c(5)], [c(4)]))?.toString()).toBe("2.5.4");
    });

    it("converts a two-arc name", () => {
        expect(dnToOID(desc([c1(1), c2(3)]))?.toString()).toBe("1.3");
    });

    it("converts arcs larger than Number.MAX_SAFE_INTEGER", () => {
        const big = 2n ** 80n;
        expect(dnToOID(desc([c(2)], [c(25)], [c(big)]))?.toString())
            .toBe(`2.25.${big}`);
    });

    it("returns null for an empty sequence", () => {
        expect(dnToOID(desc())).toBeNull();
    });

    it("returns null for an empty highest RDN", () => {
        expect(dnToOID(desc([], [c(1)]))).toBeNull();
    });

    it("returns null if oidC2 is present without oidC1", () => {
        expect(dnToOID(desc([c2(5)], [c(4)], [c(3)]))).toBeNull();
        expect(dnToOID(desc([c2(5), c(4)], [c(3)]))).toBeNull();
    });

    it("returns null if the highest RDN repeats a type", () => {
        expect(dnToOID(desc([c1(2), c1(2), c2(5)]))).toBeNull();
        expect(dnToOID(desc([c(2), c(5)], [c(4)]))).toBeNull();
    });

    it("returns null if oidC1 or oidC2 is in an RDN that is not the highest", () => {
        expect(dnToOID(desc([c(2)], [c1(5)]))).toBeNull();
        expect(dnToOID(desc([c1(2)], [c2(5)]))).toBeNull();
    });

    it("returns null if an RDN that is not the highest has more than one ATAV", () => {
        expect(dnToOID(desc([c(2)], [c(5), c(4)]))).toBeNull();
        expect(dnToOID(desc([c(2)], []))).toBeNull();
    });

    it("returns null for an attribute type that is not oidC1, oidC2, or oidC", () => {
        const cn = new AttributeTypeAndValue(
            ObjectIdentifier.fromParts([2, 5, 4, 3]),
            _encodeInteger(1, BER),
        );
        expect(dnToOID(desc([cn], [c(5)]))).toBeNull();
        expect(dnToOID(desc([c(2)], [cn]))).toBeNull();
    });

    it("returns null if a value is not an INTEGER", () => {
        const text = new AttributeTypeAndValue(
            ObjectIdentifier.fromString(oidCOID),
            _encodeUTF8String("5", BER),
        );
        expect(dnToOID(desc([c(2)], [text]))).toBeNull();
        expect(dnToOID(desc([text], [c(5)]))).toBeNull();
    });

    it("returns null if a value is negative", () => {
        expect(dnToOID(desc([c(2)], [c(-5)]))).toBeNull();
    });

    it("returns null if there are fewer than two arcs", () => {
        expect(dnToOID(desc([c(2)]))).toBeNull();
        expect(dnToOID(desc([c1(2)]))).toBeNull();
    });

    it("returns null if the first two arcs are not valid", () => {
        expect(dnToOID(desc([c(3)], [c(1)]))).toBeNull();
        expect(dnToOID(desc([c(1)], [c(40)]))).toBeNull();
        expect(dnToOID(desc([c(0)], [c(40)]))).toBeNull();
        expect(dnToOID(desc([c1(1), c2(40)]))).toBeNull();
        expect(dnToOID(desc([c1(2), c2(40)]))?.toString()).toBe("2.40");
    });
});

describe("dnFromOID()", () => {
    const oid = ObjectIdentifier.fromString("2.5.4.3");

    it("creates oidC-only RDNs by default", () => {
        expect(summarize(dnFromOID(oid))).toEqual([
            [`${oidCOID}=2`],
            [`${oidCOID}=5`],
            [`${oidCOID}=4`],
            [`${oidCOID}=3`],
        ]);
        expect(summarize(dnFromOID(oid, false))).toEqual(summarize(dnFromOID(oid)));
    });

    it("creates oidC1, oidC2, and oidC in the highest RDN if requested", () => {
        expect(summarize(dnFromOID(oid, true))).toEqual([
            [`${oidC1OID}=2`, `${oidC2OID}=5`, `${oidCOID}=4`],
            [`${oidCOID}=3`],
        ]);
    });

    it("creates only oidC1 and oidC2 for a two-arc OID", () => {
        const rdns = dnFromOID(ObjectIdentifier.fromString("2.5"), true);
        expect(summarize(rdns)).toEqual([[`${oidC1OID}=2`, `${oidC2OID}=5`]]);
    });

    it("creates one oidC1, oidC2, and oidC RDN for a three-arc OID", () => {
        const rdns = dnFromOID(ObjectIdentifier.fromString("1.3.6"), true);
        expect(summarize(rdns)).toEqual([
            [`${oidC1OID}=1`, `${oidC2OID}=3`, `${oidCOID}=6`],
        ]);
    });

    it("creates one oidC RDN per arc for a two-arc OID without oidC1 and oidC2", () => {
        const rdns = dnFromOID(ObjectIdentifier.fromString("2.5"));
        expect(summarize(rdns)).toEqual([[`${oidCOID}=2`], [`${oidCOID}=5`]]);
    });

    it("encodes arcs larger than Number.MAX_SAFE_INTEGER", () => {
        const big = 2n ** 80n;
        const rdns = dnFromOID(ObjectIdentifier.fromStringWithBigArcs(`2.25.${big}`));
        expect(rdns[2][0].value.integer).toBe(big);
    });

    it("round-trips with dnToOID()", () => {
        for (const str of [
            "0.0", "1.3", "2.5", "2.40", "1.3.6", "2.5.4.3", "1.2.840.113549.1.1.11",
            `2.25.${2n ** 100n}`,
        ]) {
            const original = ObjectIdentifier.fromStringWithBigArcs(str);
            for (const both of [false, true]) {
                const back = dnToOID(dnFromOID(original, both));
                expect(back?.toString(), `${str}, ${both}`).toBe(original.toString());
            }
        }
    });
});
