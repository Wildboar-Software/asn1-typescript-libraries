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
 * Presented NSAPs are a subset of stored NSAPs. Typical addresses have
 * a handful of NSAPs, so a linear `bytesEqual` scan beats allocating
 * a `Set` of string keys.
 */
function nAddressesSubset (
    presented: readonly OCTET_STRING[],
    stored: readonly OCTET_STRING[],
    constantTime: boolean | number,
): boolean {
    let matched = true;
    for (let i = 0; i < presented.length; i++) {
        const a = presented[i];
        let found = false;
        for (let j = 0; j < stored.length; j++) {
            if (bytesEqual(a, stored[j], constantTime)) {
                found = true;
                if (!constantTime) {
                    break;
                }
            }
        }
        if (!found) {
            if (!constantTime) {
                return false;
            }
            matched = false;
        }
    }
    return matched;
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
    if (!constantTime) {
        return (
            bothUndefinedOrSame(a.pSelector, v.pSelector)
            && bothUndefinedOrSame(a.sSelector, v.sSelector)
            && bothUndefinedOrSame(a.tSelector, v.tSelector)
            && nAddressesSubset(a.nAddresses, v.nAddresses, 0)
        );
    }
    const pSame = bothUndefinedOrSame(a.pSelector, v.pSelector, constantTime);
    const sSame = bothUndefinedOrSame(a.sSelector, v.sSelector, constantTime);
    const tSame = bothUndefinedOrSame(a.tSelector, v.tSelector, constantTime);
    return pSame && sSame && tSame && nAddressesSubset(a.nAddresses, v.nAddresses, constantTime);
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
