/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AE_qualifier_form1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AE-qualifier-form1  ::= 
 *   RelativeDistinguishedName
 * ```
 */
export
type AE_qualifier_form1 = RelativeDistinguishedName; // DefinedType

let _cached_decoder_for_AE_qualifier_form1: $.ASN1Decoder<AE_qualifier_form1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AE_qualifier_form1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AE_qualifier_form1 (el: _Element): AE_qualifier_form1 {
    if (!_cached_decoder_for_AE_qualifier_form1) { _cached_decoder_for_AE_qualifier_form1 = _decode_RelativeDistinguishedName; }
    return _cached_decoder_for_AE_qualifier_form1(el);
}

let _cached_encoder_for_AE_qualifier_form1: $.ASN1Encoder<AE_qualifier_form1> | null = null;

/**
 * @summary Encodes a(n) AE_qualifier_form1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_qualifier_form1, encoded as an ASN.1 Element.
 */
export
function _encode_AE_qualifier_form1 (value: AE_qualifier_form1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AE_qualifier_form1) { _cached_encoder_for_AE_qualifier_form1 = _encode_RelativeDistinguishedName; }
    return _cached_encoder_for_AE_qualifier_form1(value, elGetter);
}


/* eslint-enable */
