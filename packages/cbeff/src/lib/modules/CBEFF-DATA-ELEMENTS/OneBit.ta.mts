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

/* START_OF_SYMBOL_DEFINITION OneBit */
/**
 * @summary OneBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OneBit  ::=  INTEGER(0..1)
 * ```
 */
export type OneBit = INTEGER;
/* END_OF_SYMBOL_DEFINITION OneBit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OneBit */
let _cached_decoder_for_OneBit: $.ASN1Decoder<OneBit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OneBit */

/* START_OF_SYMBOL_DEFINITION _decode_OneBit */
/**
 * @summary Decodes an ASN.1 element into a(n) OneBit
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OneBit} The decoded data structure.
 */
export function _decode_OneBit(el: _Element) {
  if (!_cached_decoder_for_OneBit) {
    _cached_decoder_for_OneBit = $._decodeInteger;
  }
  return _cached_decoder_for_OneBit(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OneBit */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OneBit */
let _cached_encoder_for_OneBit: $.ASN1Encoder<OneBit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OneBit */

/* START_OF_SYMBOL_DEFINITION _encode_OneBit */
/**
 * @summary Encodes a(n) OneBit into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OneBit, encoded as an ASN.1 Element.
 */
export function _encode_OneBit(value: OneBit, elGetter: $.ASN1Encoder<OneBit>) {
  if (!_cached_encoder_for_OneBit) {
    _cached_encoder_for_OneBit = $._encodeInteger;
  }
  return _cached_encoder_for_OneBit(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OneBit */

/* eslint-enable */
