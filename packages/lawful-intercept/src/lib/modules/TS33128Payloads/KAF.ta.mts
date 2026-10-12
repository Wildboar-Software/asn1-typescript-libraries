/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KAF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KAF  ::=  OCTET STRING
 * ```
 */
export
type KAF = OCTET_STRING; // OctetStringType

let _cached_decoder_for_KAF: $.ASN1Decoder<KAF> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KAF
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KAF (el: _Element): KAF {
    if (!_cached_decoder_for_KAF) { _cached_decoder_for_KAF = $._decodeOctetString; }
    return _cached_decoder_for_KAF(el);
}

let _cached_encoder_for_KAF: $.ASN1Encoder<KAF> | null = null;

/**
 * @summary Encodes a(n) KAF into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KAF, encoded as an ASN.1 Element.
 */
export
function _encode_KAF (value: KAF, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KAF) { _cached_encoder_for_KAF = $._encodeOctetString; }
    return _cached_encoder_for_KAF(value, elGetter);
}


/* eslint-enable */
