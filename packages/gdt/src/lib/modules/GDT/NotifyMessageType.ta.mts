/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotifyMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyMessageType  ::=  INTEGER
 * ```
 */
export
type NotifyMessageType = INTEGER;

let _cached_decoder_for_NotifyMessageType: $.ASN1Decoder<NotifyMessageType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotifyMessageType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotifyMessageType (el: _Element): NotifyMessageType {
    if (!_cached_decoder_for_NotifyMessageType) { _cached_decoder_for_NotifyMessageType = $._decodeInteger; }
    return _cached_decoder_for_NotifyMessageType(el);
}

let _cached_encoder_for_NotifyMessageType: $.ASN1Encoder<NotifyMessageType> | null = null;

/**
 * @summary Encodes a(n) NotifyMessageType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyMessageType, encoded as an ASN.1 Element.
 */
export
function _encode_NotifyMessageType (value: NotifyMessageType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotifyMessageType) { _cached_encoder_for_NotifyMessageType = $._encodeInteger; }
    return _cached_encoder_for_NotifyMessageType(value, elGetter);
}


/* eslint-enable */
