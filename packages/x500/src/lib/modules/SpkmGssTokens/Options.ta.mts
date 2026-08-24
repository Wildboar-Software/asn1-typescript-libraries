/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Options
 * @description
 *
 * GSS context flags. Bits 0–5 match RFC 1508; bit 6 is SPKM-specific.
 * `replay-det-state` / `sequence-state` apply to per-message tokens, not
 * context establishment. Bit 6 is ignored for SPKM-2 unilateral (no
 * `SPKM-REP-TI`).
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
 * @description
 *
 * Bit 0. Delegated credentials are available to the target.
 * @constant
 */
export const Options_delegation_state: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary delegation_state
 * @description
 *
 * Bit 0. Delegated credentials are available to the target.
 * @constant
 */
export const delegation_state: number = Options_delegation_state; /* SHORT_NAMED_BIT */

/**
 * @summary Options_mutual_state
 * @description
 *
 * Bit 1. Set when the initiator wants mutual authentication (`SPKM-REP-TI`,
 * and for SPKM-1 also `SPKM-REP-IT`). Unilateral use is discouraged.
 * @constant
 */
export const Options_mutual_state: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mutual_state
 * @description
 *
 * Bit 1. Set when the initiator wants mutual authentication (`SPKM-REP-TI`,
 * and for SPKM-1 also `SPKM-REP-IT`). Unilateral use is discouraged.
 * @constant
 */
export const mutual_state: number = Options_mutual_state; /* SHORT_NAMED_BIT */

/**
 * @summary Options_replay_det_state
 * @description
 *
 * Bit 2. Replay detection for per-message tokens (via `SeqNum`), not for
 * context establishment.
 * @constant
 */
export const Options_replay_det_state: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary replay_det_state
 * @description
 *
 * Bit 2. Replay detection for per-message tokens (via `SeqNum`), not for
 * context establishment.
 * @constant
 */
export const replay_det_state: number = Options_replay_det_state; /* SHORT_NAMED_BIT */

/**
 * @summary Options_sequence_state
 * @description
 *
 * Bit 3. Out-of-sequence detection for per-message tokens during the
 * context.
 * @constant
 */
export const Options_sequence_state: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary sequence_state
 * @description
 *
 * Bit 3. Out-of-sequence detection for per-message tokens during the
 * context.
 * @constant
 */
export const sequence_state: number = Options_sequence_state; /* SHORT_NAMED_BIT */

/**
 * @summary Options_conf_avail
 * @description
 *
 * Bit 4. Confidentiality (`gss_wrap`) is available over this context.
 * @constant
 */
export const Options_conf_avail: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary conf_avail
 * @description
 *
 * Bit 4. Confidentiality (`gss_wrap`) is available over this context.
 * @constant
 */
export const conf_avail: number = Options_conf_avail; /* SHORT_NAMED_BIT */

/**
 * @summary Options_integ_avail
 * @description
 *
 * Bit 5. Integrity (`gss_getMIC` / wrap checksum) is available over this
 * context.
 * @constant
 */
export const Options_integ_avail: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary integ_avail
 * @description
 *
 * Bit 5. Integrity (`gss_getMIC` / wrap checksum) is available over this
 * context.
 * @constant
 */
export const integ_avail: number = Options_integ_avail; /* SHORT_NAMED_BIT */

/**
 * @summary Options_target_certif_data_required
 * @description
 *
 * Bit 6. Initiator wants the target's certs in `SPKM-REP-TI`. Ignored by
 * both sides for SPKM-2 unilateral (no `SPKM-REP-TI`).
 * @constant
 */
export const Options_target_certif_data_required: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary target_certif_data_required
 * @description
 *
 * Bit 6. Initiator wants the target's certs in `SPKM-REP-TI`. Ignored by
 * both sides for SPKM-2 unilateral (no `SPKM-REP-TI`).
 * @constant
 */
export const target_certif_data_required: number = Options_target_certif_data_required; /* SHORT_NAMED_BIT */


export const _decode_Options = $._decodeBitString;


export const _encode_Options = $._encodeBitString;


/* eslint-enable */
