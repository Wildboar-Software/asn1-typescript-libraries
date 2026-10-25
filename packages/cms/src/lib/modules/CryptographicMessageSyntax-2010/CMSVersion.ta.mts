/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CMSVersion
 * @description
 *
 * Integer syntax version number used throughout CMS content types
 * ([RFC 5652 §10.2.5](https://datatracker.ietf.org/doc/html/rfc5652#section-10.2.5)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMSVersion  ::=  INTEGER  { v0(0), v1(1), v2(2), v3(3), v4(4), v5(5) }
 * ```
 */
export type CMSVersion = INTEGER;


/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const CMSVersion_v0: 0 = 0 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const v0: 0 = CMSVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v1
 * @constant
 * @type {number}
 */
export const CMSVersion_v1: 1 = 1 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v1
 * @constant
 * @type {number}
 */
export const v1: 1 = CMSVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v2
 * @constant
 * @type {number}
 */
export const CMSVersion_v2: 2 = 2 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v2
 * @constant
 * @type {number}
 */
export const v2: 2 = CMSVersion_v2; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v3
 * @constant
 * @type {number}
 */
export const CMSVersion_v3: 3 = 3 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v3
 * @constant
 * @type {number}
 */
export const v3: 3 = CMSVersion_v3; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v4
 * @constant
 * @type {number}
 */
export const CMSVersion_v4: 4 = 4 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v4
 * @constant
 * @type {number}
 */
export const v4: 4 = CMSVersion_v4; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v5
 * @constant
 * @type {number}
 */
export const CMSVersion_v5: 5 = 5 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v5
 * @constant
 * @type {number}
 */
export const v5: 5 = CMSVersion_v5; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_CMSVersion: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_CMSVersion: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
