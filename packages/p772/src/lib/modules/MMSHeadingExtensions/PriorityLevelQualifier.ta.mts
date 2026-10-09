/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PriorityLevelQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityLevelQualifier  ::=  ENUMERATED {
 *   low(0),
 *   high(1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PriorityLevelQualifier {
    low = 0,
    high = 1,
}

/**
 * @summary PriorityLevelQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityLevelQualifier  ::=  ENUMERATED {
 *   low(0),
 *   high(1) }
 * ```
 * 
 * @enum {number}
 */
export
type PriorityLevelQualifier = _enum_for_PriorityLevelQualifier;

/**
 * @summary PriorityLevelQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityLevelQualifier  ::=  ENUMERATED {
 *   low(0),
 *   high(1) }
 * ```
 * 
 * @enum {number}
 */
export
const PriorityLevelQualifier = _enum_for_PriorityLevelQualifier;

/**
 * @summary PriorityLevelQualifier_low
 * @constant
 * @type {number}
 */
export
const PriorityLevelQualifier_low: PriorityLevelQualifier = PriorityLevelQualifier.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: PriorityLevelQualifier = PriorityLevelQualifier.low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PriorityLevelQualifier_high
 * @constant
 * @type {number}
 */
export
const PriorityLevelQualifier_high: PriorityLevelQualifier = PriorityLevelQualifier.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: PriorityLevelQualifier = PriorityLevelQualifier.high; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PriorityLevelQualifier = $._decodeEnumerated;
export const _encode_PriorityLevelQualifier = $._encodeEnumerated;

/* eslint-enable */
