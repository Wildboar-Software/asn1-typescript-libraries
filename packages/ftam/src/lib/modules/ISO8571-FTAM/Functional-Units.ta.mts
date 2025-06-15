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
 * @summary Functional_Units
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Functional-Units  ::=  [4] IMPLICIT BIT STRING {
 *   read(2), write(3), file-access(4), limited-file-management(5),
 *   enhanced-file-management(6), grouping(7), fadu-locking(8), recovery(9),
 *   restart-data-transfer(10), limited-filestore-management(11),
 *   enhanced-filestore-management(12), object-manipulation(13),
 *   group-manipulation(14), consecutive-access(15), concurrent-access(16)
 * }
 * ```
 */
export type Functional_Units = BIT_STRING;


/**
 * @summary Functional_Units_read
 * @constant
 */
export const Functional_Units_read: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary read
 * @constant
 */
export const read: number = Functional_Units_read; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_write
 * @constant
 */
export const Functional_Units_write: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary write
 * @constant
 */
export const write: number = Functional_Units_write; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_file_access
 * @constant
 */
export const Functional_Units_file_access: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary file_access
 * @constant
 */
export const file_access: number = Functional_Units_file_access; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_limited_file_management
 * @constant
 */
export const Functional_Units_limited_file_management: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary limited_file_management
 * @constant
 */
export const limited_file_management: number = Functional_Units_limited_file_management; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_enhanced_file_management
 * @constant
 */
export const Functional_Units_enhanced_file_management: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary enhanced_file_management
 * @constant
 */
export const enhanced_file_management: number = Functional_Units_enhanced_file_management; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_grouping
 * @constant
 */
export const Functional_Units_grouping: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary grouping
 * @constant
 */
export const grouping: number = Functional_Units_grouping; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_fadu_locking
 * @constant
 */
export const Functional_Units_fadu_locking: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary fadu_locking
 * @constant
 */
export const fadu_locking: number = Functional_Units_fadu_locking; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_recovery
 * @constant
 */
export const Functional_Units_recovery: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary recovery
 * @constant
 */
export const recovery: number = Functional_Units_recovery; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_restart_data_transfer
 * @constant
 */
export const Functional_Units_restart_data_transfer: number = 10; /* LONG_NAMED_BIT */


/**
 * @summary restart_data_transfer
 * @constant
 */
export const restart_data_transfer: number = Functional_Units_restart_data_transfer; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_limited_filestore_management
 * @constant
 */
export const Functional_Units_limited_filestore_management: number = 11; /* LONG_NAMED_BIT */


/**
 * @summary limited_filestore_management
 * @constant
 */
export const limited_filestore_management: number = Functional_Units_limited_filestore_management; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_enhanced_filestore_management
 * @constant
 */
export const Functional_Units_enhanced_filestore_management: number = 12; /* LONG_NAMED_BIT */


/**
 * @summary enhanced_filestore_management
 * @constant
 */
export const enhanced_filestore_management: number = Functional_Units_enhanced_filestore_management; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_object_manipulation
 * @constant
 */
export const Functional_Units_object_manipulation: number = 13; /* LONG_NAMED_BIT */


/**
 * @summary object_manipulation
 * @constant
 */
export const object_manipulation: number = Functional_Units_object_manipulation; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_group_manipulation
 * @constant
 */
export const Functional_Units_group_manipulation: number = 14; /* LONG_NAMED_BIT */


/**
 * @summary group_manipulation
 * @constant
 */
export const group_manipulation: number = Functional_Units_group_manipulation; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_consecutive_access
 * @constant
 */
export const Functional_Units_consecutive_access: number = 15; /* LONG_NAMED_BIT */


/**
 * @summary consecutive_access
 * @constant
 */
export const consecutive_access: number = Functional_Units_consecutive_access; /* SHORT_NAMED_BIT */


/**
 * @summary Functional_Units_concurrent_access
 * @constant
 */
export const Functional_Units_concurrent_access: number = 16; /* LONG_NAMED_BIT */


/**
 * @summary concurrent_access
 * @constant
 */
export const concurrent_access: number = Functional_Units_concurrent_access; /* SHORT_NAMED_BIT */


let _cached_decoder_for_Functional_Units: $.ASN1Decoder<Functional_Units> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Functional_Units
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Functional_Units} The decoded data structure.
 */
export function _decode_Functional_Units(el: _Element) {
  if (!_cached_decoder_for_Functional_Units) {
    _cached_decoder_for_Functional_Units = $._decode_implicit<Functional_Units>(
      () => $._decodeBitString
    );
  }
  return _cached_decoder_for_Functional_Units(el);
}


let _cached_encoder_for_Functional_Units: $.ASN1Encoder<Functional_Units> | null = null;


/**
 * @summary Encodes a(n) Functional_Units into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Functional_Units, encoded as an ASN.1 Element.
 */
export function _encode_Functional_Units(
  value: Functional_Units,
  elGetter: $.ASN1Encoder<Functional_Units>
) {
  if (!_cached_encoder_for_Functional_Units) {
    _cached_encoder_for_Functional_Units = $._encode_implicit(
      _TagClass.context,
      4,
      () => $._encodeBitString,
      $.BER
    );
  }
  return _cached_encoder_for_Functional_Units(value, elGetter);
}


/* eslint-enable */
