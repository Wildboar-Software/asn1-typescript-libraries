/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
export const Result_list_Item_provider_reason_reason_not_specified: 0 = 0 satisfies Result_list_Item_provider_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Result_list_Item_provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const reason_not_specified: 0 = Result_list_Item_provider_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Result_list_Item_provider_reason_abstract_syntax_not_supported
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_abstract_syntax_not_supported: 1 = 1 satisfies Result_list_Item_provider_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Result_list_Item_provider_reason_abstract_syntax_not_supported
 * @constant
 * @type {number}
 */
export const abstract_syntax_not_supported: 1 = Result_list_Item_provider_reason_abstract_syntax_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported: 2 = 2 satisfies Result_list_Item_provider_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported
 * @constant
 * @type {number}
 */
export const proposed_transfer_syntaxes_not_supported: 2 = Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Result_list_Item_provider_reason: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_Result_list_Item_provider_reason: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
