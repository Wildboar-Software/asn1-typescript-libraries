import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    type IPMIdentifier,
    _decode_IPMIdentifier,
} from "@wildboar/x400/IPMSInformationObjects";
import { strict as assert } from "node:assert";
import { matchORNames, validateNonEmptyORNameAssertion } from "./oRNameMatch.js";
import { normalizeMSString } from "./orAddressUtilities.js";

function decodeIPMIdentifierAssertion (el: ASN1Element): IPMIdentifier {
    const decoded = _decode_IPMIdentifier(el);
    if (decoded.user) {
        validateNonEmptyORNameAssertion(decoded.user, "iPMIdentifierMatch");
    }
    return decoded;
}

export
const iPMIdentifierMatch: Matcher = createEqualityMatcher(
    decodeIPMIdentifierAssertion,
    (
        assertion,
        value,
        getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
        flags?: number,
    ): boolean | undefined => {
        const a = assertion;
        const v = _decode_IPMIdentifier(value);
        if (!!a.user !== !!v.user) {
            return false;
        }
        const auri = normalizeMSString(a.user_relative_identifier, true);
        const vuri = normalizeMSString(v.user_relative_identifier, true);
        if (auri !== vuri) {
            return false;
        }
        if (a.user) {
            assert(v.user);
            return matchORNames(a.user, v.user, getEqualityMatcher, flags);
        }
        return true;
    },
);

export default iPMIdentifierMatch;
