/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessRestrictions_Item_accessType
 * @description
 * 
 * Kind of access a restriction applies to. REC.1 names any, search, present,
 * specific-elements, extended-services, and by-database, and does not define
 * those values further. ANSI/NISO Z39.50-2003 §3.2.10.3.1 lists access
 * challenges separately and does not map them onto these integers.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRestrictions-Item-accessType ::= INTEGER {
 *     any (0),
 *     search (1),
 *     present (2),
 *     specific-elements (3),
 *     extended-services (4),
 *     by-database (5)
 * }
 * ```
 */
export
type AccessRestrictions_Item_accessType = INTEGER;

/**
 * @summary AccessRestrictions_Item_accessType_any_
 * @description
 * `any` (0). Kind of access named by REC.1. The standard does not define this
 * enumerant further.
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_any_: AccessRestrictions_Item_accessType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_any_
 * @description
 * `any` (0). REC.1 does not define this kind further.
 * @constant
 * @type {number}
 */
export
const any_: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_any_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_search
 * @description
 * `search` (1). Kind of access named by REC.1. The standard does not define
 * this enumerant further.
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_search: AccessRestrictions_Item_accessType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_search
 * @description
 * `search` (1). REC.1 does not define this kind further.
 * @constant
 * @type {number}
 */
export
const search: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_search; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_present
 * @description
 * `present` (2). Kind of access named by REC.1. The standard does not define
 * this enumerant further.
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_present: AccessRestrictions_Item_accessType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_present
 * @description
 * `present` (2). REC.1 does not define this kind further.
 * @constant
 * @type {number}
 */
export
const present: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_specific_elements
 * @description
 * `specific-elements` (3). Kind of access named by REC.1. The standard does not
 * define this enumerant further.
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_specific_elements: AccessRestrictions_Item_accessType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_specific_elements
 * @description
 * `specific-elements` (3). REC.1 does not define this kind further.
 * @constant
 * @type {number}
 */
export
const specific_elements: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_specific_elements; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_extended_services
 * @description
 * `extended-services` (4). Kind of access named by REC.1. The standard does not
 * define this enumerant further.
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_extended_services: AccessRestrictions_Item_accessType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_extended_services
 * @description
 * `extended-services` (4). REC.1 does not define this kind further.
 * @constant
 * @type {number}
 */
export
const extended_services: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_extended_services; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_by_database
 * @description
 * `by-database` (5). Kind of access named by REC.1. The standard does not
 * define this enumerant further.
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_by_database: AccessRestrictions_Item_accessType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_by_database
 * @description
 * `by-database` (5). REC.1 does not define this kind further.
 * @constant
 * @type {number}
 */
export
const by_database: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_by_database; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AccessRestrictions_Item_accessType: $.ASN1Decoder<AccessRestrictions_Item_accessType> = $._decodeInteger;
export const _encode_AccessRestrictions_Item_accessType: $.ASN1Encoder<AccessRestrictions_Item_accessType> = $._encodeInteger;


/* eslint-enable */
