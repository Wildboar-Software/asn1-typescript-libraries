/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type RAC = OCTET_STRING; // OctetStringType

let _cached_decoder_for_RAC: $.ASN1Decoder<RAC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RAC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RAC (el: _Element): RAC {
    if (!_cached_decoder_for_RAC) { _cached_decoder_for_RAC = $._decodeOctetString; }
    return _cached_decoder_for_RAC(el);
}

let _cached_encoder_for_RAC: $.ASN1Encoder<RAC> | null = null;

/**
 * @summary Encodes a(n) RAC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RAC, encoded as an ASN.1 Element.
 */
export
function _encode_RAC (value: RAC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RAC) { _cached_encoder_for_RAC = $._encodeOctetString; }
    return _cached_encoder_for_RAC(value, elGetter);
}


/* eslint-enable */
