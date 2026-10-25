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
import { type AvailabilityStatus, _decode_AvailabilityStatus, _encode_AvailabilityStatus } from "../Attribute-ASN1Module/AvailabilityStatus.ta.mjs";
/**
 * @summary SchedulingAvailability
 * @description
 * 
 * `AvailabilityStatus` constrained to `offDuty`. Used by
 * `availabilityStatusPackage` for scheduled on/off. ITU-T Rec. X.721 (02/92)
 * §8.5, §14.2; ITU-T Rec. X.734 | ISO/IEC 10164-5; ITU-T Rec. X.735 | ISO/IEC
 * 10164-6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchedulingAvailability  ::=  AvailabilityStatus(WITH COMPONENT (offDuty))
 * ```
 */
export
type SchedulingAvailability = AvailabilityStatus; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SchedulingAvailability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchedulingAvailability} The decoded data structure.
 */
export const _decode_SchedulingAvailability: $.ASN1Decoder<SchedulingAvailability> = _decode_AvailabilityStatus;

/**
 * @summary Encodes a(n) SchedulingAvailability into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchedulingAvailability, encoded as an ASN.1 Element.
 */
export const _encode_SchedulingAvailability: $.ASN1Encoder<SchedulingAvailability> = _encode_AvailabilityStatus;


/* eslint-enable */
