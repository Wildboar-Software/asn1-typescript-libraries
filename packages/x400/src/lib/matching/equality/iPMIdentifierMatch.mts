import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    _decode_IPMIdentifier,
} from "@wildboar/x400/IPMSInformationObjects";
import { strict as assert } from "node:assert";
import { matchORNames } from "./oRNameMatch.mjs";

// IPMIdentifier ::= [APPLICATION 11]  SET {
//     user                      ORName OPTIONAL,
//     user-relative-identifier  LocalIPMIdentifier
// }

// LocalIPMIdentifier ::= PrintableString(SIZE (0..ub-local-ipm-identifier))

export
function iPMIdentifierMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const a = _decode_IPMIdentifier(assertion);
    const v = _decode_IPMIdentifier(value);
    if (!!a.user !== !!v.user) {
        return false;
    }
    const auri = a.user_relative_identifier.trim().replace(/\s+/g, " ").toUpperCase();
    const vuri = v.user_relative_identifier.trim().replace(/\s+/g, " ").toUpperCase();
    if (auri !== vuri) {
        return false;
    }
    if (a.user) {
        assert(v.user);
        return matchORNames(a.user, v.user, getEqualityMatcher, flags);
    }
    return true;
}

iPMIdentifierMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const iPMIdentifierMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    iPMIdentifierMatchTyped,
);

export default iPMIdentifierMatch;
