import { Buffer } from "node:buffer";
import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    _decode_ORAddress,
} from "@wildboar/x400/MTSAbstractService";
import { orAddressesMatch } from "./orAddressUtilities.mjs";

export
function oRAddressMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    // If the two values are byte-for-byte equal, return.
    if (!Buffer.compare(assertion.value, value.value)) {
        return true;
    }
    const a = _decode_ORAddress(assertion);
    const v = _decode_ORAddress(value);
    return orAddressesMatch(a, v);
}

oRAddressMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const oRAddressMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    oRAddressMatchTyped,
);

export default oRAddressMatch;
