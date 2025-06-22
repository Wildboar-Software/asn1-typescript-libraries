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
 * @summary UnscheduledLogAvailability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnscheduledLogAvailability  ::=  AvailabilityStatus(WITH COMPONENT (logFull))
 * ```
 */
export
type UnscheduledLogAvailability = AvailabilityStatus; // DefinedType

let _cached_decoder_for_UnscheduledLogAvailability: $.ASN1Decoder<UnscheduledLogAvailability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnscheduledLogAvailability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnscheduledLogAvailability} The decoded data structure.
 */
export
function _decode_UnscheduledLogAvailability (el: _Element) {
    if (!_cached_decoder_for_UnscheduledLogAvailability) { _cached_decoder_for_UnscheduledLogAvailability = _decode_AvailabilityStatus; }
    return _cached_decoder_for_UnscheduledLogAvailability(el);
}

let _cached_encoder_for_UnscheduledLogAvailability: $.ASN1Encoder<UnscheduledLogAvailability> | null = null;

/**
 * @summary Encodes a(n) UnscheduledLogAvailability into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnscheduledLogAvailability, encoded as an ASN.1 Element.
 */
export
function _encode_UnscheduledLogAvailability (value: UnscheduledLogAvailability, elGetter: $.ASN1Encoder<UnscheduledLogAvailability>) {
    if (!_cached_encoder_for_UnscheduledLogAvailability) { _cached_encoder_for_UnscheduledLogAvailability = _encode_AvailabilityStatus; }
    return _cached_encoder_for_UnscheduledLogAvailability(value, elGetter);
}


/* eslint-enable */
