/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LogotypeImageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeImageType  ::=  INTEGER { grayScale(0), color(1) }
 * ```
 */
export
type LogotypeImageType = INTEGER;

/**
 * @summary LogotypeImageType_grayScale
 * @constant
 * @type {number}
 */
export
const LogotypeImageType_grayScale: LogotypeImageType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LogotypeImageType_grayScale
 * @constant
 * @type {number}
 */
export
const grayScale: LogotypeImageType = LogotypeImageType_grayScale; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LogotypeImageType_color
 * @constant
 * @type {number}
 */
export
const LogotypeImageType_color: LogotypeImageType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LogotypeImageType_color
 * @constant
 * @type {number}
 */
export
const color: LogotypeImageType = LogotypeImageType_color; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LogotypeImageType = $._decodeInteger;
export const _encode_LogotypeImageType = $._encodeInteger;


/* eslint-enable */
