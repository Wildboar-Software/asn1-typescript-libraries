/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SM_TC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-TC  ::=  INTEGER (0..65535)
 * ```
 */
export
type SM_TC = INTEGER;
export const _decode_SM_TC = $._decodeInteger;
export const _encode_SM_TC = $._encodeInteger;


/* eslint-enable */
