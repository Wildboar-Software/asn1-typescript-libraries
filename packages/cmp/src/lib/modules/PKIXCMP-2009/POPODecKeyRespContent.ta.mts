/* eslint-disable */
import {
  INTEGER,
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

/* START_OF_SYMBOL_DEFINITION POPODecKeyRespContent */
/**
 * @summary POPODecKeyRespContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * POPODecKeyRespContent  ::=  SEQUENCE OF INTEGER
 * ```
 */
export type POPODecKeyRespContent = INTEGER[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION POPODecKeyRespContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_POPODecKeyRespContent */
let _cached_decoder_for_POPODecKeyRespContent: $.ASN1Decoder<POPODecKeyRespContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_POPODecKeyRespContent */

/* START_OF_SYMBOL_DEFINITION _decode_POPODecKeyRespContent */
/**
 * @summary Decodes an ASN.1 element into a(n) POPODecKeyRespContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {POPODecKeyRespContent} The decoded data structure.
 */
export function _decode_POPODecKeyRespContent(el: _Element) {
  if (!_cached_decoder_for_POPODecKeyRespContent) {
    _cached_decoder_for_POPODecKeyRespContent = $._decodeSequenceOf<INTEGER>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_POPODecKeyRespContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_POPODecKeyRespContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_POPODecKeyRespContent */
let _cached_encoder_for_POPODecKeyRespContent: $.ASN1Encoder<POPODecKeyRespContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_POPODecKeyRespContent */

/* START_OF_SYMBOL_DEFINITION _encode_POPODecKeyRespContent */
/**
 * @summary Encodes a(n) POPODecKeyRespContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POPODecKeyRespContent, encoded as an ASN.1 Element.
 */
export function _encode_POPODecKeyRespContent(
  value: POPODecKeyRespContent,
  elGetter: $.ASN1Encoder<POPODecKeyRespContent>
) {
  if (!_cached_encoder_for_POPODecKeyRespContent) {
    _cached_encoder_for_POPODecKeyRespContent = $._encodeSequenceOf<INTEGER>(
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_POPODecKeyRespContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_POPODecKeyRespContent */

/* eslint-enable */
