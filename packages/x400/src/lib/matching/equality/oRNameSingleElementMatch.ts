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
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_ORName,
    type ORName,
} from "@wildboar/x400/MTSAbstractService";
import {
    decodeMSStringElement,
    normalizeMSString,
    orAddressToInfo,
    prepareMSStringValue,
    teletexBytesToString,
} from "./orAddressUtilities.js";

const MAX_DN_STRING_LIST_ITEMS = 16;

export
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

function atavMatchesNormalizedAssertion (
    el: ASN1Element,
    assertion: string,
    flags: number,
): boolean {
    const single = readSingleDNString(el);
    if (single !== undefined) {
        return prepareMSStringValue(single, true, flags) === assertion;
    }
    // Support string-list naming attributes such as `PostalAddress` (`SEQUENCE OF DirectoryString`).
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

export
function matchORNameSingleElement (
    assertion: string,
    v: ORName,
    flags: number = 0,
): boolean | undefined {
    if (v.isEmpty()) {
        return undefined;
    }
    const normVal = !(flags & MATCH_FLAG_VALUE_NORMALIZED);
    if (!v.isEmptyOrAddress()) {
        const vInfo = orAddressToInfo(v, normVal);
        if (!vInfo) {
            return undefined;
        }
        // ITU-T Rec. X.413 §12.4.7: `terminal-type` and the extended form of
        // `network-address` are not considered by `oRNameSingleElementMatch`.
        const {
            extendedNetworkAddress: _ext,
            terminalType: _tt,
            ...searchableInfo
        } = vInfo;
        for (const strInValue of extractStrings(searchableInfo)) {
            if ((normVal ? normalizeORNameSingleElementAssertion(strInValue) : strInValue) === assertion) {
                return true;
            }
        }
        for (const strInValue of extractStrings(v.built_in_standard_attributes.toJSON())) {
            if ((normVal ? normalizeORNameSingleElementAssertion(strInValue) : strInValue) === assertion) {
                return true;
            }
        }
    }
    if (v.directory_name) {
        for (const rdn of v.directory_name.rdnSequence) {
            for (const atav of rdn) {
                if (atavMatchesNormalizedAssertion(atav.value, assertion, flags)) {
                    return true;
                }
            }
        }
    }
    return false;
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
