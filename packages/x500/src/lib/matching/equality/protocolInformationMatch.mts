import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    ProtocolInformation,
    _decode_ProtocolInformation,
} from "../../modules/SelectedAttributeTypes/ProtocolInformation.ta.mjs";

// TODO: This could use a little more intelligence when it comes to comparing addresses.
export
const protocolInformationMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: ProtocolInformation = _decode_ProtocolInformation(assertion);
    const v: ProtocolInformation = _decode_ProtocolInformation(value);
    return !Buffer.compare(a.nAddress, v.nAddress);
}

export default protocolInformationMatch;
