/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TotalPartialCrlNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TotalPartialCrlNumber  ::=  INTEGER
 * ```
 */
export
type TotalPartialCrlNumber = INTEGER;
export const _decode_TotalPartialCrlNumber = $._decodeInteger;
export const _encode_TotalPartialCrlNumber = $._encodeInteger;


/* eslint-enable */
