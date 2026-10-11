/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MNC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNC  ::=  NumericString (SIZE(2..3))
 * ```
 */
export
type MNC = NumericString; // NumericString

export function _decode_MNC (el: _Element): MNC {
    const value = $._decodeNumericString(el);
    if (value.length < 2 || value.length > 3) {
        throw new ASN1SizeError("MNC violates the SIZE constraint");
    }
    return value;
}

export const _encode_MNC: $.ASN1Encoder<MNC> = $._encodeNumericString;


/* eslint-enable */
