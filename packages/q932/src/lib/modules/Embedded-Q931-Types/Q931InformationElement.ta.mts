/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Q931InformationElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Q931InformationElement  ::=  [APPLICATION 0] IMPLICIT OCTET STRING
 * ```
 */
export
type Q931InformationElement = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Q931InformationElement: $.ASN1Decoder<Q931InformationElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Q931InformationElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Q931InformationElement (el: _Element): Q931InformationElement {
    if (!_cached_decoder_for_Q931InformationElement) { _cached_decoder_for_Q931InformationElement = $._decode_implicit<Q931InformationElement>(() => $._decodeOctetString); }
    return _cached_decoder_for_Q931InformationElement(el);
}

let _cached_encoder_for_Q931InformationElement: $.ASN1Encoder<Q931InformationElement> | null = null;

/**
 * @summary Encodes a(n) Q931InformationElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Q931InformationElement, encoded as an ASN.1 Element.
 */
export
function _encode_Q931InformationElement (value: Q931InformationElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Q931InformationElement) { _cached_encoder_for_Q931InformationElement = $._encode_implicit(_TagClass.application, 0, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_Q931InformationElement(value, elGetter);
}


/* eslint-enable */
