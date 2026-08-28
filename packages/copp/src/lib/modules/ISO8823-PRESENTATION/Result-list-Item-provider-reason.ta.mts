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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Result_list_Item_provider_reason
 * @description
 *
 * Why the PPM refused a proposed context (X.226 §6.2.3.5, §6.5.3.1).
 * Present only when that item's result is `provider-rejection`.
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
 * @description No further diagnostic.
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
 * @description
 *
 * Abstract syntax requirements not supported (connect: X.226 §6.2.3.5)
 * / abstract syntax not supported (alter-context: X.226 §6.5.3.1).
 *
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
 * @description None of the proposed transfer syntaxes is supported.
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
 * @description Local limit on DCS size exceeded.
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
