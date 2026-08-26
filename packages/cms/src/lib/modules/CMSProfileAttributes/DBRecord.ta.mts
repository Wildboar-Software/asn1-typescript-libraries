/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DBRecord
 * @description
 *
 * UTF8String database-record location pointer (ITU-T X.894 | ISO/IEC 24824-4 Annex A.17).
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
