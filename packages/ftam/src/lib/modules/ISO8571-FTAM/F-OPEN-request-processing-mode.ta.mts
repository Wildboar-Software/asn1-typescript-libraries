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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary F_OPEN_request_processing_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-OPEN-request-processing-mode ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type F_OPEN_request_processing_mode = BIT_STRING;


/**
 * @summary F_OPEN_request_processing_mode_f_read
 * @constant
 */
export const F_OPEN_request_processing_mode_f_read: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary f_read
 * @constant
 */
export const f_read: number = F_OPEN_request_processing_mode_f_read; /* SHORT_NAMED_BIT */


/**
 * @summary F_OPEN_request_processing_mode_f_insert
 * @constant
 */
export const F_OPEN_request_processing_mode_f_insert: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary f_insert
 * @constant
 */
export const f_insert: number = F_OPEN_request_processing_mode_f_insert; /* SHORT_NAMED_BIT */


/**
 * @summary F_OPEN_request_processing_mode_f_replace
 * @constant
 */
export const F_OPEN_request_processing_mode_f_replace: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary f_replace
 * @constant
 */
export const f_replace: number = F_OPEN_request_processing_mode_f_replace; /* SHORT_NAMED_BIT */


/**
 * @summary F_OPEN_request_processing_mode_f_extend
 * @constant
 */
export const F_OPEN_request_processing_mode_f_extend: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary f_extend
 * @constant
 */
export const f_extend: number = F_OPEN_request_processing_mode_f_extend; /* SHORT_NAMED_BIT */


/**
 * @summary F_OPEN_request_processing_mode_f_erase
 * @constant
 */
export const F_OPEN_request_processing_mode_f_erase: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary f_erase
 * @constant
 */
export const f_erase: number = F_OPEN_request_processing_mode_f_erase; /* SHORT_NAMED_BIT */




export const _decode_F_OPEN_request_processing_mode = $._decodeBitString;




export const _encode_F_OPEN_request_processing_mode = $._encodeBitString;


/* eslint-enable */
