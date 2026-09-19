/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CatSupportedClasses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CatSupportedClasses  ::=  BIT STRING
 * ```
 */
export
type CatSupportedClasses = BIT_STRING;

let _cached_decoder_for_CatSupportedClasses: $.ASN1Decoder<CatSupportedClasses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CatSupportedClasses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CatSupportedClasses (el: _Element): CatSupportedClasses {
    if (!_cached_decoder_for_CatSupportedClasses) { _cached_decoder_for_CatSupportedClasses = $._decodeBitString; }
    return _cached_decoder_for_CatSupportedClasses(el);
}

let _cached_encoder_for_CatSupportedClasses: $.ASN1Encoder<CatSupportedClasses> | null = null;

/**
 * @summary Encodes a(n) CatSupportedClasses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CatSupportedClasses, encoded as an ASN.1 Element.
 */
export
function _encode_CatSupportedClasses (value: CatSupportedClasses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CatSupportedClasses) { _cached_encoder_for_CatSupportedClasses = $._encodeBitString; }
    return _cached_encoder_for_CatSupportedClasses(value, elGetter);
}


/* eslint-enable */
