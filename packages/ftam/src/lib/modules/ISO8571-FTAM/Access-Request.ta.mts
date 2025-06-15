/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary Access_Request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Request  ::=  [APPLICATION 3] IMPLICIT BIT STRING {
 *   read(0), insert(1), replace(2), extend(3), erase(4), read-attribute(5),
 *   change-attribute(6), delete-Object(7)}
 * ```
 */
export type Access_Request = BIT_STRING;


/**
 * @summary Access_Request_read
 * @constant
 */
export const Access_Request_read: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary read
 * @constant
 */
export const read: number = Access_Request_read; /* SHORT_NAMED_BIT */


/**
 * @summary Access_Request_insert
 * @constant
 */
export const Access_Request_insert: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary insert
 * @constant
 */
export const insert: number = Access_Request_insert; /* SHORT_NAMED_BIT */


/**
 * @summary Access_Request_replace
 * @constant
 */
export const Access_Request_replace: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary replace
 * @constant
 */
export const replace: number = Access_Request_replace; /* SHORT_NAMED_BIT */


/**
 * @summary Access_Request_extend
 * @constant
 */
export const Access_Request_extend: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary extend
 * @constant
 */
export const extend: number = Access_Request_extend; /* SHORT_NAMED_BIT */


/**
 * @summary Access_Request_erase
 * @constant
 */
export const Access_Request_erase: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary erase
 * @constant
 */
export const erase: number = Access_Request_erase; /* SHORT_NAMED_BIT */


/**
 * @summary Access_Request_read_attribute
 * @constant
 */
export const Access_Request_read_attribute: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary read_attribute
 * @constant
 */
export const read_attribute: number = Access_Request_read_attribute; /* SHORT_NAMED_BIT */


/**
 * @summary Access_Request_change_attribute
 * @constant
 */
export const Access_Request_change_attribute: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary change_attribute
 * @constant
 */
export const change_attribute: number = Access_Request_change_attribute; /* SHORT_NAMED_BIT */


/**
 * @summary Access_Request_delete_Object
 * @constant
 */
export const Access_Request_delete_Object: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary delete_Object
 * @constant
 */
export const delete_Object: number = Access_Request_delete_Object; /* SHORT_NAMED_BIT */


let _cached_decoder_for_Access_Request: $.ASN1Decoder<Access_Request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Access_Request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Request} The decoded data structure.
 */
export function _decode_Access_Request(el: _Element) {
  if (!_cached_decoder_for_Access_Request) {
    _cached_decoder_for_Access_Request = $._decode_implicit<Access_Request>(
      () => $._decodeBitString
    );
  }
  return _cached_decoder_for_Access_Request(el);
}


let _cached_encoder_for_Access_Request: $.ASN1Encoder<Access_Request> | null = null;


/**
 * @summary Encodes a(n) Access_Request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Request, encoded as an ASN.1 Element.
 */
export function _encode_Access_Request(
  value: Access_Request,
  elGetter: $.ASN1Encoder<Access_Request>
) {
  if (!_cached_encoder_for_Access_Request) {
    _cached_encoder_for_Access_Request = $._encode_implicit(
      _TagClass.application,
      3,
      () => $._encodeBitString,
      $.BER
    );
  }
  return _cached_encoder_for_Access_Request(value, elGetter);
}


/* eslint-enable */
