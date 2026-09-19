/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Rai
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Rai  ::=  OCTET STRING (SIZE (6))
 * ```
 */
export
type Rai = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Rai: $.ASN1Decoder<Rai> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Rai
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Rai (el: _Element): Rai {
    if (!_cached_decoder_for_Rai) { _cached_decoder_for_Rai = $._decodeOctetString; }
    return _cached_decoder_for_Rai(el);
}

let _cached_encoder_for_Rai: $.ASN1Encoder<Rai> | null = null;

/**
 * @summary Encodes a(n) Rai into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Rai, encoded as an ASN.1 Element.
 */
export
function _encode_Rai (value: Rai, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Rai) { _cached_encoder_for_Rai = $._encodeOctetString; }
    return _cached_encoder_for_Rai(value, elGetter);
}


/* eslint-enable */
