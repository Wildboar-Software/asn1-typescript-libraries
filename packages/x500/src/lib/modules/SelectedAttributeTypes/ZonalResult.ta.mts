/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_ZonalResult {
    cannot_select_mapping = 0,
    zero_mappings = 2,
    multiple_mappings = 3,
}

/**
 * @summary ZonalResult
 * @description
 *
 * 0 cannot-select-mapping ⇒ UNDEFINED; 1 unused; 2 zero-mappings ⇒
 * serviceError unmatchedKeyAttributes; 3 multiple-mappings ⇒
 * serviceError ambiguousKeyAttributes.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ZonalResult  ::=  ENUMERATED {
 *   cannot-select-mapping (0),
 *   zero-mappings         (2),
 *   multiple-mappings     (3),
 *    ... }
 * ```
 *
 * @enum {number}
 */
export type ZonalResult = _enum_for_ZonalResult | ENUMERATED;

/**
 * @summary ZonalResult_cannot_select_mapping
 * @description
 *
 * Insufficient info to pick mapping ⇒ match UNDEFINED.
 *
 * @constant
 * @type {number}
 */
export const ZonalResult_cannot_select_mapping: ZonalResult = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_select_mapping
 * @description
 *
 * Insufficient info to pick mapping ⇒ match UNDEFINED.
 *
 * @constant
 * @type {number}
 */
export const cannot_select_mapping: ZonalResult = ZonalResult_cannot_select_mapping; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ZonalResult_zero_mappings
 * @description
 *
 * No gazetteer mapping / zero filter items ⇒ serviceError
 * unmatchedKeyAttributes. (Value 1 is unused.)
 *
 * @constant
 * @type {number}
 */
export const ZonalResult_zero_mappings: ZonalResult = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary zero_mappings
 * @description
 *
 * No gazetteer mapping / zero filter items ⇒ serviceError
 * unmatchedKeyAttributes. (Value 1 is unused.)
 *
 * @constant
 * @type {number}
 */
export const zero_mappings: ZonalResult = ZonalResult_zero_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ZonalResult_multiple_mappings
 * @description
 *
 * Multiple gazetteer hits ⇒ serviceError ambiguousKeyAttributes +
 * MultipleMatchingLocalities.
 *
 * @constant
 * @type {number}
 */
export const ZonalResult_multiple_mappings: ZonalResult = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiple_mappings
 * @description
 *
 * Multiple gazetteer hits ⇒ serviceError ambiguousKeyAttributes +
 * MultipleMatchingLocalities.
 *
 * @constant
 * @type {number}
 */
export const multiple_mappings: ZonalResult = ZonalResult_multiple_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ZonalResult = $._decodeEnumerated;


export const _encode_ZonalResult = $._encodeEnumerated;


/* eslint-enable */
