/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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
/* START_OF_SYMBOL_DEFINITION WantBack */
/**
 * @summary WantBack
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WantBack  ::=  SEQUENCE SIZE (1..MAX) OF
 *     WANT-BACK.&id ({AllWantBacks})
 * ```
 */
export type WantBack = OBJECT_IDENTIFIER[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION WantBack */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WantBack */
let _cached_decoder_for_WantBack: $.ASN1Decoder<WantBack> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WantBack */

/* START_OF_SYMBOL_DEFINITION _decode_WantBack */
/**
 * @summary Decodes an ASN.1 element into a(n) WantBack
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WantBack} The decoded data structure.
 */
export function _decode_WantBack(el: _Element) {
  if (!_cached_decoder_for_WantBack) {
    _cached_decoder_for_WantBack = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
      () => $._decodeObjectIdentifier
    );
  }
  return _cached_decoder_for_WantBack(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WantBack */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WantBack */
let _cached_encoder_for_WantBack: $.ASN1Encoder<WantBack> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WantBack */

/* START_OF_SYMBOL_DEFINITION _encode_WantBack */
/**
 * @summary Encodes a(n) WantBack into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WantBack, encoded as an ASN.1 Element.
 */
export function _encode_WantBack(
  value: WantBack,
  elGetter: $.ASN1Encoder<WantBack>
) {
  if (!_cached_encoder_for_WantBack) {
    _cached_encoder_for_WantBack = $._encodeSequenceOf<OBJECT_IDENTIFIER>(
      () => $._encodeObjectIdentifier,
      $.BER
    );
  }
  return _cached_encoder_for_WantBack(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WantBack */

/* eslint-enable */
