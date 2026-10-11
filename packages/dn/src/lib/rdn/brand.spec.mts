import { describe, expect, expectTypeOf, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import type {
    AttributeTypeAndValueOf,
    RelativeDistinguishedNameOf,
    RelativeDistinguishedNameOfLength,
} from "../brands.mjs";
import type { CommonNameRDN, CountryNameRDN } from "../attributeTypes.mjs";
import { isAttributeTypeAndValueOf } from "../atav/brand.mjs";
import {
    isRelativeDistinguishedNameOf,
    isRelativeDistinguishedNameOfLength,
} from "./brand.mjs";

function atavOf (arcs: number[], value: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        ObjectIdentifier.fromParts(arcs),
        _encodeUTF8String(value, BER),
    );
}

const cn = atavOf([2, 5, 4, 3], "Bob");
const sn = atavOf([2, 5, 4, 4], "Smith");
const c = atavOf([2, 5, 4, 6], "US");

describe("RelativeDistinguishedNameOf", () => {
    it("extends RelativeDistinguishedName but not the other way around", () => {
        expectTypeOf<CommonNameRDN>().toExtend<RelativeDistinguishedName>();
        expectTypeOf<RelativeDistinguishedName>().not.toExtend<CommonNameRDN>();
    });

    it("is a one-element tuple of the branded ATAV", () => {
        expectTypeOf<CommonNameRDN>()
            .toEqualTypeOf<[AttributeTypeAndValueOf<"2.5.4.3">]>();
        expectTypeOf<RelativeDistinguishedNameOf<"2.5.4.3">["length"]>()
            .toEqualTypeOf<1>();
    });

    it("is mutually exclusive with RDNs of other types", () => {
        expectTypeOf<CommonNameRDN>().not.toExtend<CountryNameRDN>();
        expectTypeOf<CountryNameRDN>().not.toExtend<CommonNameRDN>();
        expectTypeOf<(CommonNameRDN & CountryNameRDN)[0]>().toBeNever();
    });
});

describe("RelativeDistinguishedNameOfLength", () => {
    it("has the given length", () => {
        expectTypeOf<RelativeDistinguishedNameOfLength<0>>()
            .toEqualTypeOf<[]>();
        expectTypeOf<RelativeDistinguishedNameOfLength<2>>()
            .toEqualTypeOf<[AttributeTypeAndValue, AttributeTypeAndValue]>();
        expectTypeOf<RelativeDistinguishedNameOfLength<3>["length"]>()
            .toEqualTypeOf<3>();
        expectTypeOf<RelativeDistinguishedNameOfLength<number>>()
            .toEqualTypeOf<AttributeTypeAndValue[]>();
    });
});

describe("isRelativeDistinguishedNameOf()", () => {
    it("requires exactly one ATAV of the type", () => {
        expect(isRelativeDistinguishedNameOf([cn], "2.5.4.3")).toBe(true);
        expect(isRelativeDistinguishedNameOf([c], "2.5.4.3")).toBe(false);
        expect(isRelativeDistinguishedNameOf([], "2.5.4.3")).toBe(false);
        expect(isRelativeDistinguishedNameOf([cn, sn], "2.5.4.3")).toBe(false);
        expect(isRelativeDistinguishedNameOf([cn, cn], "2.5.4.3")).toBe(false);
    });

    it("accepts several types", () => {
        expect(isRelativeDistinguishedNameOf([c], ["2.5.4.3", "2.5.4.6"]))
            .toBe(true);
        expect(isRelativeDistinguishedNameOf([sn], ["2.5.4.3", "2.5.4.6"]))
            .toBe(false);
    });

    it("narrows to the matching brand", () => {
        const rdn: RelativeDistinguishedName = [cn];
        if (isRelativeDistinguishedNameOf(rdn, "2.5.4.3")) {
            expectTypeOf(rdn).toExtend<CommonNameRDN>();
            expectTypeOf(rdn[0]).toExtend<AttributeTypeAndValueOf<"2.5.4.3">>();
            const useCN = (x: CommonNameRDN): number => x.length;
            expect(useCN(rdn)).toBe(1);
        }
    });

    it("lets the single ATAV be used where its brand is required", () => {
        const rdn: RelativeDistinguishedName = [cn];
        const [first] = rdn;
        expect(isAttributeTypeAndValueOf(first, "2.5.4.3")).toBe(true);
        if (isRelativeDistinguishedNameOf(rdn, "2.5.4.3")) {
            const useATAV = (x: AttributeTypeAndValueOf<"2.5.4.3">): string =>
                x.type_.toString();
            expect(useATAV(rdn[0])).toBe("2.5.4.3");
        }
    });

    it("rejects the wrong brand", () => {
        const useCN = (x: CommonNameRDN): void => void x;
        const rdn: RelativeDistinguishedName = [c];
        if (isRelativeDistinguishedNameOf(rdn, "2.5.4.6")) {
            // @ts-expect-error Country name is not common name.
            useCN(rdn);
        }
        // @ts-expect-error Not narrowed.
        useCN([cn]);
    });
});

describe("isRelativeDistinguishedNameOfLength()", () => {
    it("tests the length", () => {
        expect(isRelativeDistinguishedNameOfLength([], 0)).toBe(true);
        expect(isRelativeDistinguishedNameOfLength([cn], 0)).toBe(false);
        expect(isRelativeDistinguishedNameOfLength([cn, sn, c], 3)).toBe(true);
        expect(isRelativeDistinguishedNameOfLength([cn, sn], 3)).toBe(false);
    });

    it("narrows to a fixed-length tuple", () => {
        const rdn: RelativeDistinguishedName = [cn, sn, c];
        if (isRelativeDistinguishedNameOfLength(rdn, 3)) {
            expectTypeOf(rdn.length).toEqualTypeOf<3>();
        }
        const empty: RelativeDistinguishedName = [];
        if (isRelativeDistinguishedNameOfLength(empty, 0)) {
            expectTypeOf(empty.length).toEqualTypeOf<0>();
        }
    });
});
