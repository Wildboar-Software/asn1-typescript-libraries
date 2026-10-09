/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Currency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Currency  ::=  INTEGER (1..999)
 * ```
 */
export
type Currency = INTEGER;
export const _decode_Currency = $._decodeInteger;
export const _encode_Currency = $._encodeInteger;


/* eslint-enable */
