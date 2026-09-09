/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary UnspecifiedErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnspecifiedErrors  ::=  NULL
 * ```
 */
export
type UnspecifiedErrors = NULL; // NullType

let _cached_decoder_for_UnspecifiedErrors: $.ASN1Decoder<UnspecifiedErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnspecifiedErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnspecifiedErrors (el: _Element): UnspecifiedErrors {
    if (!_cached_decoder_for_UnspecifiedErrors) { _cached_decoder_for_UnspecifiedErrors = $._decodeNull; }
    return _cached_decoder_for_UnspecifiedErrors(el);
}

let _cached_encoder_for_UnspecifiedErrors: $.ASN1Encoder<UnspecifiedErrors> | null = null;

/**
 * @summary Encodes a(n) UnspecifiedErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnspecifiedErrors, encoded as an ASN.1 Element.
 */
export
function _encode_UnspecifiedErrors (value: UnspecifiedErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnspecifiedErrors) { _cached_encoder_for_UnspecifiedErrors = $._encodeNull; }
    return _cached_encoder_for_UnspecifiedErrors(value, elGetter);
}


/* eslint-enable */
