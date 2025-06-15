/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary InternationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternationalISDNNumber  ::=
 *   NumericString(SIZE (1..ub-international-isdn-number))
 * ```
 */
export type InternationalISDNNumber = NumericString; // NumericString


export const _decode_InternationalISDNNumber = $._decodeNumericString;


export const _encode_InternationalISDNNumber = $._encodeNumericString;


/* eslint-enable */
