import {
    ASN1TagClass,
    ASN1UniversalType,
    ASN1Element,
    type OCTET_STRING,
} from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    ProtocolInformation,
    _decode_ProtocolInformation,
} from "../../modules/SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import { compareNSAP } from "../../comparators/compareNSAPs.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

function readNAddress (value: ASN1Element | ProtocolInformation | Uint8Array): OCTET_STRING {
    if (value instanceof Uint8Array) {
        return value;
    }
    if (!ASN1Element.isElement(value)) {
        return value.nAddress;
    }
    if (
        value.tagClass === ASN1TagClass.universal
        && value.tagNumber === ASN1UniversalType.sequence
    ) {
        return _decode_ProtocolInformation(value).nAddress;
    }
    return value.octetString;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.12
 * `protocolInformationMatch`.
 *
 * Assertion syntax is the `nAddress` OCTET STRING of
 * `ProtocolInformation`. TRUE iff that presented NSAP matches the
 * stored `nAddress` under `compareNSAP`. Stored `profiles` are
 * ignored. A presented `ProtocolInformation` is also accepted;
 * only its `nAddress` is compared.
 *
 * @param assertion Presented NSAP.
 * @param value Stored protocol information, NSAP, or that NSAP already decoded.
 */
export
function protocolInformationMatchTyped (
    assertion: Uint8Array,
    value: ASN1Element | ProtocolInformation | Uint8Array,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    return compareNSAP(assertion, readNAddress(value), flags & MATCH_FLAG_CONSTANT_TIME);
}

protocolInformationMatchTyped satisfies TypedEquationFunction<Uint8Array>;

/**
 * `protocolInformationMatch` as a `Matcher`.
 */
export
const protocolInformationMatch: Matcher = createEqualityMatcher(
    readNAddress,
    protocolInformationMatchTyped,
    undefined,
    true,
);

export default protocolInformationMatch;
