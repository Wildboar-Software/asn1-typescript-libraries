import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    ORAddress,
    _decode_ORAddress,
} from "@wildboar/x400/MTSAbstractService";
import { ORAddressInfo, orAddressToInfo, recursivelyNormalize } from "./orAddressUtilities.js";
import { PresentationAddress } from "@wildboar/x500/SelectedAttributeTypes";
import _ from "lodash";
import { presentationAddressMatchTyped } from "@wildboar/x500/matching/equality";

export
function orAddressIsSubset (asserted: ORAddress, value: ORAddress): boolean {
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
            return presentationAddressMatchTyped(presa, presb);
        } else {
            return false;
        }
    }
    return true;
}

export
const oRAddressElementsMatch: Matcher = createEqualityMatcher(
    _decode_ORAddress,
    (assertion, value): boolean => {
        const v = _decode_ORAddress(value);
        return orAddressIsSubset(assertion, v);
    },
);

export default oRAddressElementsMatch;
