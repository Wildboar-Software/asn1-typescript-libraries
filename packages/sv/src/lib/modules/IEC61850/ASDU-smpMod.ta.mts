/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ASDU_smpMod
 * @description
 *
 * How `ASDU.smpRate` relates to the nominal period. Optional
 * on an ASDU. `0` counts samples per nominal period, `1`
 * counts samples per second, and `2` counts seconds per
 * sample.
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
 * @description
 *
 * `smpRate` is the number of samples per nominal period
 * (`0`).
 *
 * @constant
 * @type {number}
 */
export
const ASDU_smpMod_samplesPerNormalPeriod: 0 = 0 satisfies ASDU_smpMod; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_samplesPerNormalPeriod
 * @description
 *
 * Same value as `ASDU_smpMod_samplesPerNormalPeriod`.
 *
 * @constant
 * @type {number}
 */
export
const samplesPerNormalPeriod: 0 = ASDU_smpMod_samplesPerNormalPeriod; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_samplesPerSecond
 * @description
 *
 * `smpRate` is the number of samples per second (`1`).
 *
 * @constant
 * @type {number}
 */
export
const ASDU_smpMod_samplesPerSecond: 1 = 1 satisfies ASDU_smpMod; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_samplesPerSecond
 * @description
 *
 * Same value as `ASDU_smpMod_samplesPerSecond`.
 *
 * @constant
 * @type {number}
 */
export
const samplesPerSecond: 1 = ASDU_smpMod_samplesPerSecond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_secondsPerSample
 * @description
 *
 * `smpRate` is the number of seconds per sample (`2`).
 *
 * @constant
 * @type {number}
 */
export
const ASDU_smpMod_secondsPerSample: 2 = 2 satisfies ASDU_smpMod; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_secondsPerSample
 * @description
 *
 * Same value as `ASDU_smpMod_secondsPerSample`.
 *
 * @constant
 * @type {number}
 */
export
const secondsPerSample: 2 = ASDU_smpMod_secondsPerSample; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ASDU_smpMod: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ASDU_smpMod: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
