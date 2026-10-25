/* eslint-disable */
import {
  type ENUMERATED,
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


export const _enum_for_C_RECOVER_RI_recovery_state = {
  commit: 0,
  ready: 1,
  done: 2,
  unknown: 3,
  retry_later: 5,
} as const;

export type _enum_for_C_RECOVER_RI_recovery_state =
  (typeof _enum_for_C_RECOVER_RI_recovery_state)[keyof typeof _enum_for_C_RECOVER_RI_recovery_state];


/**
 * @summary C_RECOVER_RI_recovery_state
 * @description
 *
 * Recovery State on C-RECOVER-RI, taken from atomic action data by
 * the CCR service-user. Enumerants: `commit` (0), `ready` (1),
 * `done` (2), `unknown` (3), `retry-later` (5) — (4) is unused.
 * Service meanings are in X.851; X.852 uses them as state-table
 * events. ITU-T Rec. X.852 (12/97) §7.9.4.1, Table 31, Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-RECOVER-RI-recovery-state ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type C_RECOVER_RI_recovery_state =
  | _enum_for_C_RECOVER_RI_recovery_state
  | ENUMERATED;


/**
 * @summary C_RECOVER_RI_recovery_state_commit
 * @description `commit` (0). State-table event RCV-RI(commit).
 * @constant
 * @type {number}
 */
export const C_RECOVER_RI_recovery_state_commit: 0 = _enum_for_C_RECOVER_RI_recovery_state.commit; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary commit
 * @constant
 * @type {number}
 */
export const commit: 0 = C_RECOVER_RI_recovery_state_commit; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_RECOVER_RI_recovery_state_ready
 * @description `ready` (1). State-table event RCV-RI(ready).
 * @constant
 * @type {number}
 */
export const C_RECOVER_RI_recovery_state_ready: 1 = _enum_for_C_RECOVER_RI_recovery_state.ready; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary ready
 * @constant
 * @type {number}
 */
export const ready: 1 = C_RECOVER_RI_recovery_state_ready; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_RECOVER_RI_recovery_state_done
 * @description `done` (2). ITU-T Rec. X.852 (12/97) Annex A.
 * @constant
 * @type {number}
 */
export const C_RECOVER_RI_recovery_state_done: 2 = _enum_for_C_RECOVER_RI_recovery_state.done; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary done
 * @constant
 * @type {number}
 */
export const done: 2 = C_RECOVER_RI_recovery_state_done; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_RECOVER_RI_recovery_state_unknown
 * @description `unknown` (3). ITU-T Rec. X.852 (12/97) Annex A.
 * @constant
 * @type {number}
 */
export const C_RECOVER_RI_recovery_state_unknown: 3 = _enum_for_C_RECOVER_RI_recovery_state.unknown; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: 3 = C_RECOVER_RI_recovery_state_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_RECOVER_RI_recovery_state_retry_later
 * @description `retry-later` (5). ITU-T Rec. X.852 (12/97) Annex A.
 * @constant
 * @type {number}
 */
export const C_RECOVER_RI_recovery_state_retry_later: 5 = _enum_for_C_RECOVER_RI_recovery_state.retry_later; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary retry_later
 * @constant
 * @type {number}
 */
export const retry_later: 5 = C_RECOVER_RI_recovery_state_retry_later; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_C_RECOVER_RI_recovery_state: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_C_RECOVER_RI_recovery_state: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
