/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ShakeOutputLen
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ShakeOutputLen  ::=  INTEGER
 * ```
 */
export
type ShakeOutputLen = INTEGER;

let _cached_decoder_for_ShakeOutputLen: $.ASN1Decoder<ShakeOutputLen> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ShakeOutputLen
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ShakeOutputLen (el: _Element): ShakeOutputLen {
    if (!_cached_decoder_for_ShakeOutputLen) { _cached_decoder_for_ShakeOutputLen = $._decodeInteger; }
    return _cached_decoder_for_ShakeOutputLen(el);
}

let _cached_encoder_for_ShakeOutputLen: $.ASN1Encoder<ShakeOutputLen> | null = null;

/**
 * @summary Encodes a(n) ShakeOutputLen into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShakeOutputLen, encoded as an ASN.1 Element.
 */
export
function _encode_ShakeOutputLen (value: ShakeOutputLen, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ShakeOutputLen) { _cached_encoder_for_ShakeOutputLen = $._encodeInteger; }
    return _cached_encoder_for_ShakeOutputLen(value, elGetter);
}


/* eslint-enable */
