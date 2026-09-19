/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MNC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNC  ::=  NumericString (SIZE(2..3))
 * ```
 */
export
type MNC = NumericString; // NumericString

let _cached_decoder_for_MNC: $.ASN1Decoder<MNC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MNC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MNC (el: _Element): MNC {
    if (!_cached_decoder_for_MNC) { _cached_decoder_for_MNC = $._decodeNumericString; }
    return _cached_decoder_for_MNC(el);
}

let _cached_encoder_for_MNC: $.ASN1Encoder<MNC> | null = null;

/**
 * @summary Encodes a(n) MNC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MNC, encoded as an ASN.1 Element.
 */
export
function _encode_MNC (value: MNC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MNC) { _cached_encoder_for_MNC = $._encodeNumericString; }
    return _cached_encoder_for_MNC(value, elGetter);
}


/* eslint-enable */
