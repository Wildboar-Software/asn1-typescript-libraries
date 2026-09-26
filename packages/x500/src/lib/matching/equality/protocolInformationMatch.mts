import {
    ASN1TagClass,
    ASN1UniversalType,
    ASN1Element,
    type OCTET_STRING,
} from "@wildboar/asn1";
import {
    ProtocolInformation,
    _decode_ProtocolInformation,
} from "../../modules/SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import { compareNSAP } from "../../comparators/compareNSAPs.mjs";

function assertedNAddress (
    assertion: ASN1Element | ProtocolInformation | Uint8Array,
): OCTET_STRING {
    if (assertion instanceof Uint8Array) {
        return assertion;
    }
    if (!ASN1Element.isElement(assertion)) {
        return assertion.nAddress;
    }
    if (
        assertion.tagClass === ASN1TagClass.universal
        && assertion.tagNumber === ASN1UniversalType.sequence
    ) {
        return _decode_ProtocolInformation(assertion).nAddress;
    }
    return assertion.octetString;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.12
 * `protocolInformationMatch`.
 *
 * Assertion syntax is the `nAddress` OCTET STRING of
 * `ProtocolInformation`. TRUE iff that presented NSAP matches the
 * stored `nAddress` under `compareNSAP`. Stored `profiles` are
 * ignored.
 *
 * A presented `ProtocolInformation` is also accepted, although
 * that is not the assertion syntax of this matching rule. Only
 * its `nAddress` is compared; its `profiles` are ignored.
 */
export
function protocolInformationMatch (
    assertion: ASN1Element | ProtocolInformation | Uint8Array,
    value: ASN1Element | ProtocolInformation | Uint8Array,
): boolean {
    let stored: Uint8Array;
    if (value instanceof Uint8Array) {
        stored = value;
    } else if (ASN1Element.isElement(value)) {
        stored = _decode_ProtocolInformation(value).nAddress;
    } else {
        stored = value.nAddress;
    }
    return compareNSAP(assertedNAddress(assertion), stored);
}

export default protocolInformationMatch;
