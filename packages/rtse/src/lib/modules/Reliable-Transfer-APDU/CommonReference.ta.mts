/* eslint-disable */
import {
  UTCTime,
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

/* START_OF_SYMBOL_DEFINITION CommonReference */
/**
 * @summary CommonReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonReference  ::=  UTCTime
 * ```
 */
export type CommonReference = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION CommonReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonReference */
let _cached_decoder_for_CommonReference: $.ASN1Decoder<CommonReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonReference */

/* START_OF_SYMBOL_DEFINITION _decode_CommonReference */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonReference} The decoded data structure.
 */
export function _decode_CommonReference(el: _Element) {
  if (!_cached_decoder_for_CommonReference) {
    _cached_decoder_for_CommonReference = $._decodeUTCTime;
  }
  return _cached_decoder_for_CommonReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonReference */
let _cached_encoder_for_CommonReference: $.ASN1Encoder<CommonReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonReference */

/* START_OF_SYMBOL_DEFINITION _encode_CommonReference */
/**
 * @summary Encodes a(n) CommonReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonReference, encoded as an ASN.1 Element.
 */
export function _encode_CommonReference(
  value: CommonReference,
  elGetter: $.ASN1Encoder<CommonReference>
) {
  if (!_cached_encoder_for_CommonReference) {
    _cached_encoder_for_CommonReference = $._encodeUTCTime;
  }
  return _cached_encoder_for_CommonReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonReference */

/* eslint-enable */
