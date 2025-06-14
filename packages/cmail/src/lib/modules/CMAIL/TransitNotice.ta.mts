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
  TransitNoticeType,
  _decode_TransitNoticeType,
  _encode_TransitNoticeType,
} from '../CMAIL/TransitNoticeType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TransitNotice */
/**
 * @summary TransitNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransitNotice         ::=  TransitNoticeType
 * ```
 */
export type TransitNotice = TransitNoticeType; // DefinedType
/* END_OF_SYMBOL_DEFINITION TransitNotice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TransitNotice */
let _cached_decoder_for_TransitNotice: $.ASN1Decoder<TransitNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TransitNotice */

/* START_OF_SYMBOL_DEFINITION _decode_TransitNotice */
/**
 * @summary Decodes an ASN.1 element into a(n) TransitNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransitNotice} The decoded data structure.
 */
export function _decode_TransitNotice(el: _Element) {
  if (!_cached_decoder_for_TransitNotice) {
    _cached_decoder_for_TransitNotice = _decode_TransitNoticeType;
  }
  return _cached_decoder_for_TransitNotice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TransitNotice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TransitNotice */
let _cached_encoder_for_TransitNotice: $.ASN1Encoder<TransitNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TransitNotice */

/* START_OF_SYMBOL_DEFINITION _encode_TransitNotice */
/**
 * @summary Encodes a(n) TransitNotice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransitNotice, encoded as an ASN.1 Element.
 */
export function _encode_TransitNotice(
  value: TransitNotice,
  elGetter: $.ASN1Encoder<TransitNotice>
) {
  if (!_cached_encoder_for_TransitNotice) {
    _cached_encoder_for_TransitNotice = _encode_TransitNoticeType;
  }
  return _cached_encoder_for_TransitNotice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TransitNotice */

/* eslint-enable */
