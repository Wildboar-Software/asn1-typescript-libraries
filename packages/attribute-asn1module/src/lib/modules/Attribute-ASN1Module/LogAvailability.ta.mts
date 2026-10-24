/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AvailabilityStatus, _decode_AvailabilityStatus, _encode_AvailabilityStatus } from "../Attribute-ASN1Module/AvailabilityStatus.ta.mjs";
/**
 * @summary LogAvailability
 * @description
 * 
 * `AvailabilityStatus` constrained to `logFull` or `offDuty` — the availability
 * values a log may report. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec. X.735 |
 * ISO/IEC 10164-6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogAvailability  ::=  AvailabilityStatus(WITH COMPONENT (logFull | offDuty))
 * ```
 */
export
type LogAvailability = AvailabilityStatus; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) LogAvailability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogAvailability} The decoded data structure.
 */
export const _decode_LogAvailability: $.ASN1Decoder<LogAvailability> = _decode_AvailabilityStatus;

/**
 * @summary Encodes a(n) LogAvailability into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogAvailability, encoded as an ASN.1 Element.
 */
export const _encode_LogAvailability: $.ASN1Encoder<LogAvailability> = _encode_AvailabilityStatus;


/* eslint-enable */
