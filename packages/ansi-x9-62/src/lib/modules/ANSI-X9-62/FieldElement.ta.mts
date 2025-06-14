/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION FieldElement */
/**
 * @summary FieldElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FieldElement  ::=  OCTET STRING
 * ```
 */
export type FieldElement = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION FieldElement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FieldElement */
let _cached_decoder_for_FieldElement: $.ASN1Decoder<FieldElement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FieldElement */

/* START_OF_SYMBOL_DEFINITION _decode_FieldElement */
/**
 * @summary Decodes an ASN.1 element into a(n) FieldElement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FieldElement} The decoded data structure.
 */
export function _decode_FieldElement(el: _Element) {
    if (!_cached_decoder_for_FieldElement) {
        _cached_decoder_for_FieldElement = $._decodeOctetString;
    }
    return _cached_decoder_for_FieldElement(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FieldElement */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FieldElement */
let _cached_encoder_for_FieldElement: $.ASN1Encoder<FieldElement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FieldElement */

/* START_OF_SYMBOL_DEFINITION _encode_FieldElement */
/**
 * @summary Encodes a(n) FieldElement into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldElement, encoded as an ASN.1 Element.
 */
export function _encode_FieldElement(
    value: FieldElement,
    elGetter: $.ASN1Encoder<FieldElement>
) {
    if (!_cached_encoder_for_FieldElement) {
        _cached_encoder_for_FieldElement = $._encodeOctetString;
    }
    return _cached_encoder_for_FieldElement(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FieldElement */

/* eslint-enable */
