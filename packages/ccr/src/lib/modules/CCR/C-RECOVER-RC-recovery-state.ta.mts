/* eslint-disable */
import {
  ENUMERATED,
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


export enum _enum_for_C_RECOVER_RC_recovery_state {
  commit = 0,
  ready = 1,
  done = 2,
  unknown = 3,
  retry_later = 5,
}


/**
 * @summary C_RECOVER_RC_recovery_state
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-RECOVER-RC-recovery-state ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type C_RECOVER_RC_recovery_state =
  | _enum_for_C_RECOVER_RC_recovery_state
  | ENUMERATED;


/**
 * @summary C_RECOVER_RC_recovery_state_commit
 * @constant
 * @type {number}
 */
export const C_RECOVER_RC_recovery_state_commit: C_RECOVER_RC_recovery_state = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary commit
 * @constant
 * @type {number}
 */
export const commit: C_RECOVER_RC_recovery_state = C_RECOVER_RC_recovery_state_commit; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_RECOVER_RC_recovery_state_ready
 * @constant
 * @type {number}
 */
export const C_RECOVER_RC_recovery_state_ready: C_RECOVER_RC_recovery_state = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary ready
 * @constant
 * @type {number}
 */
export const ready: C_RECOVER_RC_recovery_state = C_RECOVER_RC_recovery_state_ready; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_RECOVER_RC_recovery_state_done
 * @constant
 * @type {number}
 */
export const C_RECOVER_RC_recovery_state_done: C_RECOVER_RC_recovery_state = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary done
 * @constant
 * @type {number}
 */
export const done: C_RECOVER_RC_recovery_state = C_RECOVER_RC_recovery_state_done; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_RECOVER_RC_recovery_state_unknown
 * @constant
 * @type {number}
 */
export const C_RECOVER_RC_recovery_state_unknown: C_RECOVER_RC_recovery_state = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: C_RECOVER_RC_recovery_state = C_RECOVER_RC_recovery_state_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_RECOVER_RC_recovery_state_retry_later
 * @constant
 * @type {number}
 */
export const C_RECOVER_RC_recovery_state_retry_later: C_RECOVER_RC_recovery_state = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary retry_later
 * @constant
 * @type {number}
 */
export const retry_later: C_RECOVER_RC_recovery_state = C_RECOVER_RC_recovery_state_retry_later; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_C_RECOVER_RC_recovery_state = $._decodeEnumerated;




export const _encode_C_RECOVER_RC_recovery_state = $._encodeEnumerated;


/* eslint-enable */
