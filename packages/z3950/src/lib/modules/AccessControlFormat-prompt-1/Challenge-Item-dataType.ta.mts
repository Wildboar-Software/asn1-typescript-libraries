/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Challenge_Item_dataType
 * @description
 * 
 * Kind of data the server wants the client to prompt for (ASN1.9.1 comment 5).
 * The only further rule is the date example: prompt for something date-like.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Challenge-Item-dataType ::= INTEGER {
 *     integer (1),
 *     date (2),
 *     float (3),
 *     alphaNumeric (4),
 *     url-urn (5),
 *     boolean (6)
 * }
 * ```
 */
export
type Challenge_Item_dataType = INTEGER;

/**
 * @summary Challenge_Item_dataType_integer
 * @description
 * 
 * Integer data. ASN1.9.1 names it and gives no further rule.
 * 
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_integer = 1 satisfies Challenge_Item_dataType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_integer
 * @description
 * 
 * Integer data. ASN1.9.1 names it and gives no further rule.
 * 
 * @constant
 * @type {number}
 */
export
const integer = Challenge_Item_dataType_integer satisfies Challenge_Item_dataType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_date
 * @description
 * 
 * A date. The client should prompt for something date-like (ASN1.9.1 comment
 * 5).
 * 
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_date = 2 satisfies Challenge_Item_dataType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_date
 * @description
 * 
 * A date. The client should prompt for something date-like (ASN1.9.1 comment
 * 5).
 * 
 * @constant
 * @type {number}
 */
export
const date = Challenge_Item_dataType_date satisfies Challenge_Item_dataType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_float
 * @description
 * 
 * Floating-point data. ASN1.9.1 names it and gives no further rule.
 * 
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_float = 3 satisfies Challenge_Item_dataType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_float
 * @description
 * 
 * Floating-point data. ASN1.9.1 names it and gives no further rule.
 * 
 * @constant
 * @type {number}
 */
export
const float = Challenge_Item_dataType_float satisfies Challenge_Item_dataType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_alphaNumeric
 * @description
 * 
 * Alphanumeric data. ASN1.9.1 names it and gives no further rule.
 * 
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_alphaNumeric = 4 satisfies Challenge_Item_dataType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_alphaNumeric
 * @description
 * 
 * Alphanumeric data. ASN1.9.1 names it and gives no further rule.
 * 
 * @constant
 * @type {number}
 */
export
const alphaNumeric = Challenge_Item_dataType_alphaNumeric satisfies Challenge_Item_dataType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_url_urn
 * @description
 * 
 * A URL or URN. ASN1.9.1 names it and gives no further rule.
 * 
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_url_urn = 5 satisfies Challenge_Item_dataType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_url_urn
 * @description
 * 
 * A URL or URN. ASN1.9.1 names it and gives no further rule.
 * 
 * @constant
 * @type {number}
 */
export
const url_urn = Challenge_Item_dataType_url_urn satisfies Challenge_Item_dataType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_boolean_
 * @description
 * 
 * A boolean. ASN1.9.1 names it and gives no further rule.
 * 
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_boolean_ = 6 satisfies Challenge_Item_dataType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_boolean_
 * @description
 * 
 * A boolean. ASN1.9.1 names it and gives no further rule.
 * 
 * @constant
 * @type {number}
 */
export
const boolean_ = Challenge_Item_dataType_boolean_ satisfies Challenge_Item_dataType; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Challenge_Item_dataType: $.ASN1Decoder<Challenge_Item_dataType> = $._decodeInteger;
export const _encode_Challenge_Item_dataType: $.ASN1Encoder<Challenge_Item_dataType> = $._encodeInteger;


/* eslint-enable */
