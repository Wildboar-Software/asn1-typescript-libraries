/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary DBRecord
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DBRecord     ::=  UTF8String
 * ```
 */
export type DBRecord = UTF8String; // UTF8String




export const _decode_DBRecord = $._decodeUTF8String;




export const _encode_DBRecord = $._encodeUTF8String;


/* eslint-enable */
