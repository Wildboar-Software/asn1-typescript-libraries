/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContextID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextID  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type ContextID = INTEGER;
export const _decode_ContextID = $._decodeInteger;
export const _encode_ContextID = $._encodeInteger;


/* eslint-enable */
