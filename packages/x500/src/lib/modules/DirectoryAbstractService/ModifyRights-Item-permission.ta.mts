/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ModifyRights_Item_permission
 * @description
 *
 * On `entry`: `remove` = RemoveEntry, `rename` = ModifyDN without
 * `newSuperior`, `move` = ModifyDN with `newSuperior` and unchanged RDN
 * (new superior ACI ignored). On `attribute`/`value`: `add`/`remove` =
 * ModifyEntry.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRights-Item-permission ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifyRights_Item_permission = BIT_STRING;

/**
 * @summary ModifyRights_Item_permission_add
 * @description
 *
 * On `attribute`/`value`: ModifyEntry add.
 *
 * @constant
 */
export const ModifyRights_Item_permission_add: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary add
 * @description
 *
 * On `attribute`/`value`: ModifyEntry add.
 *
 * @constant
 */
export const add: number = ModifyRights_Item_permission_add; /* SHORT_NAMED_BIT */

/**
 * @summary ModifyRights_Item_permission_remove
 * @description
 *
 * On `entry`: RemoveEntry. On `attribute`/`value`: ModifyEntry remove.
 *
 * @constant
 */
export const ModifyRights_Item_permission_remove: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary remove
 * @description
 *
 * On `entry`: RemoveEntry. On `attribute`/`value`: ModifyEntry remove.
 *
 * @constant
 */
export const remove: number = ModifyRights_Item_permission_remove; /* SHORT_NAMED_BIT */

/**
 * @summary ModifyRights_Item_permission_rename
 * @description
 *
 * On `entry`: ModifyDN without `newSuperior`.
 *
 * @constant
 */
export const ModifyRights_Item_permission_rename: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary rename
 * @description
 *
 * On `entry`: ModifyDN without `newSuperior`.
 *
 * @constant
 */
export const rename: number = ModifyRights_Item_permission_rename; /* SHORT_NAMED_BIT */

/**
 * @summary ModifyRights_Item_permission_move
 * @description
 *
 * On `entry`: ModifyDN with `newSuperior` and unchanged RDN; new superior
 * ACI ignored.
 *
 * @constant
 */
export const ModifyRights_Item_permission_move: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary move
 * @description
 *
 * On `entry`: ModifyDN with `newSuperior` and unchanged RDN; new superior
 * ACI ignored.
 *
 * @constant
 */
export const move: number = ModifyRights_Item_permission_move; /* SHORT_NAMED_BIT */


export const _decode_ModifyRights_Item_permission = $._decodeBitString;


export const _encode_ModifyRights_Item_permission = $._encodeBitString;


/* eslint-enable */
