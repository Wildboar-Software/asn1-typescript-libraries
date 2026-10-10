/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestID  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type RequestID = INTEGER;
export const _decode_RequestID = $._decodeInteger;
export const _encode_RequestID = $._encodeInteger;


/* eslint-enable */
