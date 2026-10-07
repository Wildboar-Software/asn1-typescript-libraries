/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ASDU_smpSynch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASDU-smpSynch ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ASDU_smpSynch = INTEGER;

/**
 * @summary ASDU_smpSynch_none
 * @constant
 * @type {number}
 */
export
const ASDU_smpSynch_none: ASDU_smpSynch = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_none
 * @constant
 * @type {number}
 */
export
const none: ASDU_smpSynch = ASDU_smpSynch_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_local
 * @constant
 * @type {number}
 */
export
const ASDU_smpSynch_local: ASDU_smpSynch = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_local
 * @constant
 * @type {number}
 */
export
const local: ASDU_smpSynch = ASDU_smpSynch_local; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_global
 * @constant
 * @type {number}
 */
export
const ASDU_smpSynch_global: ASDU_smpSynch = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_global
 * @constant
 * @type {number}
 */
export
const global: ASDU_smpSynch = ASDU_smpSynch_global; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ASDU_smpSynch = $._decodeInteger;
export const _encode_ASDU_smpSynch = $._encodeInteger;


/* eslint-enable */
