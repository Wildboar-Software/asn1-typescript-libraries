/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type SAC = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SAC: $.ASN1Decoder<SAC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SAC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SAC (el: _Element): SAC {
    if (!_cached_decoder_for_SAC) { _cached_decoder_for_SAC = $._decodeOctetString; }
    return _cached_decoder_for_SAC(el);
}

let _cached_encoder_for_SAC: $.ASN1Encoder<SAC> | null = null;

/**
 * @summary Encodes a(n) SAC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SAC, encoded as an ASN.1 Element.
 */
export
function _encode_SAC (value: SAC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SAC) { _cached_encoder_for_SAC = $._encodeOctetString; }
    return _cached_encoder_for_SAC(value, elGetter);
}


/* eslint-enable */
