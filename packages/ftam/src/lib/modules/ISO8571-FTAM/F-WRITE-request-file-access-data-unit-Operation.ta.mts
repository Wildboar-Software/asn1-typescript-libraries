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
 * @summary F_WRITE_request_file_access_data_unit_Operation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-WRITE-request-file-access-data-unit-Operation ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type F_WRITE_request_file_access_data_unit_Operation = INTEGER;


/**
 * @summary F_WRITE_request_file_access_data_unit_Operation_insert
 * @constant
 * @type {number}
 */
export const F_WRITE_request_file_access_data_unit_Operation_insert: F_WRITE_request_file_access_data_unit_Operation = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary F_WRITE_request_file_access_data_unit_Operation_insert
 * @constant
 * @type {number}
 */
export const insert: F_WRITE_request_file_access_data_unit_Operation = F_WRITE_request_file_access_data_unit_Operation_insert; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary F_WRITE_request_file_access_data_unit_Operation_replace
 * @constant
 * @type {number}
 */
export const F_WRITE_request_file_access_data_unit_Operation_replace: F_WRITE_request_file_access_data_unit_Operation = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary F_WRITE_request_file_access_data_unit_Operation_replace
 * @constant
 * @type {number}
 */
export const replace: F_WRITE_request_file_access_data_unit_Operation = F_WRITE_request_file_access_data_unit_Operation_replace; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary F_WRITE_request_file_access_data_unit_Operation_extend
 * @constant
 * @type {number}
 */
export const F_WRITE_request_file_access_data_unit_Operation_extend: F_WRITE_request_file_access_data_unit_Operation = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary F_WRITE_request_file_access_data_unit_Operation_extend
 * @constant
 * @type {number}
 */
export const extend: F_WRITE_request_file_access_data_unit_Operation = F_WRITE_request_file_access_data_unit_Operation_extend; /* SHORT_NAMED_INTEGER_VALUE */


let _cached_decoder_for_F_WRITE_request_file_access_data_unit_Operation: $.ASN1Decoder<F_WRITE_request_file_access_data_unit_Operation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_WRITE_request_file_access_data_unit_Operation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_WRITE_request_file_access_data_unit_Operation} The decoded data structure.
 */
export function _decode_F_WRITE_request_file_access_data_unit_Operation(
  el: _Element
) {
  if (!_cached_decoder_for_F_WRITE_request_file_access_data_unit_Operation) {
    _cached_decoder_for_F_WRITE_request_file_access_data_unit_Operation =
      $._decodeInteger;
  }
  return _cached_decoder_for_F_WRITE_request_file_access_data_unit_Operation(
    el
  );
}


let _cached_encoder_for_F_WRITE_request_file_access_data_unit_Operation: $.ASN1Encoder<F_WRITE_request_file_access_data_unit_Operation> | null = null;


/**
 * @summary Encodes a(n) F_WRITE_request_file_access_data_unit_Operation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_WRITE_request_file_access_data_unit_Operation, encoded as an ASN.1 Element.
 */
export function _encode_F_WRITE_request_file_access_data_unit_Operation(
  value: F_WRITE_request_file_access_data_unit_Operation,
  elGetter: $.ASN1Encoder<F_WRITE_request_file_access_data_unit_Operation>
) {
  if (!_cached_encoder_for_F_WRITE_request_file_access_data_unit_Operation) {
    _cached_encoder_for_F_WRITE_request_file_access_data_unit_Operation =
      $._encodeInteger;
  }
  return _cached_encoder_for_F_WRITE_request_file_access_data_unit_Operation(
    value,
    elGetter
  );
}


/* eslint-enable */
