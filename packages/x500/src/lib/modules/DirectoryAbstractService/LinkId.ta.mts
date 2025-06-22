/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary LinkId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkId  ::=  INTEGER
 * ```
 */
export type LinkId = INTEGER;


export const _decode_LinkId = $._decodeInteger;


export const _encode_LinkId = $._encodeInteger;


/* eslint-enable */
