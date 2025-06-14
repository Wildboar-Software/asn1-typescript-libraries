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

/* START_OF_SYMBOL_DEFINITION _enum_for_CancelProblem */
/**
 * @summary CancelProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelProblem  ::=  ENUMERATED {
 *   unknownInvocation(0), tooLate(1), notCancellable(2)}
 * ```@enum {number}
 */
export enum _enum_for_CancelProblem {
  unknownInvocation = 0,
  tooLate = 1,
  notCancellable = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CancelProblem */

/* START_OF_SYMBOL_DEFINITION CancelProblem */
/**
 * @summary CancelProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelProblem  ::=  ENUMERATED {
 *   unknownInvocation(0), tooLate(1), notCancellable(2)}
 * ```@enum {number}
 */
export type CancelProblem = _enum_for_CancelProblem;
/* END_OF_SYMBOL_DEFINITION CancelProblem */

/* START_OF_SYMBOL_DEFINITION CancelProblem */
/**
 * @summary CancelProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelProblem  ::=  ENUMERATED {
 *   unknownInvocation(0), tooLate(1), notCancellable(2)}
 * ```@enum {number}
 */
export const CancelProblem = _enum_for_CancelProblem;
/* END_OF_SYMBOL_DEFINITION CancelProblem */

/* START_OF_SYMBOL_DEFINITION CancelProblem_unknownInvocation */
/**
 * @summary CancelProblem_unknownInvocation
 * @constant
 * @type {number}
 */
export const CancelProblem_unknownInvocation: CancelProblem =
  CancelProblem.unknownInvocation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CancelProblem_unknownInvocation */

/* START_OF_SYMBOL_DEFINITION unknownInvocation */
/**
 * @summary unknownInvocation
 * @constant
 * @type {number}
 */
export const unknownInvocation: CancelProblem =
  CancelProblem.unknownInvocation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownInvocation */

/* START_OF_SYMBOL_DEFINITION CancelProblem_tooLate */
/**
 * @summary CancelProblem_tooLate
 * @constant
 * @type {number}
 */
export const CancelProblem_tooLate: CancelProblem =
  CancelProblem.tooLate; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CancelProblem_tooLate */

/* START_OF_SYMBOL_DEFINITION tooLate */
/**
 * @summary tooLate
 * @constant
 * @type {number}
 */
export const tooLate: CancelProblem =
  CancelProblem.tooLate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION tooLate */

/* START_OF_SYMBOL_DEFINITION CancelProblem_notCancellable */
/**
 * @summary CancelProblem_notCancellable
 * @constant
 * @type {number}
 */
export const CancelProblem_notCancellable: CancelProblem =
  CancelProblem.notCancellable; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CancelProblem_notCancellable */

/* START_OF_SYMBOL_DEFINITION notCancellable */
/**
 * @summary notCancellable
 * @constant
 * @type {number}
 */
export const notCancellable: CancelProblem =
  CancelProblem.notCancellable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION notCancellable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CancelProblem */
let _cached_decoder_for_CancelProblem: $.ASN1Decoder<CancelProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CancelProblem */

/* START_OF_SYMBOL_DEFINITION _decode_CancelProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) CancelProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CancelProblem} The decoded data structure.
 */
export function _decode_CancelProblem(el: _Element) {
  if (!_cached_decoder_for_CancelProblem) {
    _cached_decoder_for_CancelProblem = $._decodeEnumerated;
  }
  return _cached_decoder_for_CancelProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CancelProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CancelProblem */
let _cached_encoder_for_CancelProblem: $.ASN1Encoder<CancelProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CancelProblem */

/* START_OF_SYMBOL_DEFINITION _encode_CancelProblem */
/**
 * @summary Encodes a(n) CancelProblem into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelProblem, encoded as an ASN.1 Element.
 */
export function _encode_CancelProblem(
  value: CancelProblem,
  elGetter: $.ASN1Encoder<CancelProblem>
) {
  if (!_cached_encoder_for_CancelProblem) {
    _cached_encoder_for_CancelProblem = $._encodeEnumerated;
  }
  return _cached_encoder_for_CancelProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CancelProblem */

/* eslint-enable */
