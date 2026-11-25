/* eslint-disable */
import {
  type INTEGER,
  ASN1Element as _Element,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary Quality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Quality  ::=  INTEGER {
 *   no-value-available(-3), quality-not-supported(-2), quality-not-recorded(-1)
 * }(-3..100)
 * ```
 */
export type Quality = INTEGER;

/**
 * @summary Quality_no_value_available
 * @constant
 * @type {number}
 */
export const Quality_no_value_available: -3 = -3 satisfies Quality; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Quality_no_value_available
 * @constant
 * @type {number}
 */
export const no_value_available: -3 = Quality_no_value_available; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Quality_quality_not_supported
 * @constant
 * @type {number}
 */
export const Quality_quality_not_supported: -2 = -2 satisfies Quality; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Quality_quality_not_supported
 * @constant
 * @type {number}
 */
export const quality_not_supported: -2 = Quality_quality_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Quality_quality_not_recorded
 * @constant
 * @type {number}
 */
export const Quality_quality_not_recorded: -1 = -1 satisfies Quality; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Quality_quality_not_recorded
 * @constant
 * @type {number}
 */
export const quality_not_recorded: -1 = Quality_quality_not_recorded; /* SHORT_NAMED_INTEGER_VALUE */

export const _decode_Quality: $.ASN1Decoder<INTEGER> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, -3, 100, "Quality");
    return value;
};

export const _encode_Quality: $.ASN1Encoder<INTEGER> = $._encodeInteger;

/* eslint-enable */
