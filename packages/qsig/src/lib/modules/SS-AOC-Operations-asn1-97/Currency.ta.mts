/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Currency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Currency  ::=  IA5String (SIZE(0..10))
 * ```
 */
export
type Currency = IA5String; // IA5String

export
const _decode_Currency: $.ASN1Decoder<Currency> = $._decodeIA5String;

export
const _encode_Currency: $.ASN1Encoder<Currency> = $._encodeIA5String;

/* eslint-enable */
