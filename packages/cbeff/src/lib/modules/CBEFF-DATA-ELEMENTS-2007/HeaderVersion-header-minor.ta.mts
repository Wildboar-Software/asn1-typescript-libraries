/* eslint-disable */
import {
  type INTEGER,
  ASN1Element as _Element,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary HeaderVersion_header_minor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeaderVersion-header-minor ::= INTEGER { version0(0) } (0..15)
 * ```
 */
export type HeaderVersion_header_minor = INTEGER;

/**
 * @summary HeaderVersion_header_minor_version0
 * @constant
 * @type {number}
 */
export const HeaderVersion_header_minor_version0: 0 = 0 satisfies HeaderVersion_header_minor; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HeaderVersion_header_minor_version0
 * @constant
 * @type {number}
 */
export const version0: 0 = HeaderVersion_header_minor_version0; /* SHORT_NAMED_INTEGER_VALUE */

export const _decode_HeaderVersion_header_minor: $.ASN1Decoder<INTEGER> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 15, "HeaderVersion.header-minor");
    return value;
};

export const _encode_HeaderVersion_header_minor: $.ASN1Encoder<INTEGER> = $._encodeInteger;

/* eslint-enable */
