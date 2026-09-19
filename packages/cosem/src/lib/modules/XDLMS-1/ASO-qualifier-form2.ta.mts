/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ASO_qualifier_form2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASO-qualifier-form2  ::=  INTEGER
 * ```
 */
export
type ASO_qualifier_form2 = INTEGER;

let _cached_decoder_for_ASO_qualifier_form2: $.ASN1Decoder<ASO_qualifier_form2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASO_qualifier_form2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASO_qualifier_form2 (el: _Element): ASO_qualifier_form2 {
    if (!_cached_decoder_for_ASO_qualifier_form2) { _cached_decoder_for_ASO_qualifier_form2 = $._decodeInteger; }
    return _cached_decoder_for_ASO_qualifier_form2(el);
}

let _cached_encoder_for_ASO_qualifier_form2: $.ASN1Encoder<ASO_qualifier_form2> | null = null;

/**
 * @summary Encodes a(n) ASO_qualifier_form2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_qualifier_form2, encoded as an ASN.1 Element.
 */
export
function _encode_ASO_qualifier_form2 (value: ASO_qualifier_form2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASO_qualifier_form2) { _cached_encoder_for_ASO_qualifier_form2 = $._encodeInteger; }
    return _cached_encoder_for_ASO_qualifier_form2(value, elGetter);
}


/* eslint-enable */
