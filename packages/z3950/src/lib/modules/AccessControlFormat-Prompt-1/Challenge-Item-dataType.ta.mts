/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Challenge_Item_dataType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Challenge-Item-dataType ::= INTEGER {
 *     integer         (1),
 *     date            (2),
 *     float           (3),
 *     alphaNumeric    (4),
 *     url-urn         (5),
 *     boolean         (6)
 * }
 * ```
 */
export
type Challenge_Item_dataType = INTEGER;

/**
 * @summary Challenge_Item_dataType_integer
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_integer: Challenge_Item_dataType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_integer
 * @constant
 * @type {number}
 */
export
const integer: Challenge_Item_dataType = Challenge_Item_dataType_integer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_date
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_date: Challenge_Item_dataType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_date
 * @constant
 * @type {number}
 */
export
const date: Challenge_Item_dataType = Challenge_Item_dataType_date; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_float
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_float: Challenge_Item_dataType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_float
 * @constant
 * @type {number}
 */
export
const float: Challenge_Item_dataType = Challenge_Item_dataType_float; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_alphaNumeric
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_alphaNumeric: Challenge_Item_dataType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_alphaNumeric
 * @constant
 * @type {number}
 */
export
const alphaNumeric: Challenge_Item_dataType = Challenge_Item_dataType_alphaNumeric; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_url_urn
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_url_urn: Challenge_Item_dataType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_url_urn
 * @constant
 * @type {number}
 */
export
const url_urn: Challenge_Item_dataType = Challenge_Item_dataType_url_urn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_boolean_
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_boolean_: Challenge_Item_dataType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_boolean_
 * @constant
 * @type {number}
 */
export
const boolean_: Challenge_Item_dataType = Challenge_Item_dataType_boolean_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Challenge_Item_dataType = $._decodeInteger;
export const _encode_Challenge_Item_dataType = $._encodeInteger;


/* eslint-enable */
