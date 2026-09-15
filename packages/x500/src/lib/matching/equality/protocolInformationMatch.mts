import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    ProtocolInformation,
    _decode_ProtocolInformation,
} from "../../modules/SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import { compareNSAP } from "../../comparators/compareNSAPs.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.12
 * `protocolInformationMatch`.
 *
 * Assertion syntax is the `nAddress` OCTET STRING of
 * `ProtocolInformation`. TRUE iff that presented NSAP matches the
 * stored `nAddress` as for `octetStringMatch`.
 */
export
const protocolInformationMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: ProtocolInformation = _decode_ProtocolInformation(assertion);
    const v: ProtocolInformation = _decode_ProtocolInformation(value);
    return compareNSAP(a.nAddress, v.nAddress);
}

export default protocolInformationMatch;
