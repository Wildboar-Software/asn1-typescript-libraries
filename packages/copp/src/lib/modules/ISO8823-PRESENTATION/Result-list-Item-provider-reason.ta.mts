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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


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


/**
 * @summary Result_list_Item_provider_reason_local_limit_on_DCS_exceeded
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_local_limit_on_DCS_exceeded: Result_list_Item_provider_reason = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Result_list_Item_provider_reason_local_limit_on_DCS_exceeded
 * @constant
 * @type {number}
 */
export const local_limit_on_DCS_exceeded: Result_list_Item_provider_reason = Result_list_Item_provider_reason_local_limit_on_DCS_exceeded; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Result_list_Item_provider_reason = $._decodeInteger;




export const _encode_Result_list_Item_provider_reason = $._encodeInteger;


/* eslint-enable */
