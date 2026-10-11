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
 * Coding of the icon embedded in Profile Metadata. JPG or PNG. The image is 64
 * by 64 pixels and at most 1024 octets, and `icon` is present only when
 * `iconType` is present. A higher-resolution icon is fetched separately from an
 * HRI server (SGP.22 v3.1 §4.4.3 and §5.12.1); that function is HTTP, not this
 * type. §5.5.3.
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
 * @description
 * 
 * JPEG icon, 64 by 64 pixels, at most 1024 octets. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const IconType_jpg: IconType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IconType_jpg
 * @description
 * 
 * JPEG icon, 64 by 64 pixels, at most 1024 octets. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const jpg: IconType = IconType_jpg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IconType_png
 * @description
 * 
 * PNG icon, 64 by 64 pixels, at most 1024 octets. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const IconType_png: IconType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IconType_png
 * @description
 * 
 * PNG icon, 64 by 64 pixels, at most 1024 octets. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const png: IconType = IconType_png; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_IconType = $._decodeInteger;
export const _encode_IconType = $._encodeInteger;


/* eslint-enable */
