/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IconType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IconType  ::=  INTEGER {jpg(0), png(1)}
 * ```
 */
export
type IconType = INTEGER;

/**
 * @summary IconType_jpg
 * @constant
 * @type {number}
 */
export
const IconType_jpg: IconType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IconType_jpg
 * @constant
 * @type {number}
 */
export
const jpg: IconType = IconType_jpg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IconType_png
 * @constant
 * @type {number}
 */
export
const IconType_png: IconType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IconType_png
 * @constant
 * @type {number}
 */
export
const png: IconType = IconType_png; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_IconType = $._decodeInteger;
export const _encode_IconType = $._encodeInteger;


/* eslint-enable */
