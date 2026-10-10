/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CurrencyFactor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrencyFactor  ::=  INTEGER (0..999999)
 * ```
 */
export
type CurrencyFactor = INTEGER;
export const _decode_CurrencyFactor = $._decodeInteger;
export const _encode_CurrencyFactor = $._encodeInteger;


/* eslint-enable */
