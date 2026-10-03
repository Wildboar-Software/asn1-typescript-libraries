import { describe, expect, expectTypeOf, it } from "vitest";
import type {
    AttributeTypeAndValueBER,
    AttributeTypeAndValueString,
    EscapedAttributeTypeAndValueString,
    RDNSequenceBER,
    RDNSequenceString,
    RelativeDistinguishedNameBER,
    RelativeDistinguishedNameString,
} from "./brands.mjs";
import {
    isAttributeTypeAndValueBER,
    validateAttributeTypeAndValueBER,
} from "./atav/validateBER.mjs";
import {
    isRelativeDistinguishedNameBER,
    validateRelativeDistinguishedNameBER,
} from "./rdn/validateBER.mjs";
import {
    isRDNSequenceBER,
    validateRDNSequenceBER,
} from "./rdnseq/validateBER.mjs";
import {
    isAttributeTypeAndValueString,
    validateAttributeTypeAndValueString,
} from "./atav/validate.mjs";
import {
    isRelativeDistinguishedNameString,
    validateRelativeDistinguishedNameString,
} from "./rdn/validate.mjs";
import {
    isRDNSequenceString,
    validateRDNSequenceString,
} from "./rdnseq/validate.mjs";

describe("brands", () => {
    it("form a hierarchy from escaped attribute to distinguished name", () => {
        expectTypeOf<EscapedAttributeTypeAndValueString>()
            .toExtend<RelativeDistinguishedNameString>();
        expectTypeOf<RelativeDistinguishedNameString>()
            .toExtend<RDNSequenceString>();
        expectTypeOf<RDNSequenceString>().toExtend<string>();
    });

    it("are not assignable down the hierarchy", () => {
        expectTypeOf<string>().not.toExtend<RDNSequenceString>();
        expectTypeOf<RDNSequenceString>()
            .not.toExtend<RelativeDistinguishedNameString>();
        expectTypeOf<RelativeDistinguishedNameString>()
            .not.toExtend<EscapedAttributeTypeAndValueString>();
    });

    it("keep unescaped attribute types and values separate", () => {
        expectTypeOf<AttributeTypeAndValueString>().toExtend<string>();
        expectTypeOf<AttributeTypeAndValueString>()
            .not.toExtend<RDNSequenceString>();
        expectTypeOf<AttributeTypeAndValueString>()
            .not.toExtend<EscapedAttributeTypeAndValueString>();
        expectTypeOf<EscapedAttributeTypeAndValueString>()
            .not.toExtend<AttributeTypeAndValueString>();
    });
});

describe("assertion functions", () => {
    it("narrow to the matching brand", () => {
        const dn: string = "cn=a,dc=b";
        validateRDNSequenceString(dn);
        expectTypeOf(dn).toEqualTypeOf<RDNSequenceString>();

        const rdn: string = "cn=a+sn=b";
        validateRelativeDistinguishedNameString(rdn);
        expectTypeOf(rdn).toEqualTypeOf<RelativeDistinguishedNameString>();

        const escaped: string = "cn=a\\,b";
        validateAttributeTypeAndValueString(escaped, true);
        expectTypeOf(escaped).toEqualTypeOf<EscapedAttributeTypeAndValueString>();

        const unescaped: string = "cn=a,b";
        validateAttributeTypeAndValueString(unescaped);
        expectTypeOf(unescaped).toEqualTypeOf<AttributeTypeAndValueString>();

        const explicit: string = "cn=a,b";
        validateAttributeTypeAndValueString(explicit, false);
        expectTypeOf(explicit).toEqualTypeOf<AttributeTypeAndValueString>();
    });

    it("narrow to either attribute brand when escaped is not a literal", () => {
        const flag: boolean = Math.random() < 2;
        const atav: string = "cn=a";
        validateAttributeTypeAndValueString(atav, flag);
        expectTypeOf(atav).toEqualTypeOf<
            AttributeTypeAndValueString | EscapedAttributeTypeAndValueString
        >();
    });
});

