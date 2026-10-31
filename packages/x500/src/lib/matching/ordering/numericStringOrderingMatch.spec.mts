import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import { DER, _encodeNumericString } from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import numericStringOrderingMatch, {
    numericStringOrderingMatchTyped,
} from "./numericStringOrderingMatch.mjs";

function numeric (value: string): ASN1Element {
    return _encodeNumericString(value, DER);
}

const attributeType = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

describe("numericStringOrderingMatch", () => {
    it("orders digit sequences after removing spaces", () => {
        expect(numericStringOrderingMatchTyped("2", numeric("1 0"))).toBeGreaterThan(0);
        expect(numericStringOrderingMatchTyped("99", numeric("1 0 0"))).toBeGreaterThan(0);
        expect(numericStringOrderingMatchTyped("100", numeric("1 0"))).toBeGreaterThan(0);
        expect(numericStringOrderingMatchTyped("10", numeric("2"))).toBeLessThan(0);
        expect(numericStringOrderingMatchTyped("100", numeric("9 9"))).toBeLessThan(0);
        expect(numericStringOrderingMatchTyped("100", numeric("1 0 0"))).toBe(0);
        expect(numericStringOrderingMatchTyped("1515", numeric("1515"))).toBe(0);
    });

    it("is TRUE when the stored numeric string is less than the assertion", () => {
        const stored = new AttributeTypeAndValue(attributeType, numeric("1 0"));
        expect(numericStringOrderingMatch(numeric("2"), stored)).toBe(true);
        expect(numericStringOrderingMatch(numeric("1 0"), stored)).toBe(false);
        // "29" > "20". If the space in "2 9" were still present, the
        // space would sort before '0' and this would be FALSE.
        const twenty = new AttributeTypeAndValue(attributeType, numeric("20"));
        expect(numericStringOrderingMatch(numeric("2 9"), twenty)).toBe(true);
    });
});
