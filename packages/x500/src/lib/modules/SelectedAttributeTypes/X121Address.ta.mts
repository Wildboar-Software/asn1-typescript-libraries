/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary X121Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X121Address  ::=  NumericString(SIZE (1..ub-x121-address))
 * ```
 */
export type X121Address = NumericString; // NumericString


export const _decode_X121Address = $._decodeNumericString;


export const _encode_X121Address = $._encodeNumericString;


/* eslint-enable */
