/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NCI  ::=  BIT STRING (SIZE(36))
 * ```
 */
export
type NCI = BIT_STRING;

let _cached_decoder_for_NCI: $.ASN1Decoder<NCI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NCI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NCI (el: _Element): NCI {
    if (!_cached_decoder_for_NCI) { _cached_decoder_for_NCI = $._decodeBitString; }
    return _cached_decoder_for_NCI(el);
}

let _cached_encoder_for_NCI: $.ASN1Encoder<NCI> | null = null;

/**
 * @summary Encodes a(n) NCI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NCI, encoded as an ASN.1 Element.
 */
export
function _encode_NCI (value: NCI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NCI) { _cached_encoder_for_NCI = $._encodeBitString; }
    return _cached_encoder_for_NCI(value, elGetter);
}


/* eslint-enable */
