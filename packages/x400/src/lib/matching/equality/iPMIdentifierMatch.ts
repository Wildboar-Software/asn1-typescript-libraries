import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { ctStringsEqual } from "../constantTime.js";
import {
    type IPMIdentifier,
    _decode_IPMIdentifier,
} from "@wildboar/x400/IPMSInformationObjects";
import { strict as assert } from "node:assert";
import {
    matchPreparedORNames,
    normalizePreparedORName,
    type PreparedORName,
    preparedORNameFrom,
} from "./oRNameMatch.js";
import { normalizeMSString, prepareMSStringValue } from "./orAddressUtilities.js";
import { BuiltInStandardAttributes, ORName } from "@wildboar/x400/MTSAbstractService";

const DUMMY_OR_NAME = new ORName(
    new BuiltInStandardAttributes({ iso_3166_alpha2_code: "XX" }),
);

interface PreparedIPMIdentifier {
    readonly user?: PreparedORName;
    readonly userRelativeIdentifier: string;
}

function decodeIPMIdentifierAssertion (el: ASN1Element): PreparedIPMIdentifier {
    const decoded = _decode_IPMIdentifier(el);
    return {
        user: decoded.user
            ? preparedORNameFrom(decoded.user, "iPMIdentifierMatch")
            : undefined,
        userRelativeIdentifier: decoded.user_relative_identifier,
    };
}

function normalizeIPMIdentifierAssertion (
    a: PreparedIPMIdentifier,
): PreparedIPMIdentifier {
    return {
        user: a.user ? normalizePreparedORName(a.user) : undefined,
        userRelativeIdentifier: normalizeMSString(a.userRelativeIdentifier, true),
    };
}

function matchIPMIdentifierFast (
    a: PreparedIPMIdentifier,
    v: IPMIdentifier,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
): boolean | undefined {
    if (!!a.user !== !!v.user) {
        return false;
    }
    const vuri = prepareMSStringValue(v.user_relative_identifier, true, flags);
    if (a.userRelativeIdentifier !== vuri) {
        return false;
    }
    if (a.user) {
        assert(v.user);
        return matchPreparedORNames(a.user, v.user, getEqualityMatcher, flags, true);
    }
    return true;
}

function matchIPMIdentifierConstantTime (
    a: PreparedIPMIdentifier,
    v: IPMIdentifier,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
): boolean | undefined {
    const userPresenceOk = !!a.user === !!v.user;
    const vuri = prepareMSStringValue(v.user_relative_identifier, true, flags);
    const uriOk = ctStringsEqual(a.userRelativeIdentifier, vuri);
    let userResult: boolean | undefined = true;
    if (a.user) {
        userResult = matchPreparedORNames(
            a.user,
            v.user ?? DUMMY_OR_NAME,
            getEqualityMatcher,
            flags,
            true,
        );
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
        assertion: PreparedIPMIdentifier,
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
