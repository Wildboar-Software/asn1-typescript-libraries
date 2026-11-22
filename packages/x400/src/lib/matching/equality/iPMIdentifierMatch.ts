import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { ctStringsEqual } from "../constantTime.js";
import {
    IPMIdentifier,
    _decode_IPMIdentifier,
} from "@wildboar/x400/IPMSInformationObjects";
import { strict as assert } from "node:assert";
import { matchORNames, validateNonEmptyORNameAssertion } from "./oRNameMatch.js";
import { normalizeMSString, prepareMSStringValue } from "./orAddressUtilities.js";
import { BuiltInStandardAttributes, ORName } from "@wildboar/x400/MTSAbstractService";

const DUMMY_OR_NAME = new ORName(
    new BuiltInStandardAttributes({ iso_3166_alpha2_code: "XX" }),
);

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

function matchIPMIdentifierFast (
    a: IPMIdentifier,
    v: IPMIdentifier,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
): boolean | undefined {
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
}

function matchIPMIdentifierConstantTime (
    a: IPMIdentifier,
    v: IPMIdentifier,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
): boolean | undefined {
    const userPresenceOk = !!a.user === !!v.user;
    const vuri = prepareMSStringValue(v.user_relative_identifier, true, flags);
    const uriOk = ctStringsEqual(a.user_relative_identifier, vuri);
    let userResult: boolean | undefined = true;
    if (a.user) {
        userResult = matchORNames(a.user, v.user ?? DUMMY_OR_NAME, getEqualityMatcher, flags);
    }
    if (!userPresenceOk || !uriOk) {
        return false;
    }
    return userResult;
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
        const v = _decode_IPMIdentifier(value);
        return (flags & MATCH_FLAG_CONSTANT_TIME)
            ? matchIPMIdentifierConstantTime(assertion, v, getEqualityMatcher, flags)
            : matchIPMIdentifierFast(assertion, v, getEqualityMatcher, flags);
    },
    undefined,
    false,
    normalizeIPMIdentifierAssertion,
);

export default iPMIdentifierMatch;
