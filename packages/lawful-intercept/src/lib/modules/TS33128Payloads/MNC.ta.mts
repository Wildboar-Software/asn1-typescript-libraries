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
 * Mobile Network Code.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNC  ::=  NumericString (SIZE(2..3))
 * ```
 */
export
type MNC = NumericString; // NumericString
export const _decode_MNC: $.ASN1Decoder<MNC> = (el: _Element): MNC => {
    const value = $._decodeNumericString(el);
    if (value.length < 2 || value.length > 3) {
        throw new ASN1SizeError("MNC violates SIZE constraint");
    }
    return value;
};
export const _encode_MNC: $.ASN1Encoder<MNC> = $._encodeNumericString;


/* eslint-enable */
