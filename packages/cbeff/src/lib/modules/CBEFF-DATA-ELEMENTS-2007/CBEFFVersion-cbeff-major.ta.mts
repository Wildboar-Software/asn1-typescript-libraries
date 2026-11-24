/* eslint-disable */
import {
  type INTEGER,
  ASN1Element as _Element,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary CBEFFVersion_cbeff_major
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CBEFFVersion-cbeff-major ::= INTEGER { version2(2) } (0..15)
 * ```
 */
export type CBEFFVersion_cbeff_major = INTEGER;

/**
 * @summary CBEFFVersion_cbeff_major_version2
 * @constant
 * @type {number}
 */
export const CBEFFVersion_cbeff_major_version2: 2 = 2 satisfies CBEFFVersion_cbeff_major; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CBEFFVersion_cbeff_major_version2
 * @constant
 * @type {number}
 */
export const version2: 2 = CBEFFVersion_cbeff_major_version2; /* SHORT_NAMED_INTEGER_VALUE */

export const _decode_CBEFFVersion_cbeff_major: $.ASN1Decoder<INTEGER> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 15, "CBEFFVersion.cbeff-major");
    return value;
};

export const _encode_CBEFFVersion_cbeff_major: $.ASN1Encoder<INTEGER> = $._encodeInteger;

/* eslint-enable */
