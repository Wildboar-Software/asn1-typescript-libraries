/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Q931InformationElement
 * @description
 * 
 * One or more Q.931 information elements encapsulated as a single
 * supplementary-service parameter, keeping their Q.931 coding. The tag is
 * application class, primitive, code 0 (octet `01000000`). Every Q.931
 * information element that is encapsulated this way is placed together in the
 * contents. Do not encapsulate a Facility information element inside a Facility
 * information element.
 *
 * ITU-T Rec. Q.932 (05/1998) §8.2.3.1.3, Table 8-8, and Table 8-9.
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
