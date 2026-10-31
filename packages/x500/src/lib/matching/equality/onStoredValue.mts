import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import type { Matcher } from "../../types/matching.mjs";

const storedType = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

/**
 * Call a `Matcher` with one stored element, the way the equality
 * specs did before the rules took an `AttributeTypeAndValue`.
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
