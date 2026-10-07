/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RP_MR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RP-MR  ::=  INTEGER (0..65535)
 * ```
 */
export
type RP_MR = INTEGER;
export const _decode_RP_MR = $._decodeInteger;
export const _encode_RP_MR = $._encodeInteger;


/* eslint-enable */
