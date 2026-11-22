import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_IPMIdentifier } from "@wildboar/x400/IPMSInformationObjects";
import { strict as assert } from "node:assert";
import { matchORNames, validateNonEmptyORNameAssertion } from "./oRNameMatch.js";
import { normalizeMSString, prepareMSStringValue } from "./orAddressUtilities.js";
import { IPMIdentifier } from "@wildboar/x400/IPMSInformationObjects";


function decodeIPMIdentifierAssertion (el: ASN1Element): IPMIdentifier {
    const decoded = _decode_IPMIdentifier(el);
    if (decoded.user) {
        validateNonEmptyORNameAssertion(decoded.user, "iPMIdentifierMatch");
    }
    return decoded;
}

function normalizeIPMIdentifierAssertion (
    a: IPMIdentifier,
): IPMIdentifier {
    return new IPMIdentifier(
        a.user,
        normalizeMSString(a.user_relative_identifier, true),
    );
}

export
const iPMIdentifierMatch: Matcher = createEqualityMatcher(
    decodeIPMIdentifierAssertion,
    (
        assertion: IPMIdentifier,
        value,
        getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
        flags: number = 0,
    ): boolean | undefined => {
        const a = assertion;
        const v = _decode_IPMIdentifier(value);
        if (!!a.user !== !!v.user) {
            return false;
        }
        const vuri = prepareMSStringValue(v.user_relative_identifier, true, flags);
        if (a.user_relative_identifier !== vuri) {
            return false;
        }
        if (a.user) {
            assert(v.user);
            return matchORNames(a.user, v.user, getEqualityMatcher, flags);
        }
        return true;
    },
    undefined,
    false,
    normalizeIPMIdentifierAssertion,
);

export default iPMIdentifierMatch;
