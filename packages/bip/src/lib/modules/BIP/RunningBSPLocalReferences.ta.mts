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
  RunningBSPLocalReference,
  _decode_RunningBSPLocalReference,
  _encode_RunningBSPLocalReference,
} from '../BIP/RunningBSPLocalReference.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RunningBSPLocalReferences */
/**
 * @summary RunningBSPLocalReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RunningBSPLocalReferences  ::=  SET OF reference RunningBSPLocalReference
 * ```
 */
export type RunningBSPLocalReferences = RunningBSPLocalReference[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RunningBSPLocalReferences */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RunningBSPLocalReferences */
let _cached_decoder_for_RunningBSPLocalReferences: $.ASN1Decoder<RunningBSPLocalReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RunningBSPLocalReferences */

/* START_OF_SYMBOL_DEFINITION _decode_RunningBSPLocalReferences */
/**
 * @summary Decodes an ASN.1 element into a(n) RunningBSPLocalReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RunningBSPLocalReferences} The decoded data structure.
 */
export function _decode_RunningBSPLocalReferences(el: _Element) {
  if (!_cached_decoder_for_RunningBSPLocalReferences) {
    _cached_decoder_for_RunningBSPLocalReferences = $._decodeSetOf<RunningBSPLocalReference>(
      () => _decode_RunningBSPLocalReference
    );
  }
  return _cached_decoder_for_RunningBSPLocalReferences(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RunningBSPLocalReferences */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RunningBSPLocalReferences */
let _cached_encoder_for_RunningBSPLocalReferences: $.ASN1Encoder<RunningBSPLocalReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RunningBSPLocalReferences */

/* START_OF_SYMBOL_DEFINITION _encode_RunningBSPLocalReferences */
/**
 * @summary Encodes a(n) RunningBSPLocalReferences into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunningBSPLocalReferences, encoded as an ASN.1 Element.
 */
export function _encode_RunningBSPLocalReferences(
  value: RunningBSPLocalReferences,
  elGetter: $.ASN1Encoder<RunningBSPLocalReferences>
) {
  if (!_cached_encoder_for_RunningBSPLocalReferences) {
    _cached_encoder_for_RunningBSPLocalReferences = $._encodeSetOf<RunningBSPLocalReference>(
      () => _encode_RunningBSPLocalReference,
      $.BER
    );
  }
  return _cached_encoder_for_RunningBSPLocalReferences(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RunningBSPLocalReferences */

/* eslint-enable */
