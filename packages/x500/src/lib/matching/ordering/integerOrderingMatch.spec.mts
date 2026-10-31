import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import { DER, _encodeInteger } from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import integerOrderingMatch, {
    integerOrderingMatchTyped,
} from "./integerOrderingMatch.mjs";

function integer (value: number | bigint): ASN1Element {
    return _encodeInteger(value, DER);
}

const attributeType = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

describe("integerOrderingMatch", () => {
    it("orders by the signed difference, including values past MAX_SAFE_INTEGER", () => {
        expect(integerOrderingMatchTyped(5, integer(1))).toBeGreaterThan(0);
        expect(integerOrderingMatchTyped(5, 1)).toBeGreaterThan(0);
        expect(integerOrderingMatchTyped(0, integer(-1))).toBeGreaterThan(0);
        expect(integerOrderingMatchTyped(-1, integer(-8))).toBeGreaterThan(0);
        expect(integerOrderingMatchTyped(1, integer(5))).toBeLessThan(0);
        expect(integerOrderingMatchTyped(-8, integer(-1))).toBeLessThan(0);
        expect(integerOrderingMatchTyped(4, integer(4))).toBe(0);
        expect(integerOrderingMatchTyped(-3, integer(-3))).toBe(0);
        const above = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
        expect(integerOrderingMatchTyped(above, integer(above - 1n))).toBeGreaterThan(0);
        expect(integerOrderingMatchTyped(above - 1n, integer(above))).toBeLessThan(0);
    });

    it("is TRUE when the stored value is less than the assertion", () => {
        const stored = new AttributeTypeAndValue(attributeType, integer(1));
        expect(integerOrderingMatch(integer(5), stored)).toBe(true);
        expect(integerOrderingMatch(integer(1), stored)).toBe(false);
        expect(integerOrderingMatch(integer(1), new AttributeTypeAndValue(attributeType, integer(1)))).toBe(false);
    });
});
