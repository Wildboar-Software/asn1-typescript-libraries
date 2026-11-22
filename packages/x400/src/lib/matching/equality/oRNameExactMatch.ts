import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { compareRDNSequence } from "@wildboar/dn";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import {
    BuiltInStandardAttributes,
    ORAddress,
    type ORName,
    _decode_ORName,
} from "@wildboar/x400/MTSAbstractService";
import { orAddressesMatch } from "./orAddressUtilities.js";
import { namingEqualityMatcher } from "../namingEqualityMatcher.js";
import { decodeNonEmptyORNameAssertion } from "./oRNameMatch.js";

const DUMMY_OR_ADDRESS = new ORAddress(
    new BuiltInStandardAttributes({ iso_3166_alpha2_code: "XX" }),
);

function matchORNameExactFast (
    a: ORName,
    v: ORName,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
): boolean | undefined {
    // An empty rdnSequence is the Directory root and is present.
    // Only a missing directory-name component is absent.
    const directoryNameAsserted: boolean = a.directory_name !== undefined;
    const directoryNamePresent: boolean = v.directory_name !== undefined;
    if (directoryNameAsserted !== directoryNamePresent) {
        return false;
    }
    if (directoryNameAsserted) {
        if (!v.directory_name || !a.directory_name) {
            return false;
        }
        const namesMatch = compareRDNSequence(
            a.directory_name.rdnSequence,
            v.directory_name.rdnSequence,
            namingEqualityMatcher(getEqualityMatcher, flags),
        );
        if (!namesMatch) {
            return false;
        }
    }
    if (a.isEmptyOrAddress() !== v.isEmptyOrAddress()) {
        return false;
    }
    if (a.isEmptyOrAddress()) {
        return true;
    }
    return orAddressesMatch(a, v, flags);
}

function matchORNameExactConstantTime (
    a: ORName,
    v: ORName,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
): boolean | undefined {
    const aHasDN = a.directory_name !== undefined;
    const vHasDN = v.directory_name !== undefined;
    const dnPresenceOk = aHasDN === vHasDN;
    let namesMatch = true;
    if (aHasDN && a.directory_name) {
        namesMatch = compareRDNSequence(
            a.directory_name.rdnSequence,
            v.directory_name?.rdnSequence ?? [],
            namingEqualityMatcher(getEqualityMatcher, flags),
        );
    }
    const aHasAddr = !a.isEmptyOrAddress();
    const vHasAddr = !v.isEmptyOrAddress();
    const addrPresenceOk = aHasAddr === vHasAddr;
    let addrResult: boolean | undefined = true;
    if (aHasAddr) {
        addrResult = orAddressesMatch(a, vHasAddr ? v : DUMMY_OR_ADDRESS, flags);
    }
    if (!dnPresenceOk || !addrPresenceOk || !namesMatch) {
        return false;
    }
    return addrResult;
}

export
const oRNameExactMatch: Matcher = createEqualityMatcher(
    decodeNonEmptyORNameAssertion("oRNameExactMatch"),
    (
        assertion,
        value,
        getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
        flags: number = 0,
    ): boolean | undefined => {
        const v = _decode_ORName(value);
        if (v.isEmpty()) {
            return undefined;
        }
        return (flags & MATCH_FLAG_CONSTANT_TIME)
            ? matchORNameExactConstantTime(assertion, v, getEqualityMatcher, flags)
            : matchORNameExactFast(assertion, v, getEqualityMatcher, flags);
    },
);

export default oRNameExactMatch;
