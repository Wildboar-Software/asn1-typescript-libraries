/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EpcFormat_fields_Item_result
 * @description
 *
 * How to convert the bit field. DEFAULT numericPad(0).
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
 * How to convert the bit field. DEFAULT numericPad(0).
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
 * How to convert the bit field. DEFAULT numericPad(0).
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
 * @description
 *
 * Unsigned int to numeric string; pad with '0' to `characters` width.
 * `characters` alternative of charField shall be taken. DEFAULT.
 *
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_numericPad =
    EpcFormat_fields_Item_result.numericPad; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numericPad
 * @description
 *
 * Unsigned int to numeric string; pad with '0' to `characters` width.
 * `characters` alternative of charField shall be taken. DEFAULT.
 *
 * @constant
 * @type {number}
 */
export const numericPad =
    EpcFormat_fields_Item_result.numericPad; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EpcFormat_fields_Item_result_numeric
 * @description
 *
 * Unsigned int; no leading zeros; all-zero bits ⇒ single '0'.
 *
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_numeric =
    EpcFormat_fields_Item_result.numeric; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numeric
 * @description
 *
 * Unsigned int; no leading zeros; all-zero bits ⇒ single '0'.
 *
 * @constant
 * @type {number}
 */
export const numeric =
    EpcFormat_fields_Item_result.numeric; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EpcFormat_fields_Item_result_alpha7bits
 * @description
 *
 * 7-bit subfields as ASCII.
 *
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_alpha7bits =
    EpcFormat_fields_Item_result.alpha7bits; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alpha7bits
 * @description
 *
 * 7-bit subfields as ASCII.
 *
 * @constant
 * @type {number}
 */
export const alpha7bits =
    EpcFormat_fields_Item_result.alpha7bits; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_EpcFormat_fields_Item_result(el: _Element): EpcFormat_fields_Item_result {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case EpcFormat_fields_Item_result.numericPad: return EpcFormat_fields_Item_result.numericPad;
        case EpcFormat_fields_Item_result.numeric: return EpcFormat_fields_Item_result.numeric;
        case EpcFormat_fields_Item_result.alpha7bits: return EpcFormat_fields_Item_result.alpha7bits;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for EpcFormat_fields_Item_result.",
                el,
            );
    }
}


export const _encode_EpcFormat_fields_Item_result: $.ASN1Encoder<EpcFormat_fields_Item_result> = $._encodeEnumerated as $.ASN1Encoder<EpcFormat_fields_Item_result>;


/* eslint-enable */
