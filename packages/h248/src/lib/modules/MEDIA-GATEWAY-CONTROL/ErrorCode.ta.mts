/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorCode  ::=  INTEGER(0..65535)
 * ```
 */
export
type ErrorCode = INTEGER;
export const _decode_ErrorCode = $._decodeInteger;
export const _encode_ErrorCode = $._encodeInteger;


/* eslint-enable */
