/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1SizeError,
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
const _decode_Currency = (el: _Element): Currency => {
    const value = $._decodeIA5String(el);
    if (value.length < 0 || value.length > 10) {
        throw new ASN1SizeError("Currency violates SIZE constraint");
    }
    return value;
};

export
const _encode_Currency: $.ASN1Encoder<Currency> = $._encodeIA5String;

/* eslint-enable */
