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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary P_AbortCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * P-AbortCause  ::=  [APPLICATION 10]  INTEGER {
 *   unrecognizedMessageType(0), unrecognizedTransactionID(1),
 *   badlyFormattedTransactionPortion(2), incorrectTransactionPortion(3),
 *   resourceLimitation(4)}(0..127)
 * ```
 */
export type P_AbortCause = INTEGER;

/**
 * @summary P_AbortCause_unrecognizedMessageType
 * @constant
 * @type {number}
 */
export const P_AbortCause_unrecognizedMessageType: P_AbortCause = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_unrecognizedMessageType
 * @constant
 * @type {number}
 */
export const unrecognizedMessageType: P_AbortCause = P_AbortCause_unrecognizedMessageType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_unrecognizedTransactionID
 * @constant
 * @type {number}
 */
export const P_AbortCause_unrecognizedTransactionID: P_AbortCause = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_unrecognizedTransactionID
 * @constant
 * @type {number}
 */
export const unrecognizedTransactionID: P_AbortCause = P_AbortCause_unrecognizedTransactionID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_badlyFormattedTransactionPortion
 * @constant
 * @type {number}
 */
export const P_AbortCause_badlyFormattedTransactionPortion: P_AbortCause = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_badlyFormattedTransactionPortion
 * @constant
 * @type {number}
 */
export const badlyFormattedTransactionPortion: P_AbortCause = P_AbortCause_badlyFormattedTransactionPortion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_incorrectTransactionPortion
 * @constant
 * @type {number}
 */
export const P_AbortCause_incorrectTransactionPortion: P_AbortCause = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_incorrectTransactionPortion
 * @constant
 * @type {number}
 */
export const incorrectTransactionPortion: P_AbortCause = P_AbortCause_incorrectTransactionPortion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_resourceLimitation
 * @constant
 * @type {number}
 */
export const P_AbortCause_resourceLimitation: P_AbortCause = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_resourceLimitation
 * @constant
 * @type {number}
 */
export const resourceLimitation: P_AbortCause = P_AbortCause_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_P_AbortCause: $.ASN1Decoder<P_AbortCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) P_AbortCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {P_AbortCause} The decoded data structure.
 */
export function _decode_P_AbortCause(el: _Element): P_AbortCause {
  if (!_cached_decoder_for_P_AbortCause) {
    _cached_decoder_for_P_AbortCause = $._decode_implicit<P_AbortCause>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_P_AbortCause(el);
}

let _cached_encoder_for_P_AbortCause: $.ASN1Encoder<P_AbortCause> | null = null;

/**
 * @summary Encodes a(n) P_AbortCause into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The P_AbortCause, encoded as an ASN.1 Element.
 */
export function _encode_P_AbortCause(
  value: P_AbortCause,
  elGetter: $.ASN1Encoder<P_AbortCause>
): _Element {
  if (!_cached_encoder_for_P_AbortCause) {
    _cached_encoder_for_P_AbortCause = $._encode_implicit(
      _TagClass.application,
      10,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_P_AbortCause(value, elGetter);
}


/* eslint-enable */
