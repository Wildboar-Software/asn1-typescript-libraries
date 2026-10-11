/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LogotypeImageType
 * @description
 *
 * Whether an image is grayscale or color. `color` (1) is the default
 * for {@link LogotypeImageInfo.type_}.
 *
 * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
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
 * Grayscale image (`grayScale(0)`).
 *
 * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
 * @constant
 */
export
const LogotypeImageType_grayScale: LogotypeImageType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Alias of {@link LogotypeImageType_grayScale}.
 * @constant
 */
export
const grayScale: LogotypeImageType = LogotypeImageType_grayScale; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * Color image (`color(1)`). Default for {@link LogotypeImageInfo.type_}
 * when that component is omitted.
 *
 * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
 * @constant
 */
export
const LogotypeImageType_color: LogotypeImageType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Alias of {@link LogotypeImageType_color}.
 * @constant
 */
export
const color: LogotypeImageType = LogotypeImageType_color; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LogotypeImageType = $._decodeInteger;
export const _encode_LogotypeImageType = $._encodeInteger;


/* eslint-enable */
