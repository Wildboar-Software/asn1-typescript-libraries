import {
    ASN1CharactersError,
    type ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import { _decode_UniversalOrBMPString } from "@wildboar/or-address";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import { ctStringsEqual } from "../constantTime.mjs";
import {
    _decode_ORName,
    type ORName,
} from "@wildboar/x400/MTSAbstractService";
import {
    decodeMSStringElement,
    normalizeCountryString,
    normalizeMSString,
    orAddressToInfo,
    prepareMSStringValue,
    teletexBytesToString,
} from "./orAddressUtilities.mjs";

const MAX_DN_STRING_LIST_ITEMS = 16;
const THREE_DIGIT_DCC = /^[0-9]{3}$/;

function assertedCountryFromMSString (assertion: string): string | null {
    if (THREE_DIGIT_DCC.test(assertion)) {
        return normalizeCountryString(assertion);
    }
    return assertion.length === 2 ? assertion : null;
}

function* extractStrings (value: unknown, depth: number = 0): Generator<string> {
    if (depth > 10) {
        return;
    }
    if (typeof value === "string") {
        yield value;
        return;
    }
    if (ArrayBuffer.isView(value)) {
        return;
    }
    if (value instanceof Map) {
        for (const v of value.values()) {
            yield* extractStrings(v, depth + 1);
        }
        return;
    }
    if (value instanceof Set || Array.isArray(value)) {
        for (const v of value) {
            yield* extractStrings(v, depth + 1);
        }
        return;
    }
    if (typeof value === "object" && value !== null) {
        for (const v of Object.values(value)) {
            yield* extractStrings(v, depth + 1);
        }
    }
}

function readSingleDNString (el: ASN1Element): string | undefined {
    if (el.tagClass !== ASN1TagClass.universal) {
        return undefined;
    }
    try {
        switch (el.tagNumber) {
            case ASN1UniversalType.utf8String:
                return el.utf8String;
            case ASN1UniversalType.printableString:
                return el.printableString;
            case ASN1UniversalType.teletexString:
                return teletexBytesToString(el.teletexString);
            case ASN1UniversalType.bmpString:
                return el.bmpString;
            case ASN1UniversalType.universalString:
                return el.universalString;
            case ASN1UniversalType.ia5String:
                return el.ia5String;
            case ASN1UniversalType.numericString:
                return el.numericString;
            case ASN1UniversalType.generalString:
                return el.generalString;
            case ASN1UniversalType.visibleString:
                return el.visibleString;
            case ASN1UniversalType.graphicString:
                return el.graphicString;
            case ASN1UniversalType.set:
                return _decode_UniversalOrBMPString(el).toString();
            default:
                return undefined;
        }
    } catch {
        return undefined;
    }
}

function atavMatchesFast (
    el: ASN1Element,
    assertion: string,
    flags: number,
): boolean {
    const single = readSingleDNString(el);
    if (single !== undefined) {
        return prepareMSStringValue(single, true, flags) === assertion;
    }
    if (
        el.tagClass === ASN1TagClass.universal
        && el.tagNumber === ASN1UniversalType.sequence
    ) {
        try {
            const seq = el.sequence;
            const limit = Math.min(seq.length, MAX_DN_STRING_LIST_ITEMS);
            for (let i = 0; i < limit; i++) {
                const itemStr = readSingleDNString(seq[i]);
                if (itemStr === undefined) {
                    return false;
                }
                if (prepareMSStringValue(itemStr, true, flags) === assertion) {
                    return true;
                }
            }
        } catch {
            return false;
        }
    }
    return false;
}

function atavMatchesConstantTime (
    el: ASN1Element,
    assertion: string,
    flags: number,
): boolean {
    const single = readSingleDNString(el);
    if (single !== undefined) {
        return ctStringsEqual(assertion, prepareMSStringValue(single, true, flags));
    }
    if (
        el.tagClass === ASN1TagClass.universal
        && el.tagNumber === ASN1UniversalType.sequence
    ) {
        try {
            const seq = el.sequence;
            const limit = Math.min(seq.length, MAX_DN_STRING_LIST_ITEMS);
            let matched = false;
            let nonString = false;
            for (let i = 0; i < limit; i++) {
                const itemStr = readSingleDNString(seq[i]);
                if (itemStr === undefined) {
                    nonString = true;
                    ctStringsEqual(assertion, "");
                } else if (ctStringsEqual(assertion, prepareMSStringValue(itemStr, true, flags))) {
                    matched = true;
                }
            }
            return !nonString && matched;
        } catch {
            ctStringsEqual(assertion, "");
            return false;
        }
    }
    ctStringsEqual(assertion, "");
    return false;
}

export
function decodeORNameSingleElementAssertion (el: ASN1Element): string {
    const str = decodeMSStringElement(el);
    if (str.length === 0) {
        throw new ASN1CharactersError("MSString assertion cannot be empty", el);
    }
    return str;
}

export
function normalizeORNameSingleElementAssertion (assertion: string): string {
    return normalizeMSString(assertion, true);
}

function matchORNameSingleElementFast (
    assertion: string,
    v: ORName,
    flags: number,
): boolean | undefined {
    const normVal = !(flags & MATCH_FLAG_VALUE_NORMALIZED);
    if (!v.isEmptyOrAddress()) {
        const vInfo = orAddressToInfo(v, normVal);
        if (!vInfo) {
            return undefined;
        }
        const {
            extendedNetworkAddress: _ext,
            terminalType: _tt,
            countryName,
            physicalDeliveryCountryName,
            ...searchableInfo
        } = vInfo;
        const assertedCountry = assertedCountryFromMSString(assertion) ?? assertion;
        if (
            (countryName !== undefined && (countryName === assertedCountry || countryName === assertion))
            || (
                physicalDeliveryCountryName !== undefined
                && (physicalDeliveryCountryName === assertedCountry || physicalDeliveryCountryName === assertion)
            )
        ) {
            return true;
        }
        // `orAddressToInfo(v, normVal)` already normalizes all extracted strings when `normVal` is true.
        for (const strInValue of extractStrings(searchableInfo)) {
            if (strInValue === assertion) {
                return true;
            }
        }
    }
    if (v.directory_name) {
        for (const rdn of v.directory_name.rdnSequence) {
            for (const atav of rdn) {
                if (atavMatchesFast(atav.value, assertion, flags)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function matchORNameSingleElementConstantTime (
    assertion: string,
    v: ORName,
    flags: number,
): boolean | undefined {
    const normVal = !(flags & MATCH_FLAG_VALUE_NORMALIZED);
    let matched = false;
    let invalidAddress = false;
    if (!v.isEmptyOrAddress()) {
        const vInfo = orAddressToInfo(v, normVal);
        if (!vInfo) {
            invalidAddress = true;
        } else {
            const {
                extendedNetworkAddress: _ext,
                terminalType: _tt,
                countryName,
                physicalDeliveryCountryName,
                ...searchableInfo
            } = vInfo;
            const assertedCountry = assertedCountryFromMSString(assertion) ?? assertion;
            if (countryName !== undefined) {
                const eqCountry = ctStringsEqual(assertedCountry, countryName);
                const eqRaw = ctStringsEqual(assertion, countryName);
                if (eqCountry || eqRaw) {
                    matched = true;
                }
            }
            if (physicalDeliveryCountryName !== undefined) {
                const eqCountry = ctStringsEqual(assertedCountry, physicalDeliveryCountryName);
                const eqRaw = ctStringsEqual(assertion, physicalDeliveryCountryName);
                if (eqCountry || eqRaw) {
                    matched = true;
                }
            }
            for (const strInValue of extractStrings(searchableInfo)) {
                if (ctStringsEqual(assertion, strInValue)) {
                    matched = true;
                }
            }
        }
    }
    if (v.directory_name) {
        for (const rdn of v.directory_name.rdnSequence) {
            for (const atav of rdn) {
                if (atavMatchesConstantTime(atav.value, assertion, flags)) {
                    matched = true;
                }
            }
        }
    }
    if (matched) {
        return true;
    }
    return invalidAddress ? undefined : false;
}

export
function matchORNameSingleElement (
    assertion: string,
    v: ORName,
    flags: number = 0,
): boolean | undefined {
    if (v.isEmpty()) {
        return undefined;
    }
    return (flags & MATCH_FLAG_CONSTANT_TIME)
        ? matchORNameSingleElementConstantTime(assertion, v, flags)
        : matchORNameSingleElementFast(assertion, v, flags);
}

export
function oRNameSingleElementMatchTyped (
    assertion: string,
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const v = _decode_ORName(value);
    return matchORNameSingleElement(assertion, v, flags);
}

export
const oRNameSingleElementMatch: Matcher = createEqualityMatcher(
    decodeORNameSingleElementAssertion,
    oRNameSingleElementMatchTyped,
    undefined,
    true,
    normalizeORNameSingleElementAssertion,
);

export default oRNameSingleElementMatch;
