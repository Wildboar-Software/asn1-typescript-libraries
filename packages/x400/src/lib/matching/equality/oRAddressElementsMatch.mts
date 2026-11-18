import { Buffer } from "node:buffer";
import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { presentationAddressMatchTyped } from "@wildboar/x500/matching/equality";
import {
    type ORAddress,
    _decode_ORAddress,
} from "@wildboar/x400/MTSAbstractService";
import { type ORAddressInfo, orAddressToInfo, recursivelyNormalize } from "./orAddressUtilities.mjs";
import { PresentationAddress } from "@wildboar/x500/SelectedAttributeTypes";
import _ from "lodash";

export
function orAddressIsSubset(
    asserted: ORAddress,
    value: ORAddress,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const aInfo: ORAddressInfo | null = orAddressToInfo(asserted);
    const bInfo: ORAddressInfo | null = orAddressToInfo(value);
    if (!aInfo) {
        return false;
    }
    if (!bInfo) {
        return false;
    }
    const comparableAInfo: ORAddressInfo = recursivelyNormalize({
        ...aInfo,
        extendedNetworkAddress: undefined,
    });
    const comparableBInfo: ORAddressInfo = recursivelyNormalize({
        ...bInfo,
        extendedNetworkAddress: undefined,
    });
    if (!_.isMatch(comparableBInfo, comparableAInfo)) { // Intentionally swapped.
        return false;
    }
    if (aInfo.extendedNetworkAddress) {
        if (!bInfo.extendedNetworkAddress) {
            return false;
        }
        if (Array.isArray(aInfo.extendedNetworkAddress)) {
            if (!Array.isArray(bInfo.extendedNetworkAddress)) {
                return false;
            }
            if (!_.isEqual(aInfo.extendedNetworkAddress, bInfo.extendedNetworkAddress)) {
                return false;
            }
        } else if (aInfo.extendedNetworkAddress instanceof PresentationAddress) {
            if (!(bInfo.extendedNetworkAddress instanceof PresentationAddress)) {
                return false;
            }
            const presa = aInfo.extendedNetworkAddress;
            const presb = bInfo.extendedNetworkAddress;
            return presentationAddressMatchTyped(presa, presb, getEqualityMatcher, flags) === true;
        } else {
            return false;
        }
    }
    return true;
}

export
function oRAddressElementsMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    // If the two values are byte-for-byte equal, return.
    if (!Buffer.compare(assertion.value, value.value)) {
        return true;
    }
    const a = _decode_ORAddress(assertion);
    const v = _decode_ORAddress(value);
    return orAddressIsSubset(a, v, getEqualityMatcher, flags);
}

oRAddressElementsMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const oRAddressElementsMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    oRAddressElementsMatchTyped,
);

export default oRAddressElementsMatch;
