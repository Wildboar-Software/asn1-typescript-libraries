/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type LAC = OCTET_STRING; // OctetStringType

let _cached_decoder_for_LAC: $.ASN1Decoder<LAC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LAC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LAC (el: _Element): LAC {
    if (!_cached_decoder_for_LAC) { _cached_decoder_for_LAC = $._decodeOctetString; }
    return _cached_decoder_for_LAC(el);
}

let _cached_encoder_for_LAC: $.ASN1Encoder<LAC> | null = null;

/**
 * @summary Encodes a(n) LAC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LAC, encoded as an ASN.1 Element.
 */
export
function _encode_LAC (value: LAC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LAC) { _cached_encoder_for_LAC = $._encodeOctetString; }
    return _cached_encoder_for_LAC(value, elGetter);
}


/* eslint-enable */
