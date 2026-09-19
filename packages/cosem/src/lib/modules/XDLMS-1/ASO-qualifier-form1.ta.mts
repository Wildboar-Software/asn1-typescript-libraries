/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
// export { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";


/**
 * @summary ASO_qualifier_form1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASO-qualifier-form1  ::= 
 *   RelativeDistinguishedName
 * ```
 */
export
type ASO_qualifier_form1 = RelativeDistinguishedName; // DefinedType

let _cached_decoder_for_ASO_qualifier_form1: $.ASN1Decoder<ASO_qualifier_form1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASO_qualifier_form1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASO_qualifier_form1 (el: _Element): ASO_qualifier_form1 {
    if (!_cached_decoder_for_ASO_qualifier_form1) { _cached_decoder_for_ASO_qualifier_form1 = _decode_RelativeDistinguishedName; }
    return _cached_decoder_for_ASO_qualifier_form1(el);
}

let _cached_encoder_for_ASO_qualifier_form1: $.ASN1Encoder<ASO_qualifier_form1> | null = null;

/**
 * @summary Encodes a(n) ASO_qualifier_form1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_qualifier_form1, encoded as an ASN.1 Element.
 */
export
function _encode_ASO_qualifier_form1 (value: ASO_qualifier_form1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASO_qualifier_form1) { _cached_encoder_for_ASO_qualifier_form1 = _encode_RelativeDistinguishedName; }
    return _cached_encoder_for_ASO_qualifier_form1(value, elGetter);
}


/* eslint-enable */
