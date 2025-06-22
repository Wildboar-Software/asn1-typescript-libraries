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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Degree_Of_Overlap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Degree-Of-Overlap  ::=  [APPLICATION 30] IMPLICIT INTEGER {
 *   normal(0), consecutive(1), concurrent(2)}
 * ```
 */
export type Degree_Of_Overlap = INTEGER;


/**
 * @summary Degree_Of_Overlap_normal
 * @constant
 * @type {number}
 */
export const Degree_Of_Overlap_normal: Degree_Of_Overlap = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Degree_Of_Overlap_normal
 * @constant
 * @type {number}
 */
export const normal: Degree_Of_Overlap = Degree_Of_Overlap_normal; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Degree_Of_Overlap_consecutive
 * @constant
 * @type {number}
 */
export const Degree_Of_Overlap_consecutive: Degree_Of_Overlap = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Degree_Of_Overlap_consecutive
 * @constant
 * @type {number}
 */
export const consecutive: Degree_Of_Overlap = Degree_Of_Overlap_consecutive; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Degree_Of_Overlap_concurrent
 * @constant
 * @type {number}
 */
export const Degree_Of_Overlap_concurrent: Degree_Of_Overlap = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Degree_Of_Overlap_concurrent
 * @constant
 * @type {number}
 */
export const concurrent: Degree_Of_Overlap = Degree_Of_Overlap_concurrent; /* SHORT_NAMED_INTEGER_VALUE */


let _cached_decoder_for_Degree_Of_Overlap: $.ASN1Decoder<Degree_Of_Overlap> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Degree_Of_Overlap
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Degree_Of_Overlap} The decoded data structure.
 */
export function _decode_Degree_Of_Overlap(el: _Element) {
  if (!_cached_decoder_for_Degree_Of_Overlap) {
    _cached_decoder_for_Degree_Of_Overlap = $._decode_implicit<Degree_Of_Overlap>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_Degree_Of_Overlap(el);
}


let _cached_encoder_for_Degree_Of_Overlap: $.ASN1Encoder<Degree_Of_Overlap> | null = null;


/**
 * @summary Encodes a(n) Degree_Of_Overlap into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Degree_Of_Overlap, encoded as an ASN.1 Element.
 */
export function _encode_Degree_Of_Overlap(
  value: Degree_Of_Overlap,
  elGetter: $.ASN1Encoder<Degree_Of_Overlap>
) {
  if (!_cached_encoder_for_Degree_Of_Overlap) {
    _cached_encoder_for_Degree_Of_Overlap = $._encode_implicit(
      _TagClass.application,
      30,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_Degree_Of_Overlap(value, elGetter);
}


/* eslint-enable */
