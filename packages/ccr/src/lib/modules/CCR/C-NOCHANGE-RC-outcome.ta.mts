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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_C_NOCHANGE_RC_outcome {
  not_determined = 0,
  committed = 1,
  rolled_back = 2,
  no_change = 3,
}


/**
 * @summary C_NOCHANGE_RC_outcome
 * @description
 *
 * Outcome on C-NOCHANGE-RC. Default `not-determined`. `no-change` is
 * used when two C-NOCHANGE-RI collide (X.852 §7.7.7.2). Meanings of
 * `committed` and `rolled-back` are those of the CCR service
 * (X.851). ITU-T Rec. X.852 (12/97) §7.7.6, Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-NOCHANGE-RC-outcome ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type C_NOCHANGE_RC_outcome =
  | _enum_for_C_NOCHANGE_RC_outcome
  | ENUMERATED;


/**
 * @summary C_NOCHANGE_RC_outcome_not_determined
 * @description Default; outcome not determined (X.852 Annex A).
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RC_outcome_not_determined: C_NOCHANGE_RC_outcome = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary not_determined
 * @constant
 * @type {number}
 */
export const not_determined: C_NOCHANGE_RC_outcome = C_NOCHANGE_RC_outcome_not_determined; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_NOCHANGE_RC_outcome_committed
 * @description Atomic action committed (service meaning in X.851).
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RC_outcome_committed: C_NOCHANGE_RC_outcome = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary committed
 * @constant
 * @type {number}
 */
export const committed: C_NOCHANGE_RC_outcome = C_NOCHANGE_RC_outcome_committed; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_NOCHANGE_RC_outcome_rolled_back
 * @description Atomic action rolled back (service meaning in X.851).
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RC_outcome_rolled_back: C_NOCHANGE_RC_outcome = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary rolled_back
 * @constant
 * @type {number}
 */
export const rolled_back: C_NOCHANGE_RC_outcome = C_NOCHANGE_RC_outcome_rolled_back; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_NOCHANGE_RC_outcome_no_change
 * @description Mutual C-NOCHANGE-RI collision (X.852 §7.7.7.2).
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RC_outcome_no_change: C_NOCHANGE_RC_outcome = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary no_change
 * @constant
 * @type {number}
 */
export const no_change: C_NOCHANGE_RC_outcome = C_NOCHANGE_RC_outcome_no_change; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_C_NOCHANGE_RC_outcome = $._decodeEnumerated;




export const _encode_C_NOCHANGE_RC_outcome = $._encodeEnumerated;


/* eslint-enable */
