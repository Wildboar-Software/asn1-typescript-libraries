/* eslint-disable */
import {
  type INTEGER,
  ASN1Element as _Element,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary FourBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FourBit  ::=  INTEGER(0..15)
 * ```
 */
export type FourBit = INTEGER;

export const _decode_FourBit: $.ASN1Decoder<INTEGER> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 15, "FourBit");
    return value;
};

export const _encode_FourBit: $.ASN1Encoder<INTEGER> = $._encodeInteger;

/* eslint-enable */
