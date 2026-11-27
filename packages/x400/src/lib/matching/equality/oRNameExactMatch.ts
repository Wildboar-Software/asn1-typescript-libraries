import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { compareRDNSequence } from "@wildboar/dn";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import {
    type ORName,
    _decode_ORName,
} from "@wildboar/x400/MTSAbstractService";
import {
    compareORAddressInfo,
    type ORAddressInfo,
    orAddressToInfo,
} from "./orAddressUtilities.js";
import { namingEqualityMatcher } from "../namingEqualityMatcher.js";
import {
    decodePreparedORNameAssertion,
    normalizePreparedORName,
    type PreparedORName,
} from "./oRNameMatch.js";

const DUMMY_OR_ADDRESS_INFO: ORAddressInfo = { countryName: "XX" };

function matchORNameExactFast (
    a: PreparedORName,
    v: ORName,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
): boolean | undefined {
    // An empty rdnSequence is the Directory root and is present.
    // Only a missing directory-name component is absent.
    const directoryNameAsserted: boolean = a.directoryName !== undefined;
    const directoryNamePresent: boolean = v.directory_name !== undefined;
    if (directoryNameAsserted !== directoryNamePresent) {
        return false;
    }
    if (directoryNameAsserted) {
        if (!v.directory_name || !a.directoryName) {
            return false;
        }
        const namesMatch = compareRDNSequence(
            a.directoryName.rdnSequence,
            v.directory_name.rdnSequence,
            namingEqualityMatcher(getEqualityMatcher, flags),
        );
        if (!namesMatch) {
            return false;
        }
    }
    const aHasAddr = a.addressInfo !== undefined;
    const vHasAddr = !v.isEmptyOrAddress();
    if (aHasAddr !== vHasAddr) {
        return false;
    }
    if (a.addressInfo === undefined) {
        return true;
    }
    if (!a.addressInfo) {
        return undefined;
    }
    const vInfo = orAddressToInfo(v, !(flags & MATCH_FLAG_VALUE_NORMALIZED));
    if (!vInfo) {
        return undefined;
    }
    return compareORAddressInfo(a.addressInfo, vInfo, "exact", flags);
}

function matchORNameExactConstantTime (
    a: PreparedORName,
    v: ORName,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
): boolean | undefined {
    const aHasDN = a.directoryName !== undefined;
    const vHasDN = v.directory_name !== undefined;
    const dnPresenceOk = aHasDN === vHasDN;
    let namesMatch = true;
    if (aHasDN && a.directoryName) {
        namesMatch = compareRDNSequence(
            a.directoryName.rdnSequence,
            v.directory_name?.rdnSequence ?? [],
            namingEqualityMatcher(getEqualityMatcher, flags),
        );
    }
    const aHasAddr = a.addressInfo !== undefined;
    const vHasAddr = !v.isEmptyOrAddress();
    const addrPresenceOk = aHasAddr === vHasAddr;
    let addrResult: boolean | undefined = true;
    if (aHasAddr) {
        if (!a.addressInfo) {
            addrResult = undefined;
        } else if (vHasAddr) {
            const vInfo = orAddressToInfo(v, !(flags & MATCH_FLAG_VALUE_NORMALIZED));
            addrResult = vInfo
                ? compareORAddressInfo(a.addressInfo, vInfo, "exact", flags)
                : undefined;
        } else {
            compareORAddressInfo(a.addressInfo, DUMMY_OR_ADDRESS_INFO, "exact", flags);
        }
    }
    if (!dnPresenceOk || !addrPresenceOk || !namesMatch) {
        return false;
    }
    return addrResult;
}

export
const oRNameExactMatch: Matcher = createEqualityMatcher(
    decodePreparedORNameAssertion("oRNameExactMatch"),
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
    undefined,
    false,
    normalizePreparedORName,
);

export default oRNameExactMatch;
