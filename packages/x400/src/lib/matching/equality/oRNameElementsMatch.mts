import { Buffer } from "node:buffer";
import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { _decode_ORName } from "@wildboar/x400/MTSAbstractService";
import { orAddressIsSubset } from "./oRAddressElementsMatch.mjs";

export
function oRNameElementsMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    // If the two values are byte-for-byte equal, return.
    if (!Buffer.compare(assertion.value, value.value)) {
        return true;
    }
    const a = _decode_ORName(assertion);
    const v = _decode_ORName(value);
    // TODO: Use the directory name too.
    return orAddressIsSubset(a, v);
}

oRNameElementsMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const oRNameElementsMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    oRNameElementsMatchTyped,
);

export default oRNameElementsMatch;
