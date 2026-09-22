import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Element, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import {
    ProtocolInformation,
    _decode_ProtocolInformation,
} from "../../modules/SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import { Buffer } from "node:buffer";

function presentedNAddress (assertion: ASN1Element): Uint8Array {
    if (
        (assertion.tagClass === ASN1TagClass.universal)
        && (assertion.tagNumber === ASN1UniversalType.octetString)
    ) {
        return assertion.octetString;
    }
    return _decode_ProtocolInformation(assertion).nAddress;
}

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
    const v: ProtocolInformation = _decode_ProtocolInformation(value);
    return !Buffer.compare(presentedNAddress(assertion), v.nAddress);
}

export default protocolInformationMatch;
