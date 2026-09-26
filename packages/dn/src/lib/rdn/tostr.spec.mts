import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { describe, expect, it } from "vitest";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import stringifyRelativeDistinguishedName from "./tostr.mjs";

const GIVEN_NAME = ObjectIdentifier.fromParts([2, 5, 4, 42]);
const SURNAME = ObjectIdentifier.fromParts([2, 5, 4, 4]);
const COMMON_NAME = ObjectIdentifier.fromParts([2, 5, 4, 3]);

describe("stringifyRelativeDistinguishedName()", () => {
    it("returns an empty string for an empty RDN", () => {
        expect(stringifyRelativeDistinguishedName([])).toBe("");
    });

    it("stringifies a single attribute type and value", () => {
        const rdn = [
            new AttributeTypeAndValue(COMMON_NAME, _encodeUTF8String("Smith, Jr", BER)),
        ];
        expect(stringifyRelativeDistinguishedName(rdn)).toBe("cn=Smith\\, Jr");
    });

    it("joins multiple attributes with plus signs", () => {
        const rdn = [
            new AttributeTypeAndValue(SURNAME, _encodeUTF8String("Wilbur", BER)),
            new AttributeTypeAndValue(GIVEN_NAME, _encodeUTF8String("Jonathan", BER)),
        ];
        expect(stringifyRelativeDistinguishedName(rdn)).toBe("sn=Wilbur+gn=Jonathan");
    });
});
