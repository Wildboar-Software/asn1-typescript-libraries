import { describe, expect, expectTypeOf, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type {
    AttributeTypeAndValueOf,
} from "../brands.mjs";
import { isAttributeTypeAndValueOf } from "./brand.mjs";
import type { DotDelimitedOidBrand } from "../brands.mjs";

function atavOf (arcs: number[], value: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        ObjectIdentifier.fromParts(arcs),
        _encodeUTF8String(value, BER),
    );
}

type CN = AttributeTypeAndValueOf<"2.5.4.3">;
type C = AttributeTypeAndValueOf<"2.5.4.6">;

describe("AttributeTypeAndValueOf", () => {
    it("extends AttributeTypeAndValue but not the other way around", () => {
        expectTypeOf<CN>().toExtend<AttributeTypeAndValue>();
        expectTypeOf<AttributeTypeAndValue>().not.toExtend<CN>();
    });

    it("is mutually exclusive with ATAVs of other types", () => {
        expectTypeOf<CN>().not.toExtend<C>();
        expectTypeOf<C>().not.toExtend<CN>();
        expectTypeOf<CN & C>().toBeNever();
    });

    it("accepts a union of types", () => {
        type Either = AttributeTypeAndValueOf<"2.5.4.3" | "2.5.4.6">;
        expectTypeOf<CN>().toExtend<Either>();
        expectTypeOf<C>().toExtend<Either>();
        expectTypeOf<Either>().not.toExtend<CN>();
    });

    it("only accepts object identifier strings", () => {
        // @ts-expect-error Not a literal object identifier.
        expectTypeOf<AttributeTypeAndValueOf<string>>().toBeObject();
        // @ts-expect-error A name, not dotted-decimal notation.
        expectTypeOf<AttributeTypeAndValueOf<"commonName">>().toBeObject();
        expectTypeOf<"2.5.4.3">().toExtend<DotDelimitedOidBrand>();
        expectTypeOf<"commonName">().not.toExtend<DotDelimitedOidBrand>();
    });
});

describe("isAttributeTypeAndValueOf()", () => {
    const cn = atavOf([2, 5, 4, 3], "Bob");
    const c = atavOf([2, 5, 4, 6], "US");

    it("matches the attribute type", () => {
        expect(isAttributeTypeAndValueOf(cn, "2.5.4.3")).toBe(true);
        expect(isAttributeTypeAndValueOf(cn, "2.5.4.6")).toBe(false);
        expect(isAttributeTypeAndValueOf(c, "2.5.4.6")).toBe(true);
    });

    it("does not match a prefix or an extension of the type", () => {
        expect(isAttributeTypeAndValueOf(cn, "2.5.4")).toBe(false);
        expect(isAttributeTypeAndValueOf(cn, "2.5.4.30")).toBe(false);
        expect(isAttributeTypeAndValueOf(cn, "2.5.4.3.1")).toBe(false);
    });

    it("matches any of several types", () => {
        expect(isAttributeTypeAndValueOf(cn, ["2.5.4.6", "2.5.4.3"])).toBe(true);
        expect(isAttributeTypeAndValueOf(cn, ["2.5.4.6", "2.5.4.7"])).toBe(false);
        expect(isAttributeTypeAndValueOf(cn, [])).toBe(false);
    });

    it("narrows to the matching brand", () => {
        const atav: AttributeTypeAndValue = cn;
        if (isAttributeTypeAndValueOf(atav, "2.5.4.3")) {
            expectTypeOf(atav).toEqualTypeOf<CN>();
            const useCN = (x: CN): string => x.type_.toString();
            expect(useCN(atav)).toBe("2.5.4.3");
        }
    });

    it("narrows to a union when given several types", () => {
        const atav: AttributeTypeAndValue = cn;
        if (isAttributeTypeAndValueOf(atav, ["2.5.4.3", "2.5.4.6"])) {
            expectTypeOf(atav)
                .toEqualTypeOf<AttributeTypeAndValueOf<"2.5.4.3" | "2.5.4.6">>();
        }
    });

    it("narrows to never when the type was already another", () => {
        const atav: AttributeTypeAndValue = cn;
        if (isAttributeTypeAndValueOf(atav, "2.5.4.3")) {
            if (isAttributeTypeAndValueOf(atav, "2.5.4.6")) {
                expectTypeOf(atav).toBeNever();
            }
        }
    });

    it("rejects a branded ATAV where another brand is required", () => {
        const useCN = (x: CN): void => void x;
        if (isAttributeTypeAndValueOf(cn, "2.5.4.6")) {
            // @ts-expect-error Country name is not common name.
            useCN(cn);
        }
        // @ts-expect-error Not narrowed.
        useCN(cn);
    });

    it("rejects strings that are not object identifiers", () => {
        // @ts-expect-error A name, not dotted-decimal notation.
        isAttributeTypeAndValueOf(cn, "commonName");
        const s: string = "2.5.4.3";
        // @ts-expect-error Not a literal.
        isAttributeTypeAndValueOf(cn, s);
    });
});
