/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IV
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IV  ::=  OCTET STRING
 * ```
 */
export
type IV = OCTET_STRING; // OctetStringType

let _cached_decoder_for_IV: $.ASN1Decoder<IV> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IV
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IV (el: _Element): IV {
    if (!_cached_decoder_for_IV) { _cached_decoder_for_IV = $._decodeOctetString; }
    return _cached_decoder_for_IV(el);
}

let _cached_encoder_for_IV: $.ASN1Encoder<IV> | null = null;

/**
 * @summary Encodes a(n) IV into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IV, encoded as an ASN.1 Element.
 */
export
function _encode_IV (value: IV, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IV) { _cached_encoder_for_IV = $._encodeOctetString; }
    return _cached_encoder_for_IV(value, elGetter);
}


/* eslint-enable */
