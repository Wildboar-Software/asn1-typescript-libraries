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

/* START_OF_SYMBOL_DEFINITION Service_Class */
/**
 * @summary Service_Class
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Service-Class  ::=  [3] IMPLICIT BIT STRING {
 *   unconstrained-class(0), management-class(1), transfer-class(2),
 *   transfer-and-management-class(3), access-class(4)}
 * ```
 */
export type Service_Class = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Service_Class */

/* START_OF_SYMBOL_DEFINITION Service_Class_unconstrained_class */
/**
 * @summary Service_Class_unconstrained_class
 * @constant
 */
export const Service_Class_unconstrained_class: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Service_Class_unconstrained_class */

/* START_OF_SYMBOL_DEFINITION unconstrained_class */
/**
 * @summary unconstrained_class
 * @constant
 */
export const unconstrained_class: number = Service_Class_unconstrained_class; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unconstrained_class */

/* START_OF_SYMBOL_DEFINITION Service_Class_management_class */
/**
 * @summary Service_Class_management_class
 * @constant
 */
export const Service_Class_management_class: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Service_Class_management_class */

/* START_OF_SYMBOL_DEFINITION management_class */
/**
 * @summary management_class
 * @constant
 */
export const management_class: number = Service_Class_management_class; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION management_class */

/* START_OF_SYMBOL_DEFINITION Service_Class_transfer_class */
/**
 * @summary Service_Class_transfer_class
 * @constant
 */
export const Service_Class_transfer_class: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Service_Class_transfer_class */

/* START_OF_SYMBOL_DEFINITION transfer_class */
/**
 * @summary transfer_class
 * @constant
 */
export const transfer_class: number = Service_Class_transfer_class; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION transfer_class */

/* START_OF_SYMBOL_DEFINITION Service_Class_transfer_and_management_class */
/**
 * @summary Service_Class_transfer_and_management_class
 * @constant
 */
export const Service_Class_transfer_and_management_class: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Service_Class_transfer_and_management_class */

/* START_OF_SYMBOL_DEFINITION transfer_and_management_class */
/**
 * @summary transfer_and_management_class
 * @constant
 */
export const transfer_and_management_class: number = Service_Class_transfer_and_management_class; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION transfer_and_management_class */

/* START_OF_SYMBOL_DEFINITION Service_Class_access_class */
/**
 * @summary Service_Class_access_class
 * @constant
 */
export const Service_Class_access_class: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Service_Class_access_class */

/* START_OF_SYMBOL_DEFINITION access_class */
/**
 * @summary access_class
 * @constant
 */
export const access_class: number = Service_Class_access_class; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION access_class */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Service_Class */
let _cached_decoder_for_Service_Class: $.ASN1Decoder<Service_Class> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Service_Class */

/* START_OF_SYMBOL_DEFINITION _decode_Service_Class */
/**
 * @summary Decodes an ASN.1 element into a(n) Service_Class
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Service_Class} The decoded data structure.
 */
export function _decode_Service_Class(el: _Element) {
  if (!_cached_decoder_for_Service_Class) {
    _cached_decoder_for_Service_Class = $._decode_implicit<Service_Class>(
      () => $._decodeBitString
    );
  }
  return _cached_decoder_for_Service_Class(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Service_Class */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Service_Class */
let _cached_encoder_for_Service_Class: $.ASN1Encoder<Service_Class> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Service_Class */

/* START_OF_SYMBOL_DEFINITION _encode_Service_Class */
/**
 * @summary Encodes a(n) Service_Class into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service_Class, encoded as an ASN.1 Element.
 */
export function _encode_Service_Class(
  value: Service_Class,
  elGetter: $.ASN1Encoder<Service_Class>
) {
  if (!_cached_encoder_for_Service_Class) {
    _cached_encoder_for_Service_Class = $._encode_implicit(
      _TagClass.context,
      3,
      () => $._encodeBitString,
      $.BER
    );
  }
  return _cached_encoder_for_Service_Class(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Service_Class */

/* eslint-enable */
