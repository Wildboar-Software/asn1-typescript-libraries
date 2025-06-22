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
 * @summary Request_Operation_Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Request-Operation-Result  ::=  [APPLICATION 31] IMPLICIT INTEGER {
 *   summary(0), fiii-list(1)}
 * ```
 */
export type Request_Operation_Result = INTEGER;


/**
 * @summary Request_Operation_Result_summary
 * @constant
 * @type {number}
 */
export const Request_Operation_Result_summary: Request_Operation_Result = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Request_Operation_Result_summary
 * @constant
 * @type {number}
 */
export const summary: Request_Operation_Result = Request_Operation_Result_summary; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Request_Operation_Result_fiii_list
 * @constant
 * @type {number}
 */
export const Request_Operation_Result_fiii_list: Request_Operation_Result = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Request_Operation_Result_fiii_list
 * @constant
 * @type {number}
 */
export const fiii_list: Request_Operation_Result = Request_Operation_Result_fiii_list; /* SHORT_NAMED_INTEGER_VALUE */


let _cached_decoder_for_Request_Operation_Result: $.ASN1Decoder<Request_Operation_Result> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Request_Operation_Result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Request_Operation_Result} The decoded data structure.
 */
export function _decode_Request_Operation_Result(el: _Element) {
  if (!_cached_decoder_for_Request_Operation_Result) {
    _cached_decoder_for_Request_Operation_Result = $._decode_implicit<Request_Operation_Result>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_Request_Operation_Result(el);
}


let _cached_encoder_for_Request_Operation_Result: $.ASN1Encoder<Request_Operation_Result> | null = null;


/**
 * @summary Encodes a(n) Request_Operation_Result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request_Operation_Result, encoded as an ASN.1 Element.
 */
export function _encode_Request_Operation_Result(
  value: Request_Operation_Result,
  elGetter: $.ASN1Encoder<Request_Operation_Result>
) {
  if (!_cached_encoder_for_Request_Operation_Result) {
    _cached_encoder_for_Request_Operation_Result = $._encode_implicit(
      _TagClass.application,
      31,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_Request_Operation_Result(value, elGetter);
}


/* eslint-enable */
