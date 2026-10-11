/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAC  ::=  OCTET STRING (SIZE(2..3))
 * ```
 */
export
type TAC = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TAC: $.ASN1Decoder<TAC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TAC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TAC (el: _Element): TAC {
    if (!_cached_decoder_for_TAC) { _cached_decoder_for_TAC = $._decodeOctetString; }
    return _cached_decoder_for_TAC(el);
}

let _cached_encoder_for_TAC: $.ASN1Encoder<TAC> | null = null;

/**
 * @summary Encodes a(n) TAC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TAC, encoded as an ASN.1 Element.
 */
export
function _encode_TAC (value: TAC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TAC) { _cached_encoder_for_TAC = $._encodeOctetString; }
    return _cached_encoder_for_TAC(value, elGetter);
}


/* eslint-enable */
