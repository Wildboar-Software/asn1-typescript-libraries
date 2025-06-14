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

/* START_OF_SYMBOL_DEFINITION _enum_for_TransferProblem */
/**
 * @summary TransferProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferProblem  ::=  ENUMERATED {
 *   duplicateInvocationId(0), unrecognizedSecurityExchange(1), mistypedItem(2),
 *   inappropriateInvocationId(3), alternatingSequenceError(4)}
 * ```@enum {number}
 */
export enum _enum_for_TransferProblem {
  duplicateInvocationId = 0,
  unrecognizedSecurityExchange = 1,
  mistypedItem = 2,
  inappropriateInvocationId = 3,
  alternatingSequenceError = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TransferProblem */

/* START_OF_SYMBOL_DEFINITION TransferProblem */
/**
 * @summary TransferProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferProblem  ::=  ENUMERATED {
 *   duplicateInvocationId(0), unrecognizedSecurityExchange(1), mistypedItem(2),
 *   inappropriateInvocationId(3), alternatingSequenceError(4)}
 * ```@enum {number}
 */
export type TransferProblem = _enum_for_TransferProblem;
/* END_OF_SYMBOL_DEFINITION TransferProblem */

/* START_OF_SYMBOL_DEFINITION TransferProblem */
/**
 * @summary TransferProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferProblem  ::=  ENUMERATED {
 *   duplicateInvocationId(0), unrecognizedSecurityExchange(1), mistypedItem(2),
 *   inappropriateInvocationId(3), alternatingSequenceError(4)}
 * ```@enum {number}
 */
export const TransferProblem = _enum_for_TransferProblem;
/* END_OF_SYMBOL_DEFINITION TransferProblem */

/* START_OF_SYMBOL_DEFINITION TransferProblem_duplicateInvocationId */
/**
 * @summary TransferProblem_duplicateInvocationId
 * @constant
 * @type {number}
 */
export const TransferProblem_duplicateInvocationId: TransferProblem =
  TransferProblem.duplicateInvocationId; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TransferProblem_duplicateInvocationId */

/* START_OF_SYMBOL_DEFINITION duplicateInvocationId */
/**
 * @summary duplicateInvocationId
 * @constant
 * @type {number}
 */
export const duplicateInvocationId: TransferProblem =
  TransferProblem.duplicateInvocationId; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION duplicateInvocationId */

/* START_OF_SYMBOL_DEFINITION TransferProblem_unrecognizedSecurityExchange */
/**
 * @summary TransferProblem_unrecognizedSecurityExchange
 * @constant
 * @type {number}
 */
export const TransferProblem_unrecognizedSecurityExchange: TransferProblem =
  TransferProblem.unrecognizedSecurityExchange; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TransferProblem_unrecognizedSecurityExchange */

/* START_OF_SYMBOL_DEFINITION unrecognizedSecurityExchange */
/**
 * @summary unrecognizedSecurityExchange
 * @constant
 * @type {number}
 */
export const unrecognizedSecurityExchange: TransferProblem =
  TransferProblem.unrecognizedSecurityExchange; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedSecurityExchange */

/* START_OF_SYMBOL_DEFINITION TransferProblem_mistypedItem */
/**
 * @summary TransferProblem_mistypedItem
 * @constant
 * @type {number}
 */
export const TransferProblem_mistypedItem: TransferProblem =
  TransferProblem.mistypedItem; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TransferProblem_mistypedItem */

/* START_OF_SYMBOL_DEFINITION mistypedItem */
/**
 * @summary mistypedItem
 * @constant
 * @type {number}
 */
export const mistypedItem: TransferProblem =
  TransferProblem.mistypedItem; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mistypedItem */

/* START_OF_SYMBOL_DEFINITION TransferProblem_inappropriateInvocationId */
/**
 * @summary TransferProblem_inappropriateInvocationId
 * @constant
 * @type {number}
 */
export const TransferProblem_inappropriateInvocationId: TransferProblem =
  TransferProblem.inappropriateInvocationId; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TransferProblem_inappropriateInvocationId */

/* START_OF_SYMBOL_DEFINITION inappropriateInvocationId */
/**
 * @summary inappropriateInvocationId
 * @constant
 * @type {number}
 */
export const inappropriateInvocationId: TransferProblem =
  TransferProblem.inappropriateInvocationId; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION inappropriateInvocationId */

/* START_OF_SYMBOL_DEFINITION TransferProblem_alternatingSequenceError */
/**
 * @summary TransferProblem_alternatingSequenceError
 * @constant
 * @type {number}
 */
export const TransferProblem_alternatingSequenceError: TransferProblem =
  TransferProblem.alternatingSequenceError; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TransferProblem_alternatingSequenceError */

/* START_OF_SYMBOL_DEFINITION alternatingSequenceError */
/**
 * @summary alternatingSequenceError
 * @constant
 * @type {number}
 */
export const alternatingSequenceError: TransferProblem =
  TransferProblem.alternatingSequenceError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION alternatingSequenceError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TransferProblem */
let _cached_decoder_for_TransferProblem: $.ASN1Decoder<TransferProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TransferProblem */

/* START_OF_SYMBOL_DEFINITION _decode_TransferProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) TransferProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransferProblem} The decoded data structure.
 */
export function _decode_TransferProblem(el: _Element) {
  if (!_cached_decoder_for_TransferProblem) {
    _cached_decoder_for_TransferProblem = $._decodeEnumerated;
  }
  return _cached_decoder_for_TransferProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TransferProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TransferProblem */
let _cached_encoder_for_TransferProblem: $.ASN1Encoder<TransferProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TransferProblem */

/* START_OF_SYMBOL_DEFINITION _encode_TransferProblem */
/**
 * @summary Encodes a(n) TransferProblem into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferProblem, encoded as an ASN.1 Element.
 */
export function _encode_TransferProblem(
  value: TransferProblem,
  elGetter: $.ASN1Encoder<TransferProblem>
) {
  if (!_cached_encoder_for_TransferProblem) {
    _cached_encoder_for_TransferProblem = $._encodeEnumerated;
  }
  return _cached_encoder_for_TransferProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TransferProblem */

/* eslint-enable */
