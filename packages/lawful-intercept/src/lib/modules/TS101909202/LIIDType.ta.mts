/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LIIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIIDType  ::=  INTEGER (0..65535)
 * ```
 */
export
type LIIDType = INTEGER;

let _cached_decoder_for_LIIDType: $.ASN1Decoder<LIIDType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIIDType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIIDType (el: _Element): LIIDType {
    if (!_cached_decoder_for_LIIDType) { _cached_decoder_for_LIIDType = $._decodeInteger; }
    return _cached_decoder_for_LIIDType(el);
}

let _cached_encoder_for_LIIDType: $.ASN1Encoder<LIIDType> | null = null;

/**
 * @summary Encodes a(n) LIIDType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIIDType, encoded as an ASN.1 Element.
 */
export
function _encode_LIIDType (value: LIIDType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIIDType) { _cached_encoder_for_LIIDType = $._encodeInteger; }
    return _cached_encoder_for_LIIDType(value, elGetter);
}


/* eslint-enable */
