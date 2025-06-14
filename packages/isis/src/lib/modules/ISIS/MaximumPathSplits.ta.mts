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

/* START_OF_SYMBOL_DEFINITION MaximumPathSplits */
/**
 * @summary MaximumPathSplits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumPathSplits  ::=  INTEGER(1..32)
 * ```
 */
export type MaximumPathSplits = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaximumPathSplits */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumPathSplits */
let _cached_decoder_for_MaximumPathSplits: $.ASN1Decoder<MaximumPathSplits> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumPathSplits */

/* START_OF_SYMBOL_DEFINITION _decode_MaximumPathSplits */
/**
 * @summary Decodes an ASN.1 element into a(n) MaximumPathSplits
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaximumPathSplits} The decoded data structure.
 */
export function _decode_MaximumPathSplits(el: _Element) {
  if (!_cached_decoder_for_MaximumPathSplits) {
    _cached_decoder_for_MaximumPathSplits = $._decodeInteger;
  }
  return _cached_decoder_for_MaximumPathSplits(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MaximumPathSplits */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumPathSplits */
let _cached_encoder_for_MaximumPathSplits: $.ASN1Encoder<MaximumPathSplits> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumPathSplits */

/* START_OF_SYMBOL_DEFINITION _encode_MaximumPathSplits */
/**
 * @summary Encodes a(n) MaximumPathSplits into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaximumPathSplits, encoded as an ASN.1 Element.
 */
export function _encode_MaximumPathSplits(
  value: MaximumPathSplits,
  elGetter: $.ASN1Encoder<MaximumPathSplits>
) {
  if (!_cached_encoder_for_MaximumPathSplits) {
    _cached_encoder_for_MaximumPathSplits = $._encodeInteger;
  }
  return _cached_encoder_for_MaximumPathSplits(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MaximumPathSplits */

/* eslint-enable */
