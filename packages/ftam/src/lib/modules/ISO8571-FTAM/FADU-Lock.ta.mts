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


/**
 * @summary FADU_Lock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FADU-Lock  ::=  [APPLICATION 16] IMPLICIT INTEGER {off(0), on(1)}
 * ```
 */
export type FADU_Lock = INTEGER;


/**
 * @summary FADU_Lock_off
 * @constant
 * @type {number}
 */
export const FADU_Lock_off: FADU_Lock = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Lock_off
 * @constant
 * @type {number}
 */
export const off: FADU_Lock = FADU_Lock_off; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Lock_on
 * @constant
 * @type {number}
 */
export const FADU_Lock_on: FADU_Lock = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Lock_on
 * @constant
 * @type {number}
 */
export const on: FADU_Lock = FADU_Lock_on; /* SHORT_NAMED_INTEGER_VALUE */


let _cached_decoder_for_FADU_Lock: $.ASN1Decoder<FADU_Lock> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) FADU_Lock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FADU_Lock} The decoded data structure.
 */
export function _decode_FADU_Lock(el: _Element) {
  if (!_cached_decoder_for_FADU_Lock) {
    _cached_decoder_for_FADU_Lock = $._decode_implicit<FADU_Lock>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_FADU_Lock(el);
}


let _cached_encoder_for_FADU_Lock: $.ASN1Encoder<FADU_Lock> | null = null;


/**
 * @summary Encodes a(n) FADU_Lock into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FADU_Lock, encoded as an ASN.1 Element.
 */
export function _encode_FADU_Lock(
  value: FADU_Lock,
  elGetter: $.ASN1Encoder<FADU_Lock>
) {
  if (!_cached_encoder_for_FADU_Lock) {
    _cached_encoder_for_FADU_Lock = $._encode_implicit(
      _TagClass.application,
      16,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_FADU_Lock(value, elGetter);
}


/* eslint-enable */
