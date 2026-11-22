import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
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
import { orAddressIsSubset as oRAddressElementsMatchTyped } from "./oRAddressElementsMatch.js";
import {
    orAddressIsSubstringSubset as oRAddressSubstringElementsMatchTyped,
} from "./oRAddressSubstringElementsMatch.js";

export const MATCH_FLAG_ELEMENTS_MATCH: number = 1 << 29;
export const MATCH_FLAG_SUBSTRING_MATCH: number = 1 << 30;

const DUMMY_OR_ADDRESS = new ORAddress(
    new BuiltInStandardAttributes({ iso_3166_alpha2_code: "XX" }),
);

export
function validateNonEmptyORNameAssertion (decoded: ORName, rule: string): ORName {
    if (decoded.isEmpty()) {
        throw new Error(`${rule}: assertion is empty`);
    }
    return decoded;
}

export
function decodeNonEmptyORNameAssertion (rule: string): (el: ASN1Element) => ORName {
    return (el: ASN1Element): ORName => (
        validateNonEmptyORNameAssertion(_decode_ORName(el), rule)
    );
}

function matchORAddressesByFlags (
    a: ORAddress,
    v: ORAddress,
    outerFlags: number,
    innerFlags: number,
): boolean | undefined {
    if (outerFlags & MATCH_FLAG_SUBSTRING_MATCH) {
        return oRAddressSubstringElementsMatchTyped(a, v, innerFlags);
    }
    if (outerFlags & MATCH_FLAG_ELEMENTS_MATCH) {
        return oRAddressElementsMatchTyped(a, v, innerFlags);
    }
    return orAddressesMatch(a, v, innerFlags);
}

function matchORNamesFast (
    a: ORName,
    v: ORName,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
): boolean | undefined {
    const innerFlags = flags & ~(MATCH_FLAG_ELEMENTS_MATCH | MATCH_FLAG_SUBSTRING_MATCH);
    // An empty rdnSequence is the Directory root and is present.
    // Only a missing directory-name component is absent.
    const aHasDN: boolean = a.directory_name !== undefined;
    const vHasDN: boolean = v.directory_name !== undefined;
    const aHasAddr: boolean = !a.isEmptyOrAddress();

    if (!aHasDN && aHasAddr) {
        if (v.isEmptyOrAddress()) {
            return false;
        }
        return matchORAddressesByFlags(a, v, flags, innerFlags);
    }
    if (!aHasAddr && aHasDN) {
        if (!vHasDN || !v.directory_name || !a.directory_name) {
            return false;
        }
        return compareRDNSequence(
            a.directory_name.rdnSequence,
            v.directory_name.rdnSequence,
            namingEqualityMatcher(getEqualityMatcher, innerFlags),
        );
    }
    if (aHasDN && aHasAddr) {
        if (vHasDN && v.directory_name && a.directory_name) {
            const namesMatch = compareRDNSequence(
                a.directory_name.rdnSequence,
                v.directory_name.rdnSequence,
                namingEqualityMatcher(getEqualityMatcher, innerFlags),
            );
            if (namesMatch) {
                return true;
            }
        }
        if (!v.isEmptyOrAddress()) {
            return matchORAddressesByFlags(a, v, flags, innerFlags);
        }
    }
    return false;
}

function matchORNamesConstantTime (
    a: ORName,
    v: ORName,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
): boolean | undefined {
    const innerFlags = flags & ~(MATCH_FLAG_ELEMENTS_MATCH | MATCH_FLAG_SUBSTRING_MATCH);
    const aHasDN: boolean = a.directory_name !== undefined;
    const vHasDN: boolean = v.directory_name !== undefined;
    const aHasAddr: boolean = !a.isEmptyOrAddress();
    const vHasAddr: boolean = !v.isEmptyOrAddress();

    let dnMatch = false;
    if (aHasDN && a.directory_name) {
        const cmp = compareRDNSequence(
            a.directory_name.rdnSequence,
            v.directory_name?.rdnSequence ?? [],
            namingEqualityMatcher(getEqualityMatcher, innerFlags),
        );
        dnMatch = vHasDN && cmp;
    }

    let addrMatch: boolean | undefined = false;
    if (aHasAddr) {
        const rawAddrMatch = matchORAddressesByFlags(
            a,
            vHasAddr ? v : DUMMY_OR_ADDRESS,
            flags,
            innerFlags,
        );
        addrMatch = vHasAddr ? rawAddrMatch : false;
    }

    if (!aHasDN && aHasAddr) {
        return addrMatch;
    }
    if (!aHasAddr && aHasDN) {
        return dnMatch;
    }
    if (aHasDN && aHasAddr) {
        return dnMatch ? true : addrMatch;
    }
    return false;
}

export
function matchORNames (
    assertion: ORName,
    value: ORName,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    return (flags & MATCH_FLAG_CONSTANT_TIME)
        ? matchORNamesConstantTime(assertion, value, getEqualityMatcher, flags)
        : matchORNamesFast(assertion, value, getEqualityMatcher, flags);
}

export
function oRNameMatchTyped (
    assertion: ORName,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
): boolean | undefined {
    const v = _decode_ORName(value);
    if (v.isEmpty()) {
        return undefined;
    }
    return matchORNames(assertion, v, getEqualityMatcher, flags);
}

export
const oRNameMatch: Matcher = createEqualityMatcher(
    decodeNonEmptyORNameAssertion("oRNameMatch"),
    oRNameMatchTyped,
);

export default oRNameMatch;
