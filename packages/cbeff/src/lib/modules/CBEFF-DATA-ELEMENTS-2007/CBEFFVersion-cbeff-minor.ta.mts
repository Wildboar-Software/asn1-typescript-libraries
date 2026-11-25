/* eslint-disable */
import {
  type INTEGER,
  ASN1Element as _Element,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary CBEFFVersion_cbeff_minor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CBEFFVersion-cbeff-minor ::= INTEGER { version0(0) } (0..15)
 * ```
 */
export type CBEFFVersion_cbeff_minor = INTEGER;

/**
 * @summary CBEFFVersion_cbeff_minor_version0
 * @constant
 * @type {number}
 */
export const CBEFFVersion_cbeff_minor_version0: 0 = 0 satisfies CBEFFVersion_cbeff_minor; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CBEFFVersion_cbeff_minor_version0
 * @constant
 * @type {number}
 */
export const version0: 0 = CBEFFVersion_cbeff_minor_version0; /* SHORT_NAMED_INTEGER_VALUE */

export const _decode_CBEFFVersion_cbeff_minor: $.ASN1Decoder<INTEGER> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 15, "CBEFFVersion.cbeff-minor");
    return value;
};

export const _encode_CBEFFVersion_cbeff_minor: $.ASN1Encoder<INTEGER> = $._encodeInteger;

/* eslint-enable */
