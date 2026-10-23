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
 * Currency identifier, IA5String of length 0..10. Length 0 means the default
 * currency of the PISN. Coding of any other currency is outside the scope of
 * ECMA-212 (§6.3.1). For AOC-D and AOC-E the service requires local currency
 * units, the currency of the country where the served user's PINX is located
 * (ECMA-211 §4.2.4, §7.2.1, §8.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
