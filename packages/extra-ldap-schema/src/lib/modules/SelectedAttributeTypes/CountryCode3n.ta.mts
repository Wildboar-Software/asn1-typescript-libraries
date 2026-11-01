/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1CharactersError,
    ASN1SizeError,
    type NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CountryCode3n
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CountryCode3n  ::=  NumericString(SIZE (3)) (CONSTRAINED BY { -- ISO 3166 numeric-3 codes only -- })
 * ```
 */
export
type CountryCode3n = NumericString; // NumericString

export
function _decode_CountryCode3n (el: _Element): CountryCode3n {
    const value = $._decodeNumericString(el);
    if (!/^[0-9 ]*$/u.test(value)) {
        throw new ASN1CharactersError("CountryCode3n violates NumericString constraint");
    }
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("CountryCode3n violates SIZE constraint");
    }
    return value;
}

export
const _encode_CountryCode3n: $.ASN1Encoder<CountryCode3n> = $._encodeNumericString;

/* eslint-enable */
