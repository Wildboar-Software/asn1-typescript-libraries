import { describe, expect, expectTypeOf, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import type { RDNSequence } from "../RDNSequence.ta.mjs";
import type {
    RDNSequenceDescending,
    RDNSequenceEndingWith,
    RDNSequenceOf,
    RDNSequenceOfLength,
    RDNSequenceStartingWith,
} from "../brands.mjs";
import type {
    CommonNameRDN,
    DomainComponentRDNSequence,
    ObjectIdentifierComponentRDNSequence,
} from "../attributeTypes.mjs";
import { asDITDescending } from "./order.mjs";
import {
    isRDNSequenceEndingWith,
    isRDNSequenceOf,
    isRDNSequenceOfLength,
    isRDNSequenceStartingWith,
} from "./brand.mjs";

function rdn (arcs: number[], value: string): RelativeDistinguishedName {
    return [
        new AttributeTypeAndValue(
            ObjectIdentifier.fromParts(arcs),
            _encodeUTF8String(value, BER),
        ),
    ];
}

const dc = rdn([0, 9, 2342, 19200300, 100, 1, 25], "example");
const c = rdn([2, 5, 4, 6], "US");
const o = rdn([2, 5, 4, 10], "Company");
const cn = rdn([2, 5, 4, 3], "Bob");
const oidC1 = rdn([2, 17, 1, 2, 0], "2");
const oidC = rdn([2, 17, 1, 2, 2], "5");
const multi: RelativeDistinguishedName = [...cn, ...rdn([2, 5, 4, 4], "Smith")];

describe("RDNSequenceOfLength", () => {
    it("has the given length", () => {
        expectTypeOf<RDNSequenceOfLength<0>>().toEqualTypeOf<[]>();
        expectTypeOf<RDNSequenceOfLength<2>>().toEqualTypeOf<
            [RelativeDistinguishedName, RelativeDistinguishedName]
        >();
        expectTypeOf<RDNSequenceOfLength<3>["length"]>().toEqualTypeOf<3>();
        expectTypeOf<RDNSequenceOfLength<3>>().toExtend<RDNSequence>();
        expectTypeOf<RDNSequenceOfLength<number>>()
            .toEqualTypeOf<RelativeDistinguishedName[]>();
    });
});

describe("isRDNSequenceOfLength()", () => {
    it("tests the length", () => {
        expect(isRDNSequenceOfLength([], 0)).toBe(true);
        expect(isRDNSequenceOfLength([c], 0)).toBe(false);
        expect(isRDNSequenceOfLength([c, o, cn], 3)).toBe(true);
        expect(isRDNSequenceOfLength([c, o], 3)).toBe(false);
    });

    it("narrows to a fixed-length tuple, including length 0", () => {
        const dn: RDNSequence = [c, o, cn];
        if (isRDNSequenceOfLength(dn, 3)) {
            expectTypeOf(dn.length).toEqualTypeOf<3>();
            expectTypeOf(dn[2]).toEqualTypeOf<RelativeDistinguishedName>();
        }
        const empty: RDNSequence = [];
        if (isRDNSequenceOfLength(empty, 0)) {
            expectTypeOf(empty.length).toEqualTypeOf<0>();
        }
    });

    it("keeps the DIT order brand", () => {
        const dn = asDITDescending([c, o]);
        if (isRDNSequenceOfLength(dn, 2)) {
            expectTypeOf(dn).toExtend<RDNSequenceDescending>();
            expectTypeOf(dn.length).toEqualTypeOf<2>();
        }
    });
});

describe("isRDNSequenceOf()", () => {
    it("requires every RDN to be a single ATAV of the type", () => {
        expect(isRDNSequenceOf([dc, dc], "0.9.2342.19200300.100.1.25")).toBe(true);
        expect(isRDNSequenceOf([dc, c], "0.9.2342.19200300.100.1.25")).toBe(false);
        expect(isRDNSequenceOf([multi], "2.5.4.3")).toBe(false);
    });

    it("passes an empty sequence", () => {
        expect(isRDNSequenceOf([], "2.5.4.3")).toBe(true);
    });

    it("narrows a DN made only of domainComponent", () => {
        const dn: RDNSequence = [dc, dc];
        if (isRDNSequenceOf(dn, "0.9.2342.19200300.100.1.25")) {
            expectTypeOf(dn).toExtend<DomainComponentRDNSequence>();
            const toDNSName = (x: DomainComponentRDNSequence): number => x.length;
            expect(toDNSName(dn)).toBe(2);
        }
        // @ts-expect-error Not narrowed.
        ((x: DomainComponentRDNSequence): void => void x)(dn);
    });

    it("narrows a DN made of any of the oidC attribute types", () => {
        const dn: RDNSequence = [oidC1, oidC];
        const types = [
            "2.17.1.2.0",
            "2.17.1.2.1",
            "2.17.1.2.2",
        ] as const;
        expect(isRDNSequenceOf(dn, types)).toBe(true);
        if (isRDNSequenceOf(dn, types)) {
            expectTypeOf(dn).toExtend<ObjectIdentifierComponentRDNSequence>();
        }
        expect(isRDNSequenceOf([oidC1, cn], types)).toBe(false);
    });

    it("keeps the DIT order brand", () => {
        const dn = asDITDescending([dc]);
        if (isRDNSequenceOf(dn, "0.9.2342.19200300.100.1.25")) {
            expectTypeOf(dn).toExtend<RDNSequenceDescending>();
            expectTypeOf(dn).toExtend<DomainComponentRDNSequence>();
        }
    });

    it("is mutually exclusive between element types", () => {
        expectTypeOf<RDNSequenceOf<"2.5.4.3">>()
            .not.toExtend<RDNSequenceOf<"2.5.4.6">>();
        expectTypeOf<RDNSequenceOf<"2.5.4.3">>().toExtend<RDNSequence>();
        expectTypeOf<RDNSequence>().not.toExtend<RDNSequenceOf<"2.5.4.3">>();
    });
});

describe("isRDNSequenceEndingWith()", () => {
    it("tests the last RDN", () => {
        expect(isRDNSequenceEndingWith([c, o, cn], "2.5.4.3")).toBe(true);
        expect(isRDNSequenceEndingWith([cn, o, c], "2.5.4.3")).toBe(false);
        expect(isRDNSequenceEndingWith([c, o, multi], "2.5.4.3")).toBe(false);
    });

    it("fails an empty sequence", () => {
        expect(isRDNSequenceEndingWith([], "2.5.4.3")).toBe(false);
    });

    it("narrows to a DN ending with a commonName RDN", () => {
        const dn: RDNSequence = [c, o, cn];
        if (isRDNSequenceEndingWith(dn, "2.5.4.3")) {
            expectTypeOf(dn).toExtend<RDNSequenceEndingWith<CommonNameRDN>>();
            const useCN = (x: RDNSequenceEndingWith<CommonNameRDN>): number =>
                x.length;
            expect(useCN(dn)).toBe(3);
        }
    });

    it("keeps the DIT order brand", () => {
        const dn = asDITDescending([c, cn]);
        if (isRDNSequenceEndingWith(dn, "2.5.4.3")) {
            expectTypeOf(dn).toExtend<RDNSequenceDescending>();
            expectTypeOf(dn).toExtend<RDNSequenceEndingWith<CommonNameRDN>>();
        }
    });
});

describe("isRDNSequenceStartingWith()", () => {
    it("tests the first RDN", () => {
        expect(isRDNSequenceStartingWith([cn, o, c], "2.5.4.3")).toBe(true);
        expect(isRDNSequenceStartingWith([c, o, cn], "2.5.4.3")).toBe(false);
        expect(isRDNSequenceStartingWith([multi, o], "2.5.4.3")).toBe(false);
        expect(isRDNSequenceStartingWith([], "2.5.4.3")).toBe(false);
    });

    it("narrows to a DN starting with a commonName RDN", () => {
        const dn: RDNSequence = [cn, o, c];
        if (isRDNSequenceStartingWith(dn, "2.5.4.3")) {
            expectTypeOf(dn).toExtend<RDNSequenceStartingWith<CommonNameRDN>>();
            expectTypeOf(dn[0]).toExtend<CommonNameRDN>();
        }
    });

    it("is different from ending with", () => {
        expectTypeOf<RDNSequenceStartingWith<CommonNameRDN>>()
            .not.toExtend<RDNSequenceEndingWith<CommonNameRDN>>();
    });
});
