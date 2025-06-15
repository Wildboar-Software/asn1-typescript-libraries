/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary Result_list_Item_provider_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result-list-Item-provider-reason ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Result_list_Item_provider_reason = INTEGER;

/**
 * @summary Result_list_Item_provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_reason_not_specified: Result_list_Item_provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Result_list_Item_provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const reason_not_specified: Result_list_Item_provider_reason = Result_list_Item_provider_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Result_list_Item_provider_reason_abstract_syntax_not_supported
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_abstract_syntax_not_supported: Result_list_Item_provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Result_list_Item_provider_reason_abstract_syntax_not_supported
 * @constant
 * @type {number}
 */
export const abstract_syntax_not_supported: Result_list_Item_provider_reason = Result_list_Item_provider_reason_abstract_syntax_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported: Result_list_Item_provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported
 * @constant
 * @type {number}
 */
export const proposed_transfer_syntaxes_not_supported: Result_list_Item_provider_reason = Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Result_list_Item_provider_reason = $._decodeInteger;


export const _encode_Result_list_Item_provider_reason = $._encodeInteger;


/* eslint-enable */
