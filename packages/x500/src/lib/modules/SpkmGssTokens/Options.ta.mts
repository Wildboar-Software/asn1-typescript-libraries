/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Options
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Options  ::=  BIT STRING {
 *   delegation-state(0), mutual-state(1), replay-det-state(2), sequence-state(3),
 *   conf-avail(4), integ-avail(5), target-certif-data-required(6)}
 * ```
 */
export type Options = BIT_STRING;

/**
 * @summary Options_delegation_state
 * @constant
 */
export const Options_delegation_state: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary delegation_state
 * @constant
 */
export const delegation_state: number = Options_delegation_state; /* SHORT_NAMED_BIT */

/**
 * @summary Options_mutual_state
 * @constant
 */
export const Options_mutual_state: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mutual_state
 * @constant
 */
export const mutual_state: number = Options_mutual_state; /* SHORT_NAMED_BIT */

/**
 * @summary Options_replay_det_state
 * @constant
 */
export const Options_replay_det_state: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary replay_det_state
 * @constant
 */
export const replay_det_state: number = Options_replay_det_state; /* SHORT_NAMED_BIT */

/**
 * @summary Options_sequence_state
 * @constant
 */
export const Options_sequence_state: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary sequence_state
 * @constant
 */
export const sequence_state: number = Options_sequence_state; /* SHORT_NAMED_BIT */

/**
 * @summary Options_conf_avail
 * @constant
 */
export const Options_conf_avail: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary conf_avail
 * @constant
 */
export const conf_avail: number = Options_conf_avail; /* SHORT_NAMED_BIT */

/**
 * @summary Options_integ_avail
 * @constant
 */
export const Options_integ_avail: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary integ_avail
 * @constant
 */
export const integ_avail: number = Options_integ_avail; /* SHORT_NAMED_BIT */

/**
 * @summary Options_target_certif_data_required
 * @constant
 */
export const Options_target_certif_data_required: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary target_certif_data_required
 * @constant
 */
export const target_certif_data_required: number = Options_target_certif_data_required; /* SHORT_NAMED_BIT */


export const _decode_Options = $._decodeBitString;


export const _encode_Options = $._encodeBitString;


/* eslint-enable */
