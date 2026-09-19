/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ASO_qualifier_form_octets
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASO-qualifier-form-octets  ::=  OCTET STRING
 * ```
 */
export
type ASO_qualifier_form_octets = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ASO_qualifier_form_octets: $.ASN1Decoder<ASO_qualifier_form_octets> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASO_qualifier_form_octets
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASO_qualifier_form_octets (el: _Element): ASO_qualifier_form_octets {
    if (!_cached_decoder_for_ASO_qualifier_form_octets) { _cached_decoder_for_ASO_qualifier_form_octets = $._decodeOctetString; }
    return _cached_decoder_for_ASO_qualifier_form_octets(el);
}

let _cached_encoder_for_ASO_qualifier_form_octets: $.ASN1Encoder<ASO_qualifier_form_octets> | null = null;

/**
 * @summary Encodes a(n) ASO_qualifier_form_octets into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_qualifier_form_octets, encoded as an ASN.1 Element.
 */
export
function _encode_ASO_qualifier_form_octets (value: ASO_qualifier_form_octets, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASO_qualifier_form_octets) { _cached_encoder_for_ASO_qualifier_form_octets = $._encodeOctetString; }
    return _cached_encoder_for_ASO_qualifier_form_octets(value, elGetter);
}


/* eslint-enable */
