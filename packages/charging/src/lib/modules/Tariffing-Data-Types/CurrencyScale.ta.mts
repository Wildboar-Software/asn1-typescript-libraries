/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CurrencyScale
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrencyScale  ::=  INTEGER (-7..3)
 * ```
 */
export
type CurrencyScale = INTEGER;
export const _decode_CurrencyScale = $._decodeInteger;
export const _encode_CurrencyScale = $._encodeInteger;


/* eslint-enable */
