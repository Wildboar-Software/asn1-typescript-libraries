/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary MarkingCode
 * @description
 *
 * Where a marking phrase is physically displayed on the data
 * object. X.841 names the values but does not further define
 * them. ITU-T Rec. X.841 (10/2000)
 * [§6.2.2.6](https://www.itu.int/rec/T-REC-X.841-200010-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MarkingCode  ::=  INTEGER {
 *   pageTop(1), pageBottom(2), pageTopBottom(3), documentEnd(4),
 *   noNameDisplay(5), noMarkingDisplay(6), unused(7), documentStart(8),
 *   suppressClassName(9)}
 * ```
 */
export type MarkingCode = INTEGER;


/**
 * @summary MarkingCode_pageTop
 * @constant
 * @type {number}
 */
export const MarkingCode_pageTop = 1 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageTop
 * @constant
 * @type {number}
 */
export const pageTop = MarkingCode_pageTop; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageBottom
 * @constant
 * @type {number}
 */
export const MarkingCode_pageBottom = 2 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageBottom
 * @constant
 * @type {number}
 */
export const pageBottom = MarkingCode_pageBottom; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageTopBottom
 * @constant
 * @type {number}
 */
export const MarkingCode_pageTopBottom = 3 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageTopBottom
 * @constant
 * @type {number}
 */
export const pageTopBottom = MarkingCode_pageTopBottom; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentEnd
 * @constant
 * @type {number}
 */
export const MarkingCode_documentEnd = 4 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentEnd
 * @constant
 * @type {number}
 */
export const documentEnd = MarkingCode_documentEnd; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noNameDisplay
 * @constant
 * @type {number}
 */
export const MarkingCode_noNameDisplay = 5 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noNameDisplay
 * @constant
 * @type {number}
 */
export const noNameDisplay = MarkingCode_noNameDisplay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noMarkingDisplay
 * @constant
 * @type {number}
 */
export const MarkingCode_noMarkingDisplay = 6 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noMarkingDisplay
 * @constant
 * @type {number}
 */
export const noMarkingDisplay = MarkingCode_noMarkingDisplay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_unused
 * @constant
 * @type {number}
 */
export const MarkingCode_unused = 7 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_unused
 * @constant
 * @type {number}
 */
export const unused = MarkingCode_unused; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentStart
 * @constant
 * @type {number}
 */
export const MarkingCode_documentStart = 8 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentStart
 * @constant
 * @type {number}
 */
export const documentStart = MarkingCode_documentStart; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_suppressClassName
 * @constant
 * @type {number}
 */
export const MarkingCode_suppressClassName = 9 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_suppressClassName
 * @constant
 * @type {number}
 */
export const suppressClassName = MarkingCode_suppressClassName; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_MarkingCode = $._decodeInteger;




export const _encode_MarkingCode = $._encodeInteger;


/* eslint-enable */
