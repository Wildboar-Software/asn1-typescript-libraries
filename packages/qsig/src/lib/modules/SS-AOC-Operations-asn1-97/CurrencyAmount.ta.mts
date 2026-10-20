/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CurrencyAmount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrencyAmount  ::=  INTEGER (0..16777215)
 * ```
 */
export
type CurrencyAmount = INTEGER;

export
const _decode_CurrencyAmount: $.ASN1Decoder<CurrencyAmount> = $._decodeInteger;

export
const _encode_CurrencyAmount: $.ASN1Encoder<CurrencyAmount> = $._encodeInteger;

/* eslint-enable */
