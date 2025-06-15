/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version  ::=  INTEGER
 * ```
 */
export type Version = INTEGER;




export const _decode_Version = $._decodeInteger;




export const _encode_Version = $._encodeInteger;


/* eslint-enable */
