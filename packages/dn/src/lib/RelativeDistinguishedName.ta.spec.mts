import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "./AttributeTypeAndValue.ta.mjs";
import { relativeDistinguishedNameToKey } from "./RelativeDistinguishedName.ta.mjs";

const commonName = ObjectIdentifier.fromParts([2, 5, 4, 3]);
const surname = ObjectIdentifier.fromParts([2, 5, 4, 4]);

describe("relativeDistinguishedNameToKey()", () => {
    it("produces identical, escaped keys regardless of the order of the pairs", () => {
        const a = [
            new AttributeTypeAndValue(surname, _encodeUTF8String("SMITH", BER)),
            new AttributeTypeAndValue(commonName, _encodeUTF8String("John+Jane", BER)),
        ];
        const b = [
            new AttributeTypeAndValue(commonName, _encodeUTF8String("john+jane", BER)),
            new AttributeTypeAndValue(surname, _encodeUTF8String("smith", BER)),
        ];
        expect(relativeDistinguishedNameToKey(a)).toBe("2.5.4.3=john\\+jane+2.5.4.4=smith");
        expect(relativeDistinguishedNameToKey(a)).toBe(relativeDistinguishedNameToKey(b));
    });
});
