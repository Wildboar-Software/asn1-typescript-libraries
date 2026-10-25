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
export const MarkingCode_pageTop: 1 = 1 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageTop
 * @constant
 * @type {number}
 */
export const pageTop: 1 = MarkingCode_pageTop; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageBottom
 * @constant
 * @type {number}
 */
export const MarkingCode_pageBottom: 2 = 2 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageBottom
 * @constant
 * @type {number}
 */
export const pageBottom: 2 = MarkingCode_pageBottom; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageTopBottom
 * @constant
 * @type {number}
 */
export const MarkingCode_pageTopBottom: 3 = 3 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageTopBottom
 * @constant
 * @type {number}
 */
export const pageTopBottom: 3 = MarkingCode_pageTopBottom; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentEnd
 * @constant
 * @type {number}
 */
export const MarkingCode_documentEnd: 4 = 4 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentEnd
 * @constant
 * @type {number}
 */
export const documentEnd: 4 = MarkingCode_documentEnd; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noNameDisplay
 * @constant
 * @type {number}
 */
export const MarkingCode_noNameDisplay: 5 = 5 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noNameDisplay
 * @constant
 * @type {number}
 */
export const noNameDisplay: 5 = MarkingCode_noNameDisplay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noMarkingDisplay
 * @constant
 * @type {number}
 */
export const MarkingCode_noMarkingDisplay: 6 = 6 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noMarkingDisplay
 * @constant
 * @type {number}
 */
export const noMarkingDisplay: 6 = MarkingCode_noMarkingDisplay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_unused
 * @constant
 * @type {number}
 */
export const MarkingCode_unused: 7 = 7 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_unused
 * @constant
 * @type {number}
 */
export const unused: 7 = MarkingCode_unused; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentStart
 * @constant
 * @type {number}
 */
export const MarkingCode_documentStart: 8 = 8 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentStart
 * @constant
 * @type {number}
 */
export const documentStart: 8 = MarkingCode_documentStart; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_suppressClassName
 * @constant
 * @type {number}
 */
export const MarkingCode_suppressClassName: 9 = 9 satisfies MarkingCode; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_suppressClassName
 * @constant
 * @type {number}
 */
export const suppressClassName: 9 = MarkingCode_suppressClassName; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_MarkingCode: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_MarkingCode: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
