/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Permissions_Item_allowableFunctions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Permissions-Item-allowableFunctions ::= INTEGER {
 *     delete             (1),
 *     modifyContents     (2),
 *     modifyPermissions  (3),
 *     present            (4),
 *     invoke             (5)
 * }
 * ```
 */
export
type Permissions_Item_allowableFunctions = INTEGER;

/**
 * @summary Permissions_Item_allowableFunctions_delete_
 * @constant
 */
export
const Permissions_Item_allowableFunctions_delete_: Permissions_Item_allowableFunctions = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_delete_
 * @constant
 */
export
const delete_: Permissions_Item_allowableFunctions = Permissions_Item_allowableFunctions_delete_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_modifyContents
 * @constant
 */
export
const Permissions_Item_allowableFunctions_modifyContents: Permissions_Item_allowableFunctions = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_modifyContents
 * @constant
 */
export
const modifyContents: Permissions_Item_allowableFunctions = Permissions_Item_allowableFunctions_modifyContents; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_modifyPermissions
 * @constant
 */
export
const Permissions_Item_allowableFunctions_modifyPermissions: Permissions_Item_allowableFunctions = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_modifyPermissions
 * @constant
 */
export
const modifyPermissions: Permissions_Item_allowableFunctions = Permissions_Item_allowableFunctions_modifyPermissions; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_present
 * @constant
 */
export
const Permissions_Item_allowableFunctions_present: Permissions_Item_allowableFunctions = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_present
 * @constant
 */
export
const present: Permissions_Item_allowableFunctions = Permissions_Item_allowableFunctions_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_invoke
 * @constant
 */
export
const Permissions_Item_allowableFunctions_invoke: Permissions_Item_allowableFunctions = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_invoke
 * @constant
 */
export
const invoke: Permissions_Item_allowableFunctions = Permissions_Item_allowableFunctions_invoke; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Permissions_Item_allowableFunctions = $._decodeInteger;
export const _encode_Permissions_Item_allowableFunctions = $._encodeInteger;

/* eslint-enable */
