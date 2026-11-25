/* eslint-disable */
import {
  type INTEGER,
  ASN1Element as _Element,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary FourByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FourByte  ::=  INTEGER(0..4294967295)
 * ```
 */
export type FourByte = INTEGER;

export const _decode_FourByte: $.ASN1Decoder<INTEGER> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 4294967295, "FourByte");
    return value;
};

export const _encode_FourByte: $.ASN1Encoder<INTEGER> = $._encodeInteger;

/* eslint-enable */
