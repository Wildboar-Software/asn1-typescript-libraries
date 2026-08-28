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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary F_OPEN_request_processing_mode
 * @description
 *
 * Subset of the current access request for this open: `f-read`(0),
 * `f-insert`(1), `f-replace`(2), `f-extend`(3), `f-erase`(4). Sets
 * current processing mode. Default `{f-read}`. Compared with the
 * contents-type constraint set; unavailable mode or potential
 * constraint violation fails open. ISO 8571-3:1988 §17.1.2.3.
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
 * @description
 *
 * Bit 0: read (and locate). ISO 8571-3:1988 §17.1.2.3;
 * ISO 8571-2:1988 §10.5.
 *
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
 * @description
 *
 * Bit 1: insert. ISO 8571-3:1988 §17.1.2.3; ISO 8571-2:1988 §11.3.
 *
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
 * @description
 *
 * Bit 2: replace. ISO 8571-3:1988 §17.1.2.3; ISO 8571-2:1988 §11.4.
 *
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
 * @description
 *
 * Bit 3: extend. ISO 8571-3:1988 §17.1.2.3; ISO 8571-2:1988 §11.5.
 *
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
 * @description
 *
 * Bit 4: erase. ISO 8571-3:1988 §17.1.2.3; ISO 8571-2:1988 §11.6.
 *
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
