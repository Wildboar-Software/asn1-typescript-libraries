/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AE_qualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AE-qualifier  ::=  INTEGER
 * ```
 */
export
type AE_qualifier = INTEGER;

let _cached_decoder_for_AE_qualifier: $.ASN1Decoder<AE_qualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AE_qualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AE_qualifier (el: _Element): AE_qualifier {
    if (!_cached_decoder_for_AE_qualifier) { _cached_decoder_for_AE_qualifier = $._decodeInteger; }
    return _cached_decoder_for_AE_qualifier(el);
}

let _cached_encoder_for_AE_qualifier: $.ASN1Encoder<AE_qualifier> | null = null;

/**
 * @summary Encodes a(n) AE_qualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_qualifier, encoded as an ASN.1 Element.
 */
export
function _encode_AE_qualifier (value: AE_qualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AE_qualifier) { _cached_encoder_for_AE_qualifier = $._encodeInteger; }
    return _cached_encoder_for_AE_qualifier(value, elGetter);
}


/* eslint-enable */
