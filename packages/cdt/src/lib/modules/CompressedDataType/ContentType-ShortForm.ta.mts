/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContentType_ShortForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentType-ShortForm  ::=  INTEGER  {
 *     unidentified (0),
 *     external (1),           -- identified by the object-identifier 
 *                             -- of the EXTERNAL content 
 *     p1 (2),
 *     p3 (3),
 *     p7 (4) }
 * ```
 */
export
type ContentType_ShortForm = INTEGER;

/**
 * @summary ContentType_ShortForm_unidentified
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_unidentified: ContentType_ShortForm = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_unidentified
 * @constant
 * @type {number}
 */
export
const unidentified: ContentType_ShortForm = ContentType_ShortForm_unidentified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_external
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_external: ContentType_ShortForm = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_external
 * @constant
 * @type {number}
 */
export
const external: ContentType_ShortForm = ContentType_ShortForm_external; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p1
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_p1: ContentType_ShortForm = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p1
 * @constant
 * @type {number}
 */
export
const p1: ContentType_ShortForm = ContentType_ShortForm_p1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p3
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_p3: ContentType_ShortForm = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p3
 * @constant
 * @type {number}
 */
export
const p3: ContentType_ShortForm = ContentType_ShortForm_p3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p7
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_p7: ContentType_ShortForm = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p7
 * @constant
 * @type {number}
 */
export
const p7: ContentType_ShortForm = ContentType_ShortForm_p7; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ContentType_ShortForm = $._decodeInteger;
export const _encode_ContentType_ShortForm = $._encodeInteger;


/* eslint-enable */
