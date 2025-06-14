/* eslint-disable */
import {
  T61String,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION AdditionalReferenceInformation */
/**
 * @summary AdditionalReferenceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalReferenceInformation  ::=  T61String
 * ```
 */
export type AdditionalReferenceInformation = T61String; // T61String
/* END_OF_SYMBOL_DEFINITION AdditionalReferenceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalReferenceInformation */
let _cached_decoder_for_AdditionalReferenceInformation: $.ASN1Decoder<AdditionalReferenceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalReferenceInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AdditionalReferenceInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalReferenceInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalReferenceInformation} The decoded data structure.
 */
export function _decode_AdditionalReferenceInformation(el: _Element) {
  if (!_cached_decoder_for_AdditionalReferenceInformation) {
    _cached_decoder_for_AdditionalReferenceInformation = $._decodeT61String;
  }
  return _cached_decoder_for_AdditionalReferenceInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdditionalReferenceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalReferenceInformation */
let _cached_encoder_for_AdditionalReferenceInformation: $.ASN1Encoder<AdditionalReferenceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalReferenceInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AdditionalReferenceInformation */
/**
 * @summary Encodes a(n) AdditionalReferenceInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalReferenceInformation, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalReferenceInformation(
  value: AdditionalReferenceInformation,
  elGetter: $.ASN1Encoder<AdditionalReferenceInformation>
) {
  if (!_cached_encoder_for_AdditionalReferenceInformation) {
    _cached_encoder_for_AdditionalReferenceInformation = $._encodeT61String;
  }
  return _cached_encoder_for_AdditionalReferenceInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdditionalReferenceInformation */

/* eslint-enable */
