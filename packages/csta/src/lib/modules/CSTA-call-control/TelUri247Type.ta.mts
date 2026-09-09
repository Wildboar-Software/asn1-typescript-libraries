/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { IA5String, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary TelUri247Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelUri247Type  ::=  IA5String
 * ```
 */
export
type TelUri247Type = IA5String; // IA5String

let _cached_decoder_for_TelUri247Type: $.ASN1Decoder<TelUri247Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TelUri247Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TelUri247Type (el: _Element): TelUri247Type {
    if (!_cached_decoder_for_TelUri247Type) { _cached_decoder_for_TelUri247Type = $._decodeIA5String; }
    return _cached_decoder_for_TelUri247Type(el);
}

let _cached_encoder_for_TelUri247Type: $.ASN1Encoder<TelUri247Type> | null = null;

/**
 * @summary Encodes a(n) TelUri247Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelUri247Type, encoded as an ASN.1 Element.
 */
export
function _encode_TelUri247Type (value: TelUri247Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TelUri247Type) { _cached_encoder_for_TelUri247Type = $._encodeIA5String; }
    return _cached_encoder_for_TelUri247Type(value, elGetter);
}


/* eslint-enable */
