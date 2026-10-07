/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ASDU_smpMod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASDU-smpMod ::= INTEGER {
 *     samplesPerNormalPeriod(0),
 *     samplesPerSecond(1),
 *     secondsPerSample(2)
 * }
 * ```
 */
export
type ASDU_smpMod = INTEGER;

/**
 * @summary ASDU_smpMod_samplesPerNormalPeriod
 * @constant
 * @type {number}
 */
export
const ASDU_smpMod_samplesPerNormalPeriod: ASDU_smpMod = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_samplesPerNormalPeriod
 * @constant
 * @type {number}
 */
export
const samplesPerNormalPeriod: ASDU_smpMod = ASDU_smpMod_samplesPerNormalPeriod; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_samplesPerSecond
 * @constant
 * @type {number}
 */
export
const ASDU_smpMod_samplesPerSecond: ASDU_smpMod = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_samplesPerSecond
 * @constant
 * @type {number}
 */
export
const samplesPerSecond: ASDU_smpMod = ASDU_smpMod_samplesPerSecond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_secondsPerSample
 * @constant
 * @type {number}
 */
export
const ASDU_smpMod_secondsPerSample: ASDU_smpMod = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_secondsPerSample
 * @constant
 * @type {number}
 */
export
const secondsPerSample: ASDU_smpMod = ASDU_smpMod_secondsPerSample; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ASDU_smpMod = $._decodeInteger;
export const _encode_ASDU_smpMod = $._encodeInteger;


/* eslint-enable */
