/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EpcFormat_fields_Item_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_EpcFormat_fields_Item_result {
    numericPad = 0,
    numeric = 1,
    alpha7bits = 2,
}

/**
 * @summary EpcFormat_fields_Item_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type EpcFormat_fields_Item_result = _enum_for_EpcFormat_fields_Item_result;

/**
 * @summary EpcFormat_fields_Item_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const EpcFormat_fields_Item_result = _enum_for_EpcFormat_fields_Item_result;

/**
 * @summary EpcFormat_fields_Item_result_numericPad
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_numericPad: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numericPad; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numericPad
 * @constant
 * @type {number}
 */
export const numericPad: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numericPad; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EpcFormat_fields_Item_result_numeric
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_numeric: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numeric; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numeric
 * @constant
 * @type {number}
 */
export const numeric: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numeric; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EpcFormat_fields_Item_result_alpha7bits
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_alpha7bits: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.alpha7bits; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alpha7bits
 * @constant
 * @type {number}
 */
export const alpha7bits: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.alpha7bits; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_EpcFormat_fields_Item_result = $._decodeEnumerated;


export const _encode_EpcFormat_fields_Item_result = $._encodeEnumerated;


/* eslint-enable */
