/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary InvokeID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID  ::=  INTEGER (0..127)
 * ```
 */
export type InvokeID = INTEGER;


export const _decode_InvokeID = $._decodeInteger;


export const _encode_InvokeID = $._encodeInteger;


/* eslint-enable */
