/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TroubleReportState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TroubleReportState  ::=  INTEGER {
 *   queued(0), openActive(1), deferred(2), cleared(3), closed(4), disabled(5)
 * }(0..255)
 * ```
 */
export
type TroubleReportState = INTEGER;

/**
 * @summary TroubleReportState_queued
 * @constant
 * @type {number}
 */
export
const TroubleReportState_queued = 0 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_queued
 * @constant
 * @type {number}
 */
export
const queued = TroubleReportState_queued satisfies TroubleReportState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_openActive
 * @constant
 * @type {number}
 */
export
const TroubleReportState_openActive = 1 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_openActive
 * @constant
 * @type {number}
 */
export
const openActive = TroubleReportState_openActive satisfies TroubleReportState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_deferred
 * @constant
 * @type {number}
 */
export
const TroubleReportState_deferred = 2 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_deferred
 * @constant
 * @type {number}
 */
export
const deferred = TroubleReportState_deferred satisfies TroubleReportState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_cleared
 * @constant
 * @type {number}
 */
export
const TroubleReportState_cleared = 3 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_cleared
 * @constant
 * @type {number}
 */
export
const cleared = TroubleReportState_cleared satisfies TroubleReportState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_closed
 * @constant
 * @type {number}
 */
export
const TroubleReportState_closed = 4 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_closed
 * @constant
 * @type {number}
 */
export
const closed = TroubleReportState_closed satisfies TroubleReportState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_disabled
 * @constant
 * @type {number}
 */
export
const TroubleReportState_disabled = 5 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportState_disabled
 * @constant
 * @type {number}
 */
export
const disabled = TroubleReportState_disabled satisfies TroubleReportState; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TroubleReportState = $._decodeInteger;
export const _encode_TroubleReportState = $._encodeInteger;


/* eslint-enable */
