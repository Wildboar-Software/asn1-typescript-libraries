/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Permissions_Item_allowableFunctions_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Permissions-Item-allowableFunctions-Item ::= INTEGER {
 *     delete (1),
 *     modifyContents (2),
 *     modifyPermissions (3),
 *     present (4),
 *     invoke (5)
 * }
 * ```
 */
export
type Permissions_Item_allowableFunctions_Item = INTEGER;

/**
 * @summary Permissions_Item_allowableFunctions_Item_delete_
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_delete_: Permissions_Item_allowableFunctions_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_delete_
 * @constant
 * @type {number}
 */
export
const delete_: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_delete_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyContents
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_modifyContents: Permissions_Item_allowableFunctions_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyContents
 * @constant
 * @type {number}
 */
export
const modifyContents: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_modifyContents; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyPermissions
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_modifyPermissions: Permissions_Item_allowableFunctions_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyPermissions
 * @constant
 * @type {number}
 */
export
const modifyPermissions: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_modifyPermissions; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_present
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_present: Permissions_Item_allowableFunctions_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_present
 * @constant
 * @type {number}
 */
export
const present: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_invoke
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_invoke: Permissions_Item_allowableFunctions_Item = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_invoke
 * @constant
 * @type {number}
 */
export
const invoke: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_invoke; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Permissions_Item_allowableFunctions_Item = $._decodeInteger;
export const _encode_Permissions_Item_allowableFunctions_Item = $._encodeInteger;


/* eslint-enable */
