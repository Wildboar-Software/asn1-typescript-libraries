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
 * @summary State_Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * State-Result  ::=  [APPLICATION 21] IMPLICIT INTEGER {success(0), failure(1)
 * }
 * ```
 */
export type State_Result = INTEGER;


/**
 * @summary State_Result_success
 * @constant
 * @type {number}
 */
export const State_Result_success: State_Result = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary State_Result_success
 * @constant
 * @type {number}
 */
export const success: State_Result = State_Result_success; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary State_Result_failure
 * @constant
 * @type {number}
 */
export const State_Result_failure: State_Result = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary State_Result_failure
 * @constant
 * @type {number}
 */
export const failure: State_Result = State_Result_failure; /* SHORT_NAMED_INTEGER_VALUE */


let _cached_decoder_for_State_Result: $.ASN1Decoder<State_Result> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) State_Result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {State_Result} The decoded data structure.
 */
export function _decode_State_Result(el: _Element) {
  if (!_cached_decoder_for_State_Result) {
    _cached_decoder_for_State_Result = $._decode_implicit<State_Result>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_State_Result(el);
}


let _cached_encoder_for_State_Result: $.ASN1Encoder<State_Result> | null = null;


/**
 * @summary Encodes a(n) State_Result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The State_Result, encoded as an ASN.1 Element.
 */
export function _encode_State_Result(
  value: State_Result,
  elGetter: $.ASN1Encoder<State_Result>
) {
  if (!_cached_encoder_for_State_Result) {
    _cached_encoder_for_State_Result = $._encode_implicit(
      _TagClass.application,
      21,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_State_Result(value, elGetter);
}


/* eslint-enable */
