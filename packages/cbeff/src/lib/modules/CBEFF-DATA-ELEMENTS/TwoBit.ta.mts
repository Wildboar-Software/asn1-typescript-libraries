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

/* START_OF_SYMBOL_DEFINITION TwoBit */
/**
 * @summary TwoBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TwoBit  ::=  INTEGER(0..3)
 * ```
 */
export type TwoBit = INTEGER;
/* END_OF_SYMBOL_DEFINITION TwoBit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TwoBit */
let _cached_decoder_for_TwoBit: $.ASN1Decoder<TwoBit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TwoBit */

/* START_OF_SYMBOL_DEFINITION _decode_TwoBit */
/**
 * @summary Decodes an ASN.1 element into a(n) TwoBit
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TwoBit} The decoded data structure.
 */
export function _decode_TwoBit(el: _Element) {
  if (!_cached_decoder_for_TwoBit) {
    _cached_decoder_for_TwoBit = $._decodeInteger;
  }
  return _cached_decoder_for_TwoBit(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TwoBit */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TwoBit */
let _cached_encoder_for_TwoBit: $.ASN1Encoder<TwoBit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TwoBit */

/* START_OF_SYMBOL_DEFINITION _encode_TwoBit */
/**
 * @summary Encodes a(n) TwoBit into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TwoBit, encoded as an ASN.1 Element.
 */
export function _encode_TwoBit(value: TwoBit, elGetter: $.ASN1Encoder<TwoBit>) {
  if (!_cached_encoder_for_TwoBit) {
    _cached_encoder_for_TwoBit = $._encodeInteger;
  }
  return _cached_encoder_for_TwoBit(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TwoBit */

/* eslint-enable */
