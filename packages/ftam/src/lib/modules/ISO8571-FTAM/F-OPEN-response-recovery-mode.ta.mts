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
 * @summary F_OPEN_response_recovery_mode
 * @description
 *
 * Recovery mode established for the open. Initiator proposes;
 * responder returns that value or a lower one (`none`(0),
 * `at-start-of-file`(1), `at-any-active-checkpoint`(2)). Default
 * `none`. ISO 8571-3:1988 §17.1.2.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-OPEN-response-recovery-mode ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type F_OPEN_response_recovery_mode = INTEGER;


/**
 * @summary F_OPEN_response_recovery_mode_none
 * @description
 *
 * 0: no restart/recovery in this open. ISO 8571-3:1988 §17.1.2.10.
 *
 * @constant
 * @type {number}
 */
export const F_OPEN_response_recovery_mode_none: F_OPEN_response_recovery_mode = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary F_OPEN_response_recovery_mode_none
 * @constant
 * @type {number}
 */
export const none: F_OPEN_response_recovery_mode = F_OPEN_response_recovery_mode_none; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary F_OPEN_response_recovery_mode_at_start_of_file
 * @description
 *
 * 1: resume at start of file. ISO 8571-3:1988 §17.1.2.10.
 *
 * @constant
 * @type {number}
 */
export const F_OPEN_response_recovery_mode_at_start_of_file: F_OPEN_response_recovery_mode = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary F_OPEN_response_recovery_mode_at_start_of_file
 * @constant
 * @type {number}
 */
export const at_start_of_file: F_OPEN_response_recovery_mode = F_OPEN_response_recovery_mode_at_start_of_file; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary F_OPEN_response_recovery_mode_at_any_active_Checkpoint
 * @description
 *
 * 2: resume at any active checkpoint (highest capability).
 * ISO 8571-3:1988 §17.1.2.10.
 *
 * @constant
 * @type {number}
 */
export const F_OPEN_response_recovery_mode_at_any_active_Checkpoint: F_OPEN_response_recovery_mode = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary F_OPEN_response_recovery_mode_at_any_active_Checkpoint
 * @constant
 * @type {number}
 */
export const at_any_active_Checkpoint: F_OPEN_response_recovery_mode = F_OPEN_response_recovery_mode_at_any_active_Checkpoint; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_F_OPEN_response_recovery_mode = $._decodeInteger;




export const _encode_F_OPEN_response_recovery_mode = $._encodeInteger;


/* eslint-enable */
