/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary NumericUserIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumericUserIdentifier  ::=  NumericString(SIZE (1..ub-numeric-user-id-length))
 * ```
 */
export type NumericUserIdentifier = NumericString; // NumericString


export const _decode_NumericUserIdentifier = $._decodeNumericString;


export const _encode_NumericUserIdentifier = $._encodeNumericString;


/* eslint-enable */
