/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ModifyRights_Item_permission */
/**
 * @summary ModifyRights_Item_permission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRights-Item-permission ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifyRights_Item_permission = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ModifyRights_Item_permission */

/* START_OF_SYMBOL_DEFINITION ModifyRights_Item_permission_add */
/**
 * @summary ModifyRights_Item_permission_add
 * @constant
 */
export const ModifyRights_Item_permission_add: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ModifyRights_Item_permission_add */

/* START_OF_SYMBOL_DEFINITION add */
/**
 * @summary add
 * @constant
 */
export const add: number = ModifyRights_Item_permission_add; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION add */

/* START_OF_SYMBOL_DEFINITION ModifyRights_Item_permission_remove */
/**
 * @summary ModifyRights_Item_permission_remove
 * @constant
 */
export const ModifyRights_Item_permission_remove: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ModifyRights_Item_permission_remove */

/* START_OF_SYMBOL_DEFINITION remove */
/**
 * @summary remove
 * @constant
 */
export const remove: number = ModifyRights_Item_permission_remove; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION remove */

/* START_OF_SYMBOL_DEFINITION ModifyRights_Item_permission_rename */
/**
 * @summary ModifyRights_Item_permission_rename
 * @constant
 */
export const ModifyRights_Item_permission_rename: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ModifyRights_Item_permission_rename */

/* START_OF_SYMBOL_DEFINITION rename */
/**
 * @summary rename
 * @constant
 */
export const rename: number = ModifyRights_Item_permission_rename; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION rename */

/* START_OF_SYMBOL_DEFINITION ModifyRights_Item_permission_move */
/**
 * @summary ModifyRights_Item_permission_move
 * @constant
 */
export const ModifyRights_Item_permission_move: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ModifyRights_Item_permission_move */

/* START_OF_SYMBOL_DEFINITION move */
/**
 * @summary move
 * @constant
 */
export const move: number = ModifyRights_Item_permission_move; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION move */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyRights_Item_permission */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyRights_Item_permission */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyRights_Item_permission */
export const _decode_ModifyRights_Item_permission = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_ModifyRights_Item_permission */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyRights_Item_permission */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyRights_Item_permission */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyRights_Item_permission */
export const _encode_ModifyRights_Item_permission = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_ModifyRights_Item_permission */

/* eslint-enable */
