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
  AND_Set,
  _decode_AND_Set,
  _encode_AND_Set,
} from '../ISO8571-FTAM/AND-Set.ta.mjs';
/* START_OF_SYMBOL_DEFINITION OR_Set */
/**
 * @summary OR_Set
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OR-Set  ::=  SEQUENCE OF AND-Set
 * ```
 */
export type OR_Set = AND_Set[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION OR_Set */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OR_Set */
let _cached_decoder_for_OR_Set: $.ASN1Decoder<OR_Set> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OR_Set */

/* START_OF_SYMBOL_DEFINITION _decode_OR_Set */
/**
 * @summary Decodes an ASN.1 element into a(n) OR_Set
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OR_Set} The decoded data structure.
 */
export function _decode_OR_Set(el: _Element) {
  if (!_cached_decoder_for_OR_Set) {
    _cached_decoder_for_OR_Set = $._decodeSequenceOf<AND_Set>(
      () => _decode_AND_Set
    );
  }
  return _cached_decoder_for_OR_Set(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OR_Set */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OR_Set */
let _cached_encoder_for_OR_Set: $.ASN1Encoder<OR_Set> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OR_Set */

/* START_OF_SYMBOL_DEFINITION _encode_OR_Set */
/**
 * @summary Encodes a(n) OR_Set into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OR_Set, encoded as an ASN.1 Element.
 */
export function _encode_OR_Set(value: OR_Set, elGetter: $.ASN1Encoder<OR_Set>) {
  if (!_cached_encoder_for_OR_Set) {
    _cached_encoder_for_OR_Set = $._encodeSequenceOf<AND_Set>(
      () => _encode_AND_Set,
      $.BER
    );
  }
  return _cached_encoder_for_OR_Set(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OR_Set */

/* eslint-enable */
