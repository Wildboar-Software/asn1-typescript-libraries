/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessRestrictions_Item_accessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRestrictions-Item-accessType ::= INTEGER {
 *     any                (0),
 *     search             (1),
 *     present            (2),
 *     specific-elements  (3),
 *     extended-services  (4),
 *     by-database        (5)
 * }
 * ```
 */
export
type AccessRestrictions_Item_accessType = INTEGER;

/**
 * @summary AccessRestrictions_Item_accessType_any_
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_any_: AccessRestrictions_Item_accessType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_any_
 * @constant
 * @type {number}
 */
export
const any_: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_any_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_search
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_search: AccessRestrictions_Item_accessType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_search
 * @constant
 * @type {number}
 */
export
const search: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_search; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_present
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_present: AccessRestrictions_Item_accessType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_present
 * @constant
 * @type {number}
 */
export
const present: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_specific_elements
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_specific_elements: AccessRestrictions_Item_accessType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_specific_elements
 * @constant
 * @type {number}
 */
export
const specific_elements: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_specific_elements; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_extended_services
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_extended_services: AccessRestrictions_Item_accessType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_extended_services
 * @constant
 * @type {number}
 */
export
const extended_services: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_extended_services; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_by_database
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_by_database: AccessRestrictions_Item_accessType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_by_database
 * @constant
 * @type {number}
 */
export
const by_database: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_by_database; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AccessRestrictions_Item_accessType = $._decodeInteger;
export const _encode_AccessRestrictions_Item_accessType = $._encodeInteger;


/* eslint-enable */
