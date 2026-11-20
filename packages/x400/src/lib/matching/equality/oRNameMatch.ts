import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { compareRDNSequence } from "@wildboar/dn";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    type ORName,
    _decode_ORName,
} from "@wildboar/x400/MTSAbstractService";
import { orAddressesMatch } from "./orAddressUtilities.js";
import { namingEqualityMatcher } from "../namingEqualityMatcher.js";
import { orAddressIsSubset as oRAddressElementsMatchTyped } from "./oRAddressElementsMatch.js";
import {
    orAddressIsSubstringSubset as oRAddressSubstringElementsMatchTyped,
} from "./oRAddressSubstringElementsMatch.js";

export const MATCH_FLAG_ELEMENTS_MATCH = 1 << 31;
export const MATCH_FLAG_SUBSTRING_MATCH = 1 << 30;

export
function matchORNames (
    assertion: ORName,
    value: ORName,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const a = assertion;
    const v = value;
    // a) If the presented OR-name contains only an OR-address, the rule matches if the presented value matches an
    // OR-address in the stored value according to the OR-address-match rule.
    const presentedContainsOnlyORAddress: boolean = (
        !a.directory_name
        && !a.isEmptyOrAddress()
    );
    if (presentedContainsOnlyORAddress) {
        if (v.isEmptyOrAddress()) {
            return false;
        }
        if (flags & MATCH_FLAG_SUBSTRING_MATCH) {
            return oRAddressSubstringElementsMatchTyped(a, v);
        }
        if (flags & MATCH_FLAG_ELEMENTS_MATCH) {
            return oRAddressElementsMatchTyped(a, v);
        }
        return orAddressesMatch(a, v);
    }
    // b) If the presented OR-name contains only a directory-name, the rule matches if the presented value matches a
    // directory-name in the stored value according to the Distinguished Name Match rule.
    const presentedContainsOnlyDirectoryName: boolean = (
        a.isEmptyOrAddress()
        && !!a.directory_name
    );
    if (presentedContainsOnlyDirectoryName) {
        if (!v.directory_name || !a.directory_name) {
            return false;
        }
        return compareRDNSequence(
            a.directory_name.rdnSequence,
            v.directory_name.rdnSequence,
            namingEqualityMatcher(getEqualityMatcher, flags),
        );
    }
    // c) If the presented OR-name contains both an OR-address and a directory-name, the rule matches if either of
    // the rules described above matches.
    const presentedContainsBothORAddressAndDirectoryName: boolean = (
        !!a.directory_name
        && !a.isEmptyOrAddress()
    );
    if (presentedContainsBothORAddressAndDirectoryName) {
        if (v.directory_name && a.directory_name) {
            const namesMatch = compareRDNSequence(
                a.directory_name.rdnSequence,
                v.directory_name.rdnSequence,
                namingEqualityMatcher(getEqualityMatcher, flags),
            );
            if (namesMatch) {
                return true;
            }
        }
        if (!v.isEmptyOrAddress()) {
            if (flags & MATCH_FLAG_SUBSTRING_MATCH) {
                return oRAddressSubstringElementsMatchTyped(a, v);
            }
            if (flags & MATCH_FLAG_ELEMENTS_MATCH) {
                return oRAddressElementsMatchTyped(a, v);
            }
            return orAddressesMatch(a, v);
        }
    }
    return false;
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
    (el) => {
        const decoded = _decode_ORName(el);
        if (decoded.isEmpty()) {
            throw new Error("oRNameMatch: assertion is empty");
        }
        return decoded;
    },
    oRNameMatchTyped,
);

export default oRNameMatch;
