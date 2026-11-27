import {
    ASN1Construction,
    type ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import { compareRDNSequence, type Name } from "@wildboar/dn";
import {
    createEqualityMatcher,
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import {
    type ORAddress,
    type ORName,
    _decode_ORName,
} from "@wildboar/x400/MTSAbstractService";
import {
    compareORAddressInfo,
    normalizeORAddressInfo,
    type ORAddressCompareMode,
    type ORAddressInfo,
    orAddressToInfo,
    teletexBytesToString,
} from "./orAddressUtilities.js";
import { namingEqualityMatcher } from "../namingEqualityMatcher.js";

export const MATCH_FLAG_ELEMENTS_MATCH: number = 1 << 29;
export const MATCH_FLAG_SUBSTRING_MATCH: number = 1 << 30;

const DUMMY_OR_ADDRESS_INFO: ORAddressInfo = { countryName: "XX" };

export
interface PreparedORName {
    readonly directoryName?: Name;
    /**
     * `undefined` when the O/R address is semantically absent; `null` when the
     * O/R address is present but contains an unrecognized extension (evaluates
     * to `undefined` unless satisfied by `directory-name`). Malformed ASN.1 or
     * T.61 encodings throw during `preparedORNameFrom`.
     */
    readonly addressInfo?: ORAddressInfo | null;
}

function validateElementTeletex (el: ASN1Element, depth: number = 0): void {
    if (depth > 8) {
        return;
    }
    if (
        (el.tagClass === ASN1TagClass.universal)
        && (el.tagNumber === ASN1UniversalType.teletexString)
    ) {
        teletexBytesToString(el.teletexString);
        return;
    }
    if (el.construction === ASN1Construction.constructed) {
        const bytes = el.value;
        const child = new BERElement();
        let i = 0;
        while (i < bytes.length) {
            i += child.fromBytes(bytes.subarray(i), true);
            validateElementTeletex(child, depth + 1);
        }
    }
}

export
function preparedORNameFrom (decoded: ORName, rule: string): PreparedORName {
    if (decoded.isEmpty()) {
        throw new Error(`${rule}: assertion is empty`);
    }
    if (decoded.directory_name) {
        for (const rdn of decoded.directory_name.rdnSequence) {
            for (const atav of rdn) {
                validateElementTeletex(atav.value);
            }
        }
    }
    let addressInfo: ORAddressInfo | null | undefined;
    if (!decoded.isEmptyOrAddress()) {
        addressInfo = orAddressToInfo(decoded, false);
    }
    return {
        directoryName: decoded.directory_name,
        addressInfo,
    };
}

export
function decodePreparedORNameAssertion (rule: string): (el: ASN1Element) => PreparedORName {
    return (el: ASN1Element): PreparedORName => (
        preparedORNameFrom(_decode_ORName(el), rule)
    );
}

export
function normalizePreparedORName (raw: PreparedORName): PreparedORName {
    if (!raw.addressInfo) {
        return raw;
    }
    return {
        directoryName: raw.directoryName,
        addressInfo: normalizeORAddressInfo(raw.addressInfo),
    };
}

export
function validateNonEmptyORNameAssertion (decoded: ORName, rule: string): ORName {
    preparedORNameFrom(decoded, rule);
    return decoded;
}

export
function decodeNonEmptyORNameAssertion (rule: string): (el: ASN1Element) => ORName {
    return (el: ASN1Element): ORName => (
        validateNonEmptyORNameAssertion(_decode_ORName(el), rule)
    );
}

function compareModeFromFlags (outerFlags: number): ORAddressCompareMode {
    if (outerFlags & MATCH_FLAG_SUBSTRING_MATCH) {
        return "substrings";
    }
    if (outerFlags & MATCH_FLAG_ELEMENTS_MATCH) {
        return "elements";
    }
    return "exact";
}

function matchPreparedORAddress (
    aInfo: ORAddressInfo,
    v: ORAddress,
    outerFlags: number,
    innerFlags: number,
): boolean | undefined {
    const vInfo = orAddressToInfo(v, !(innerFlags & MATCH_FLAG_VALUE_NORMALIZED));
    if (!vInfo) {
        return undefined;
    }
    return compareORAddressInfo(aInfo, vInfo, compareModeFromFlags(outerFlags), innerFlags);
}

function matchPreparedORNamesFast (
    a: PreparedORName,
    v: ORName,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
    assertionAlreadyNormalized: boolean,
): boolean | undefined {
    const innerFlags = flags & ~(MATCH_FLAG_ELEMENTS_MATCH | MATCH_FLAG_SUBSTRING_MATCH);
    // An empty rdnSequence is the Directory root and is present.
    // Only a missing directory-name component is absent.
    const aHasDN: boolean = a.directoryName !== undefined;
    const vHasDN: boolean = v.directory_name !== undefined;
    const aHasAddr: boolean = a.addressInfo !== undefined;
    const aInfo: ORAddressInfo | null | undefined = (
        a.addressInfo && !assertionAlreadyNormalized && !(innerFlags & MATCH_FLAG_ASSERTION_NORMALIZED)
    )
        ? normalizeORAddressInfo(a.addressInfo)
        : a.addressInfo;

    if (!aHasDN && aHasAddr) {
        if (!aInfo) {
            return undefined;
        }
        if (v.isEmptyOrAddress()) {
            return false;
        }
        return matchPreparedORAddress(aInfo, v, flags, innerFlags);
    }
    if (!aHasAddr && aHasDN) {
        if (!vHasDN || !v.directory_name || !a.directoryName) {
            return false;
        }
        return compareRDNSequence(
            a.directoryName.rdnSequence,
            v.directory_name.rdnSequence,
            namingEqualityMatcher(getEqualityMatcher, innerFlags),
        );
    }
    if (aHasDN && aHasAddr) {
        if (vHasDN && v.directory_name && a.directoryName) {
            const namesMatch = compareRDNSequence(
                a.directoryName.rdnSequence,
                v.directory_name.rdnSequence,
                namingEqualityMatcher(getEqualityMatcher, innerFlags),
            );
            if (namesMatch) {
                return true;
            }
        }
        if (!aInfo) {
            return undefined;
        }
        if (!v.isEmptyOrAddress()) {
            return matchPreparedORAddress(aInfo, v, flags, innerFlags);
        }
    }
    return false;
}

function matchPreparedORNamesConstantTime (
    a: PreparedORName,
    v: ORName,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
    assertionAlreadyNormalized: boolean,
): boolean | undefined {
    const innerFlags = flags & ~(MATCH_FLAG_ELEMENTS_MATCH | MATCH_FLAG_SUBSTRING_MATCH);
    const aHasDN: boolean = a.directoryName !== undefined;
    const vHasDN: boolean = v.directory_name !== undefined;
    const aHasAddr: boolean = a.addressInfo !== undefined;
    const vHasAddr: boolean = !v.isEmptyOrAddress();
    const aInfo: ORAddressInfo | null | undefined = (
        a.addressInfo && !assertionAlreadyNormalized && !(innerFlags & MATCH_FLAG_ASSERTION_NORMALIZED)
    )
        ? normalizeORAddressInfo(a.addressInfo)
        : a.addressInfo;

    let dnMatch = false;
    if (aHasDN && a.directoryName) {
        const cmp = compareRDNSequence(
            a.directoryName.rdnSequence,
            v.directory_name?.rdnSequence ?? [],
            namingEqualityMatcher(getEqualityMatcher, innerFlags),
        );
        dnMatch = vHasDN && cmp;
    }

    let addrMatch: boolean | undefined = false;
    if (aHasAddr) {
        if (!aInfo) {
            addrMatch = undefined;
        } else if (vHasAddr) {
            addrMatch = matchPreparedORAddress(aInfo, v, flags, innerFlags);
        } else {
            compareORAddressInfo(
                aInfo,
                DUMMY_OR_ADDRESS_INFO,
                compareModeFromFlags(flags),
                innerFlags,
            );
            addrMatch = false;
        }
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
function matchPreparedORNames (
    assertion: PreparedORName,
    value: ORName,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
    assertionAlreadyNormalized: boolean = false,
): boolean | undefined {
    return (flags & MATCH_FLAG_CONSTANT_TIME)
        ? matchPreparedORNamesConstantTime(assertion, value, getEqualityMatcher, flags, assertionAlreadyNormalized)
        : matchPreparedORNamesFast(assertion, value, getEqualityMatcher, flags, assertionAlreadyNormalized);
}

export
function matchPreparedORNameElement (
    extraFlags: number = 0,
): (
    assertion: PreparedORName,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
) => boolean | undefined {
    return (assertion, value, getEqualityMatcher, flags = 0): boolean | undefined => {
        const v = _decode_ORName(value);
        if (v.isEmpty()) {
            return undefined;
        }
        return matchPreparedORNames(
            assertion,
            v,
            getEqualityMatcher,
            flags | extraFlags,
            true,
        );
    };
}

export
function matchORNames (
    assertion: ORName,
    value: ORName,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    let prepared: PreparedORName;
    try {
        prepared = preparedORNameFrom(assertion, "matchORNames");
    } catch {
        return assertion.isEmpty() ? false : undefined;
    }
    return matchPreparedORNames(prepared, value, getEqualityMatcher, flags, false);
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
    decodePreparedORNameAssertion("oRNameMatch"),
    matchPreparedORNameElement(0),
    undefined,
    false,
    normalizePreparedORName,
);

export default oRNameMatch;
