/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Permissions_Item_allowableFunctions_Item
 * @description
 * 
 * One operation another user may perform on a task package (ANSI/NISO
 * Z39.50-2003 §3.2.9.3). Invoke allows that user to reference the package from
 * another extended service, such as a periodic query that uses a saved query.
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
 * @description
 * 
 * The user may delete the task package (ANSI/NISO Z39.50-2003 §3.2.9.3).
 * 
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_delete_: Permissions_Item_allowableFunctions_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_delete_
 * @description
 * 
 * Short name for `Permissions_Item_allowableFunctions_Item_delete_`. May delete
 * the package (§3.2.9.3).
 * 
 * @constant
 * @type {number}
 */
export
const delete_: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_delete_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyContents
 * @description
 * 
 * The user may modify the package contents (ANSI/NISO Z39.50-2003 §3.2.9.3).
 * 
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_modifyContents: Permissions_Item_allowableFunctions_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyContents
 * @description
 * 
 * Short name for `Permissions_Item_allowableFunctions_Item_modifyContents`. May
 * modify contents (§3.2.9.3).
 * 
 * @constant
 * @type {number}
 */
export
const modifyContents: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_modifyContents; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyPermissions
 * @description
 * 
 * The user may replace the permissions list (ANSI/NISO Z39.50-2003 §3.2.9.3).
 * 
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_modifyPermissions: Permissions_Item_allowableFunctions_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyPermissions
 * @description
 * 
 * Short name for `Permissions_Item_allowableFunctions_Item_modifyPermissions`.
 * May change permissions (§3.2.9.3).
 * 
 * @constant
 * @type {number}
 */
export
const modifyPermissions: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_modifyPermissions; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_present
 * @description
 * 
 * The user may retrieve the package (ANSI/NISO Z39.50-2003 §3.2.9.3).
 * 
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_present: Permissions_Item_allowableFunctions_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_present
 * @description
 * 
 * Short name for `Permissions_Item_allowableFunctions_Item_present`. May
 * retrieve the package (§3.2.9.3).
 * 
 * @constant
 * @type {number}
 */
export
const present: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_invoke
 * @description
 * 
 * The user may invoke the package from another extended service (ANSI/NISO
 * Z39.50-2003 §3.2.9.3).
 * 
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_invoke: Permissions_Item_allowableFunctions_Item = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_invoke
 * @description
 * 
 * Short name for `Permissions_Item_allowableFunctions_Item_invoke`. May invoke
 * the package (§3.2.9.3).
 * 
 * @constant
 * @type {number}
 */
export
const invoke: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_invoke; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Permissions_Item_allowableFunctions_Item = $._decodeInteger;
export const _encode_Permissions_Item_allowableFunctions_Item = $._encodeInteger;


/* eslint-enable */
