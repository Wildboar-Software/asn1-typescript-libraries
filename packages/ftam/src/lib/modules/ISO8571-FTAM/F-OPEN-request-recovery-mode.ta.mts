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
 * @summary F_OPEN_request_recovery_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-OPEN-request-recovery-mode ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type F_OPEN_request_recovery_mode = INTEGER;


/**
 * @summary F_OPEN_request_recovery_mode_none
 * @constant
 * @type {number}
 */
export const F_OPEN_request_recovery_mode_none: F_OPEN_request_recovery_mode = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary F_OPEN_request_recovery_mode_none
 * @constant
 * @type {number}
 */
export const none: F_OPEN_request_recovery_mode = F_OPEN_request_recovery_mode_none; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary F_OPEN_request_recovery_mode_at_start_of_file
 * @constant
 * @type {number}
 */
export const F_OPEN_request_recovery_mode_at_start_of_file: F_OPEN_request_recovery_mode = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary F_OPEN_request_recovery_mode_at_start_of_file
 * @constant
 * @type {number}
 */
export const at_start_of_file: F_OPEN_request_recovery_mode = F_OPEN_request_recovery_mode_at_start_of_file; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary F_OPEN_request_recovery_mode_at_any_active_Checkpoint
 * @constant
 * @type {number}
 */
export const F_OPEN_request_recovery_mode_at_any_active_Checkpoint: F_OPEN_request_recovery_mode = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary F_OPEN_request_recovery_mode_at_any_active_Checkpoint
 * @constant
 * @type {number}
 */
export const at_any_active_Checkpoint: F_OPEN_request_recovery_mode = F_OPEN_request_recovery_mode_at_any_active_Checkpoint; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_F_OPEN_request_recovery_mode = $._decodeInteger;




export const _encode_F_OPEN_request_recovery_mode = $._encodeInteger;


/* eslint-enable */
