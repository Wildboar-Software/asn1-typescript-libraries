/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessRuleValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRuleValue  ::=  INTEGER {
 *     wavar           (0),
 *     waci            (1),
 *     waca            (2),
 *     nsac            (3),
 *     wavar-and-waci  (4),
 *     wavar-and-waca  (5),
 *     no-access       (6)
 * }
 * ```
 */
export
type AccessRuleValue = INTEGER;

/**
 * @summary AccessRuleValue_wavar
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_wavar: AccessRuleValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar
 * @constant
 * @type {number}
 */
export
const wavar: AccessRuleValue = AccessRuleValue_wavar; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waci
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_waci: AccessRuleValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waci
 * @constant
 * @type {number}
 */
export
const waci: AccessRuleValue = AccessRuleValue_waci; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waca
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_waca: AccessRuleValue = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waca
 * @constant
 * @type {number}
 */
export
const waca: AccessRuleValue = AccessRuleValue_waca; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_nsac
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_nsac: AccessRuleValue = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_nsac
 * @constant
 * @type {number}
 */
export
const nsac: AccessRuleValue = AccessRuleValue_nsac; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waci
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_wavar_and_waci: AccessRuleValue = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waci
 * @constant
 * @type {number}
 */
export
const wavar_and_waci: AccessRuleValue = AccessRuleValue_wavar_and_waci; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waca
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_wavar_and_waca: AccessRuleValue = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waca
 * @constant
 * @type {number}
 */
export
const wavar_and_waca: AccessRuleValue = AccessRuleValue_wavar_and_waca; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_no_access
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_no_access: AccessRuleValue = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_no_access
 * @constant
 * @type {number}
 */
export
const no_access: AccessRuleValue = AccessRuleValue_no_access; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AccessRuleValue = $._decodeInteger;
export const _encode_AccessRuleValue = $._encodeInteger;


/* eslint-enable */
