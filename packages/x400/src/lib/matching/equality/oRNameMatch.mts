import { Buffer } from "node:buffer";
import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { compareRDNSequence } from "@wildboar/dn";
import {
    type ORName,
    _decode_ORName,
} from "@wildboar/x400/MTSAbstractService";
import { orAddressesMatch } from "./orAddressUtilities.mjs";
import { namingEqualityMatcher } from "../namingEqualityMatcher.mjs";

export
function matchORNames(
    assertion: ORName,
    value: ORName,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const a = assertion;
    const v = value;
    if (a.directory_name) {
        if (v.directory_name) {
            const namesMatch = compareRDNSequence(
                a.directory_name.rdnSequence,
                v.directory_name.rdnSequence,
                namingEqualityMatcher(getEqualityMatcher, flags),
            );
            if (namesMatch) {
                return true; // Either the DN or ORAddress must match.
            }
            return orAddressesMatch(a, v);
        }
    }
    return orAddressesMatch(a, v);
}

export
function oRNameMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    // If the two values are byte-for-byte equal, return.
    if (!Buffer.compare(assertion.value, value.value)) {
        return true;
    }
    const a = _decode_ORName(assertion);
    const v = _decode_ORName(value);
    return matchORNames(a, v, getEqualityMatcher, flags);
}

oRNameMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const oRNameMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    oRNameMatchTyped,
);

export default oRNameMatch;
