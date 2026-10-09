/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberOfBits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfBits  ::=  INTEGER(1..128)
 * ```
 */
export
type NumberOfBits = INTEGER;

export const _decode_NumberOfBits = $._decodeInteger;
export const _encode_NumberOfBits = $._encodeInteger;


/* eslint-enable */
