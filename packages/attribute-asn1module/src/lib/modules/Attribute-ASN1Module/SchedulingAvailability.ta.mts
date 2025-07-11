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
import { AvailabilityStatus, _decode_AvailabilityStatus, _encode_AvailabilityStatus } from "../Attribute-ASN1Module/AvailabilityStatus.ta.mjs";
/**
 * @summary SchedulingAvailability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchedulingAvailability  ::=  AvailabilityStatus(WITH COMPONENT (offDuty))
 * ```
 */
export
type SchedulingAvailability = AvailabilityStatus; // DefinedType

let _cached_decoder_for_SchedulingAvailability: $.ASN1Decoder<SchedulingAvailability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SchedulingAvailability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchedulingAvailability} The decoded data structure.
 */
export
function _decode_SchedulingAvailability (el: _Element): SchedulingAvailability {
    if (!_cached_decoder_for_SchedulingAvailability) { _cached_decoder_for_SchedulingAvailability = _decode_AvailabilityStatus; }
    return _cached_decoder_for_SchedulingAvailability(el);
}

let _cached_encoder_for_SchedulingAvailability: $.ASN1Encoder<SchedulingAvailability> | null = null;

/**
 * @summary Encodes a(n) SchedulingAvailability into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchedulingAvailability, encoded as an ASN.1 Element.
 */
export
function _encode_SchedulingAvailability (value: SchedulingAvailability, elGetter: $.ASN1Encoder<SchedulingAvailability>): _Element {
    if (!_cached_encoder_for_SchedulingAvailability) { _cached_encoder_for_SchedulingAvailability = _encode_AvailabilityStatus; }
    return _cached_encoder_for_SchedulingAvailability(value, elGetter);
}


/* eslint-enable */
