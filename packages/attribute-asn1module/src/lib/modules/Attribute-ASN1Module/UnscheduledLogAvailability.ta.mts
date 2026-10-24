/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AvailabilityStatus, _decode_AvailabilityStatus, _encode_AvailabilityStatus } from "../Attribute-ASN1Module/AvailabilityStatus.ta.mjs";
/**
 * @summary UnscheduledLogAvailability
 * @description
 * 
 * `AvailabilityStatus` constrained to `logFull`. ITU-T Rec. X.721 (02/92)
 * §14.2; ITU-T Rec. X.735 | ISO/IEC 10164-6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnscheduledLogAvailability  ::=  AvailabilityStatus(WITH COMPONENT (logFull))
 * ```
 */
export
type UnscheduledLogAvailability = AvailabilityStatus; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UnscheduledLogAvailability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnscheduledLogAvailability} The decoded data structure.
 */
export const _decode_UnscheduledLogAvailability: $.ASN1Decoder<UnscheduledLogAvailability> = _decode_AvailabilityStatus;

/**
 * @summary Encodes a(n) UnscheduledLogAvailability into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnscheduledLogAvailability, encoded as an ASN.1 Element.
 */
export const _encode_UnscheduledLogAvailability: $.ASN1Encoder<UnscheduledLogAvailability> = _encode_AvailabilityStatus;


/* eslint-enable */
