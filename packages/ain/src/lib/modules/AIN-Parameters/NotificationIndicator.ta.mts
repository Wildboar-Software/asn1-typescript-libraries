/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotificationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationIndicator  ::=  BOOLEAN
 * ```
 */
export
type NotificationIndicator = BOOLEAN; // BooleanType

let _cached_decoder_for_NotificationIndicator: $.ASN1Decoder<NotificationIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationIndicator (el: _Element): NotificationIndicator {
    if (!_cached_decoder_for_NotificationIndicator) { _cached_decoder_for_NotificationIndicator = $._decodeBoolean; }
    return _cached_decoder_for_NotificationIndicator(el);
}

let _cached_encoder_for_NotificationIndicator: $.ASN1Encoder<NotificationIndicator> | null = null;

/**
 * @summary Encodes a(n) NotificationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationIndicator (value: NotificationIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationIndicator) { _cached_encoder_for_NotificationIndicator = $._encodeBoolean; }
    return _cached_encoder_for_NotificationIndicator(value, elGetter);
}


/* eslint-enable */
