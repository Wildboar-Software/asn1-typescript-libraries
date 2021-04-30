import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    ProtocolInformation,
    _decode_ProtocolInformation,
} from "../../modules/SelectedAttributeTypes/ProtocolInformation.ta";
import compareUint8Arrays from "../../comparators/compareUint8Arrays";

export
const protocolInformationMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: ProtocolInformation = _decode_ProtocolInformation(assertion);
    const v: ProtocolInformation = _decode_ProtocolInformation(value);
    return compareUint8Arrays(a.nAddress, v.nAddress);
}

export default protocolInformationMatch;
