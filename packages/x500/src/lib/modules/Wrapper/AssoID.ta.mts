/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AssoID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssoID  ::=  INTEGER (0..32767)
 * ```
 */
export type AssoID = INTEGER;


export const _decode_AssoID = $._decodeInteger;


export const _encode_AssoID = $._encodeInteger;


/* eslint-enable */
