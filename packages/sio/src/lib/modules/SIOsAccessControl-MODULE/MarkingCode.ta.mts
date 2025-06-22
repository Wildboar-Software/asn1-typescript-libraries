/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary MarkingCode
 * @description
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
export const MarkingCode_pageTop: MarkingCode = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageTop
 * @constant
 * @type {number}
 */
export const pageTop: MarkingCode = MarkingCode_pageTop; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageBottom
 * @constant
 * @type {number}
 */
export const MarkingCode_pageBottom: MarkingCode = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageBottom
 * @constant
 * @type {number}
 */
export const pageBottom: MarkingCode = MarkingCode_pageBottom; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageTopBottom
 * @constant
 * @type {number}
 */
export const MarkingCode_pageTopBottom: MarkingCode = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_pageTopBottom
 * @constant
 * @type {number}
 */
export const pageTopBottom: MarkingCode = MarkingCode_pageTopBottom; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentEnd
 * @constant
 * @type {number}
 */
export const MarkingCode_documentEnd: MarkingCode = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentEnd
 * @constant
 * @type {number}
 */
export const documentEnd: MarkingCode = MarkingCode_documentEnd; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noNameDisplay
 * @constant
 * @type {number}
 */
export const MarkingCode_noNameDisplay: MarkingCode = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noNameDisplay
 * @constant
 * @type {number}
 */
export const noNameDisplay: MarkingCode = MarkingCode_noNameDisplay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noMarkingDisplay
 * @constant
 * @type {number}
 */
export const MarkingCode_noMarkingDisplay: MarkingCode = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_noMarkingDisplay
 * @constant
 * @type {number}
 */
export const noMarkingDisplay: MarkingCode = MarkingCode_noMarkingDisplay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_unused
 * @constant
 * @type {number}
 */
export const MarkingCode_unused: MarkingCode = 7; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_unused
 * @constant
 * @type {number}
 */
export const unused: MarkingCode = MarkingCode_unused; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentStart
 * @constant
 * @type {number}
 */
export const MarkingCode_documentStart: MarkingCode = 8; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_documentStart
 * @constant
 * @type {number}
 */
export const documentStart: MarkingCode = MarkingCode_documentStart; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_suppressClassName
 * @constant
 * @type {number}
 */
export const MarkingCode_suppressClassName: MarkingCode = 9; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary MarkingCode_suppressClassName
 * @constant
 * @type {number}
 */
export const suppressClassName: MarkingCode = MarkingCode_suppressClassName; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_MarkingCode = $._decodeInteger;




export const _encode_MarkingCode = $._encodeInteger;


/* eslint-enable */
