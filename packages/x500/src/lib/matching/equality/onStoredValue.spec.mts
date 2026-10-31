import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import { DER, _encodeInteger } from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import type { Matcher } from "../../types/matching.mjs";
import integerMatch from "./integerMatch.mjs";

const storedType = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

/**
 * Call a `Matcher` with one stored element, the way the equality
 * specs did before the rules took an `AttributeTypeAndValue`.
 *
 * The `.spec.mts` suffix keeps this out of the library build.
 */
export
function onStoredValue (
    matcher: Matcher,
): (assertion: ASN1Element, value: ASN1Element) => boolean | undefined {
    return (assertion, value) => matcher(
        assertion,
        new AttributeTypeAndValue(storedType, value),
    );
}

describe("onStoredValue", () => {
    it("passes one stored element to the matcher", () => {
        const two = _encodeInteger(2, DER);
        const three = _encodeInteger(3, DER);
        expect(onStoredValue(integerMatch)(two, two)).toBe(true);
        expect(onStoredValue(integerMatch)(two, three)).toBe(false);
    });
});
