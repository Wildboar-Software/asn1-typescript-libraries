/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InternationalE164
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternationalE164  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type InternationalE164 = NumericString; // NumericString
export const _decode_InternationalE164: $.ASN1Decoder<InternationalE164> = (el: _Element): InternationalE164 => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 15) {
        throw new ASN1SizeError("InternationalE164 violates SIZE constraint");
    }
    return value;
};
export const _encode_InternationalE164: $.ASN1Encoder<InternationalE164> = $._encodeNumericString;


/* eslint-enable */
