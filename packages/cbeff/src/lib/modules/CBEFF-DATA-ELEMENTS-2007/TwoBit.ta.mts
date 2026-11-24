/* eslint-disable */
import {
  type INTEGER,
  ASN1Element as _Element,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary TwoBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TwoBit  ::=  INTEGER(0..3)
 * ```
 */
export type TwoBit = INTEGER;

export const _decode_TwoBit: $.ASN1Decoder<INTEGER> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 3, "TwoBit");
    return value;
};

export const _encode_TwoBit: $.ASN1Encoder<INTEGER> = $._encodeInteger;

/* eslint-enable */
