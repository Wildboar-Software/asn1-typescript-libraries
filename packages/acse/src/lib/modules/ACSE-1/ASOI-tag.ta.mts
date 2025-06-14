/* eslint-disable */
import {
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
import {
  ASOI_tag_Item,
  _decode_ASOI_tag_Item,
  _encode_ASOI_tag_Item,
} from '../ACSE-1/ASOI-tag-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ASOI_tag */
/**
 * @summary ASOI_tag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASOI-tag  ::=
 *   SEQUENCE SIZE (0..7, ...) OF
 *     SEQUENCE {qualifier   [0]  ASO-qualifier OPTIONAL,
 *               identifier  [1]  ASOI-identifier OPTIONAL}
 * ```
 */
export type ASOI_tag = ASOI_tag_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ASOI_tag */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ASOI_tag */
let _cached_decoder_for_ASOI_tag: $.ASN1Decoder<ASOI_tag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ASOI_tag */

/* START_OF_SYMBOL_DEFINITION _decode_ASOI_tag */
/**
 * @summary Decodes an ASN.1 element into a(n) ASOI_tag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASOI_tag} The decoded data structure.
 */
export function _decode_ASOI_tag(el: _Element) {
  if (!_cached_decoder_for_ASOI_tag) {
    _cached_decoder_for_ASOI_tag = $._decodeSequenceOf<ASOI_tag_Item>(
      () => _decode_ASOI_tag_Item
    );
  }
  return _cached_decoder_for_ASOI_tag(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ASOI_tag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ASOI_tag */
let _cached_encoder_for_ASOI_tag: $.ASN1Encoder<ASOI_tag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ASOI_tag */

/* START_OF_SYMBOL_DEFINITION _encode_ASOI_tag */
/**
 * @summary Encodes a(n) ASOI_tag into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASOI_tag, encoded as an ASN.1 Element.
 */
export function _encode_ASOI_tag(
  value: ASOI_tag,
  elGetter: $.ASN1Encoder<ASOI_tag>
) {
  if (!_cached_encoder_for_ASOI_tag) {
    _cached_encoder_for_ASOI_tag = $._encodeSequenceOf<ASOI_tag_Item>(
      () => _encode_ASOI_tag_Item,
      $.BER
    );
  }
  return _cached_encoder_for_ASOI_tag(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ASOI_tag */

/* eslint-enable */
