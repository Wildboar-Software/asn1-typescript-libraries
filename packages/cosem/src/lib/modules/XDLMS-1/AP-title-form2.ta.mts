/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AP_title_form2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AP-title-form2  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type AP_title_form2 = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_AP_title_form2: $.ASN1Decoder<AP_title_form2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AP_title_form2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AP_title_form2 (el: _Element): AP_title_form2 {
    if (!_cached_decoder_for_AP_title_form2) { _cached_decoder_for_AP_title_form2 = $._decodeObjectIdentifier; }
    return _cached_decoder_for_AP_title_form2(el);
}

let _cached_encoder_for_AP_title_form2: $.ASN1Encoder<AP_title_form2> | null = null;

/**
 * @summary Encodes a(n) AP_title_form2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_title_form2, encoded as an ASN.1 Element.
 */
export
function _encode_AP_title_form2 (value: AP_title_form2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AP_title_form2) { _cached_encoder_for_AP_title_form2 = $._encodeObjectIdentifier; }
    return _cached_encoder_for_AP_title_form2(value, elGetter);
}


/* eslint-enable */
