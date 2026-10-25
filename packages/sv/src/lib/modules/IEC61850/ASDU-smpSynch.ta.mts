/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ASDU_smpSynch
 * @description
 *
 * Synchronization of the clock that timestamps sampled-value
 * messages (`ASDU.smpSynch`). 9-2LE requires the field.
 * `0` is no synchronization, `1` is a local clock, and `2`
 * is a global clock.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASDU-smpSynch ::= INTEGER {
 *     none(0),
 *     local(1),
 *     global(2)
 * }
 * ```
 */
export
type ASDU_smpSynch = INTEGER;

/**
 * @summary ASDU_smpSynch_none
 * @description
 *
 * No clock synchronization (`0`).
 *
 * @constant
 * @type {number}
 */
export
const ASDU_smpSynch_none: 0 = 0 satisfies ASDU_smpSynch; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_none
 * @description
 *
 * Same value as `ASDU_smpSynch_none`.
 *
 * @constant
 * @type {number}
 */
export
const none: 0 = ASDU_smpSynch_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_local
 * @description
 *
 * Local clock (`1`).
 *
 * @constant
 * @type {number}
 */
export
const ASDU_smpSynch_local: 1 = 1 satisfies ASDU_smpSynch; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_local
 * @description
 *
 * Same value as `ASDU_smpSynch_local`.
 *
 * @constant
 * @type {number}
 */
export
const local: 1 = ASDU_smpSynch_local; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_global
 * @description
 *
 * Global clock (`2`).
 *
 * @constant
 * @type {number}
 */
export
const ASDU_smpSynch_global: 2 = 2 satisfies ASDU_smpSynch; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_global
 * @description
 *
 * Same value as `ASDU_smpSynch_global`.
 *
 * @constant
 * @type {number}
 */
export
const global: 2 = ASDU_smpSynch_global; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ASDU_smpSynch: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ASDU_smpSynch: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
