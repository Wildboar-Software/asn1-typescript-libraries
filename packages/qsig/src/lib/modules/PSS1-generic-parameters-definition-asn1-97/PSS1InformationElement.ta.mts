/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PSS1InformationElement
 * @description
 *
 * X.680 edition (ECMA-165 Annex B Table B.3), object identifier
 * `pss1-generic-parameters-asn1-97(17)`. One or more information elements
 * encoded by the rules of ECMA-143 §14.5, carried in a ROSE invoke argument,
 * return-result, or return-error parameter (ECMA-165 §11.3.3.4). The Facility
 * information element shall not be embedded this way. Every information element
 * for the same argument, result, or parameter is grouped in one value. Also the
 * argument of `pss1IeNotification` (§11.3.4, Annex B §B.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PSS1InformationElement  ::=  [APPLICATION 0] IMPLICIT OCTET STRING
 * ```
 */
export
type PSS1InformationElement = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PSS1InformationElement: $.ASN1Decoder<PSS1InformationElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PSS1InformationElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PSS1InformationElement (el: _Element): PSS1InformationElement {
    if (!_cached_decoder_for_PSS1InformationElement) { _cached_decoder_for_PSS1InformationElement = $._decode_implicit<PSS1InformationElement>(() => $._decodeOctetString); }
    return _cached_decoder_for_PSS1InformationElement(el);
}

let _cached_encoder_for_PSS1InformationElement: $.ASN1Encoder<PSS1InformationElement> | null = null;

/**
 * @summary Encodes a(n) PSS1InformationElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSS1InformationElement, encoded as an ASN.1 Element.
 */
export
function _encode_PSS1InformationElement (value: PSS1InformationElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PSS1InformationElement) { _cached_encoder_for_PSS1InformationElement = $._encode_implicit(_TagClass.application, 0, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_PSS1InformationElement(value, elGetter);
}

/* eslint-enable */
