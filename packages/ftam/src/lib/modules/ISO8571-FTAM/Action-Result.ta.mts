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
 * @summary Action_Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Action-Result  ::=  [APPLICATION 5] IMPLICIT INTEGER {
 *   success(0), transient-error(1), permanent-error(2)}
 * ```
 */
export type Action_Result = INTEGER;


/**
 * @summary Action_Result_success
 * @constant
 * @type {number}
 */
export const Action_Result_success: Action_Result = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Action_Result_success
 * @constant
 * @type {number}
 */
export const success: Action_Result = Action_Result_success; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Action_Result_transient_error
 * @constant
 * @type {number}
 */
export const Action_Result_transient_error: Action_Result = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Action_Result_transient_error
 * @constant
 * @type {number}
 */
export const transient_error: Action_Result = Action_Result_transient_error; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Action_Result_permanent_error
 * @constant
 * @type {number}
 */
export const Action_Result_permanent_error: Action_Result = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Action_Result_permanent_error
 * @constant
 * @type {number}
 */
export const permanent_error: Action_Result = Action_Result_permanent_error; /* SHORT_NAMED_INTEGER_VALUE */


let _cached_decoder_for_Action_Result: $.ASN1Decoder<Action_Result> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Action_Result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Action_Result} The decoded data structure.
 */
export function _decode_Action_Result(el: _Element) {
  if (!_cached_decoder_for_Action_Result) {
    _cached_decoder_for_Action_Result = $._decode_implicit<Action_Result>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_Action_Result(el);
}


let _cached_encoder_for_Action_Result: $.ASN1Encoder<Action_Result> | null = null;


/**
 * @summary Encodes a(n) Action_Result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Action_Result, encoded as an ASN.1 Element.
 */
export function _encode_Action_Result(
  value: Action_Result,
  elGetter: $.ASN1Encoder<Action_Result>
) {
  if (!_cached_encoder_for_Action_Result) {
    _cached_encoder_for_Action_Result = $._encode_implicit(
      _TagClass.application,
      5,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_Action_Result(value, elGetter);
}


/* eslint-enable */