describe("type guards", () => {
    it("narrow to the matching brand", () => {
        const dn: string = "cn=a,dc=b";
        if (isRDNSequenceString(dn)) {
            expectTypeOf(dn).toEqualTypeOf<RDNSequenceString>();
        }
        const rdn: string = "cn=a+sn=b";
        if (isRelativeDistinguishedNameString(rdn)) {
            expectTypeOf(rdn).toEqualTypeOf<RelativeDistinguishedNameString>();
        }
        const escaped: string = "cn=a\\,b";
        if (isAttributeTypeAndValueString(escaped, true)) {
            expectTypeOf(escaped).toEqualTypeOf<EscapedAttributeTypeAndValueString>();
        }
        const unescaped: string = "cn=a,b";
        if (isAttributeTypeAndValueString(unescaped)) {
            expectTypeOf(unescaped).toEqualTypeOf<AttributeTypeAndValueString>();
        }
    });

    it("let a validated string be used where a broader brand is expected", () => {
        const useDN = (dn: RDNSequenceString): string => dn;
        const atav: string = "cn=a";
        expect(isAttributeTypeAndValueString(atav, true)).toBe(true);
        if (isAttributeTypeAndValueString(atav, true)) {
            expect(useDN(atav)).toBe("cn=a");
        }
    });
});

describe("BER brands", () => {
    it("extend Uint8Array", () => {
        expectTypeOf<RDNSequenceBER>().toExtend<Uint8Array>();
        expectTypeOf<RelativeDistinguishedNameBER>()
            .toExtend<Uint8Array>();
        expectTypeOf<AttributeTypeAndValueBER>().toExtend<Uint8Array>();
        expectTypeOf<Uint8Array>().not.toExtend<RDNSequenceBER>();
    });

    it("are not assignable to each other", () => {
        expectTypeOf<RDNSequenceBER>()
            .not.toExtend<RelativeDistinguishedNameBER>();
        expectTypeOf<RelativeDistinguishedNameBER>()
            .not.toExtend<RDNSequenceBER>();
        expectTypeOf<RelativeDistinguishedNameBER>()
            .not.toExtend<AttributeTypeAndValueBER>();
        expectTypeOf<AttributeTypeAndValueBER>()
            .not.toExtend<RelativeDistinguishedNameBER>();
        expectTypeOf<AttributeTypeAndValueBER>()
            .not.toExtend<RDNSequenceBER>();
    });

    it("are not assignable to or from the string brands", () => {
        expectTypeOf<RDNSequenceBER>().not.toExtend<RDNSequenceString>();
        expectTypeOf<RDNSequenceString>().not.toExtend<RDNSequenceBER>();
    });

    it("are applied by the assertion functions", () => {
        const dn: Uint8Array = Uint8Array.of(0x30, 0x00);
        validateRDNSequenceBER(dn);
        expectTypeOf(dn).toEqualTypeOf<RDNSequenceBER>();

        const rdn: Uint8Array = Uint8Array.of(
            0x31, 0x07, 0x30, 0x05, 0x06, 0x01, 0x00, 0x05, 0x00,
        );
        validateRelativeDistinguishedNameBER(rdn);
        expectTypeOf(rdn).toEqualTypeOf<RelativeDistinguishedNameBER>();

        const atav: Uint8Array = Uint8Array.of(
            0x30, 0x05, 0x06, 0x01, 0x00, 0x05, 0x00,
        );
        validateAttributeTypeAndValueBER(atav);
        expectTypeOf(atav).toEqualTypeOf<AttributeTypeAndValueBER>();
    });

    it("are applied by the type guards", () => {
        const dn: Uint8Array = Uint8Array.of(0x30, 0x00);
        expect(isRDNSequenceBER(dn)).toBe(true);
        if (isRDNSequenceBER(dn)) {
            expectTypeOf(dn).toEqualTypeOf<RDNSequenceBER>();
        }
        const rdn: Uint8Array = Uint8Array.of(0x31, 0x00);
        if (isRelativeDistinguishedNameBER(rdn)) {
            expectTypeOf(rdn).toEqualTypeOf<RelativeDistinguishedNameBER>();
        }
        const atav: Uint8Array = Uint8Array.of(0x30, 0x00);
        if (isAttributeTypeAndValueBER(atav)) {
            expectTypeOf(atav).toEqualTypeOf<AttributeTypeAndValueBER>();
        }
    });
});
