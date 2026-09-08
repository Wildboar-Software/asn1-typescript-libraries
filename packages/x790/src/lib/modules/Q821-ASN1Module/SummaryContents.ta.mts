/* eslint-disable */
import {
    BIT_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SummaryContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SummaryContents  ::=  BIT STRING {
 *   includePerceivedSeverity(0), includeAlarmStatus(1), includeProbableCause(2)
 * }
 * ```
 */
export
type SummaryContents = BIT_STRING;

/**
 * @summary SummaryContents_includePerceivedSeverity
 * @constant
 */
export
const SummaryContents_includePerceivedSeverity: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary includePerceivedSeverity
 * @constant
 */
export
const includePerceivedSeverity: number = SummaryContents_includePerceivedSeverity; /* SHORT_NAMED_BIT */

/**
 * @summary SummaryContents_includeAlarmStatus
 * @constant
 */
export
const SummaryContents_includeAlarmStatus: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary includeAlarmStatus
 * @constant
 */
export
const includeAlarmStatus: number = SummaryContents_includeAlarmStatus; /* SHORT_NAMED_BIT */

/**
 * @summary SummaryContents_includeProbableCause
 * @constant
 */
export
const SummaryContents_includeProbableCause: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary includeProbableCause
 * @constant
 */
export
const includeProbableCause: number = SummaryContents_includeProbableCause; /* SHORT_NAMED_BIT */
export const _decode_SummaryContents = $._decodeBitString;
export const _encode_SummaryContents = $._encodeBitString;


/* eslint-enable */
