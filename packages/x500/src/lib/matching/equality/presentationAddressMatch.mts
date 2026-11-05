import type { ASN1Element, OCTET_STRING } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDecoded } from "../readValue.mjs";
import { bytesEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    PresentationAddress,
    _decode_PresentationAddress,
} from "../../modules/SelectedAttributeTypes/PresentationAddress.ta.mjs";
import { Buffer } from "node:buffer";

function bothUndefinedOrSame (
    a: Uint8Array | undefined,
    b: Uint8Array | undefined,
    constantTime: boolean | number = 0,
): boolean {
    if (a === undefined || b === undefined) {
        return a === undefined && b === undefined;
    }
    return bytesEqual(a, b, constantTime);
}

/**
 * Real NSAPs are at most 20 octets (ITU-T X.213), but decoded values are
 * untrusted, and `Function.prototype.apply()` throws a `RangeError` when
 * given too many arguments.
 */
const MAX_FROM_CHAR_CODE_LENGTH: number = 256;

/**
 * Maps each octet to one Latin-1 code unit, so equal keys iff equal octets.
 * This is much faster and shorter than `Uint8Array.prototype.toString()`,
 * which produces comma-separated decimal octets.
 */
function nsapToKey (naddr: OCTET_STRING): string {
    if (naddr.length <= MAX_FROM_CHAR_CODE_LENGTH) {
        return String.fromCharCode.apply(null, naddr as unknown as number[]);
    }
    return Buffer.from(naddr.buffer, naddr.byteOffset, naddr.byteLength).toString("latin1");
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.10
 * `presentationAddressMatch`.
 *
 * TRUE iff the P/S/T selectors of presented and stored
 * `PresentationAddress` are equal and the presented `nAddresses`
 * are a subset of the stored ones.
 *
 * @param a Presented address.
 * @param value Stored address, or that address already decoded.
 * @returns `true` when selectors match and asserted NSAPs are stored.
 */
export
function presentationAddressMatchTyped (
    a: PresentationAddress,
    value: PresentationAddress | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_PresentationAddress);
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    const storedNAddresses: Set<string> = new Set<string>(v.nAddresses.map(nsapToKey));
    if (!constantTime) {
        return (
            bothUndefinedOrSame(a.pSelector, v.pSelector)
            && bothUndefinedOrSame(a.sSelector, v.sSelector)
            && bothUndefinedOrSame(a.tSelector, v.tSelector)
            && a.nAddresses.every((naddr: OCTET_STRING) => storedNAddresses.has(nsapToKey(naddr)))
        );
    }
    const pSame = bothUndefinedOrSame(a.pSelector, v.pSelector, constantTime);
    const sSame = bothUndefinedOrSame(a.sSelector, v.sSelector, constantTime);
    const tSame = bothUndefinedOrSame(a.tSelector, v.tSelector, constantTime);
    let nAddressesMatch = true;
    for (let i = 0; i < a.nAddresses.length; i++) {
        if (!storedNAddresses.has(nsapToKey(a.nAddresses[i]))) {
            nAddressesMatch = false;
        }
    }
    return pSame && sSame && tSame && nAddressesMatch;
}

presentationAddressMatchTyped satisfies TypedEquationFunction<PresentationAddress>;

/**
 * `presentationAddressMatch` as a `Matcher`.
 */
export
const presentationAddressMatch: Matcher = createEqualityMatcher(
    _decode_PresentationAddress,
    presentationAddressMatchTyped,
);

export default presentationAddressMatch;
