/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotificationDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationDuration  ::=  [128] IMPLICIT INTEGER(1..99)
 * ```
 */
export
type NotificationDuration = INTEGER;

let _cached_decoder_for_NotificationDuration: $.ASN1Decoder<NotificationDuration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationDuration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationDuration (el: _Element): NotificationDuration {
    if (!_cached_decoder_for_NotificationDuration) { _cached_decoder_for_NotificationDuration = $._decode_implicit<NotificationDuration>(() => $._decodeInteger); }
    return _cached_decoder_for_NotificationDuration(el);
}

let _cached_encoder_for_NotificationDuration: $.ASN1Encoder<NotificationDuration> | null = null;

/**
 * @summary Encodes a(n) NotificationDuration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationDuration, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationDuration (value: NotificationDuration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationDuration) { _cached_encoder_for_NotificationDuration = $._encode_implicit(_TagClass.context, 128, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_NotificationDuration(value, elGetter);
}


/* eslint-enable */
