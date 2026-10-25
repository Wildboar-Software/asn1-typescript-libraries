/* eslint-disable */
import {
    type ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEISV
 * @description
 * 
 * Derived from the International Mobile Equipment Identity and Software Version
 * defined in TS 23.003 [19] clause 6.2.2.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEISV  ::=  NumericString (SIZE(16))
 * ```
 */
export
type IMEISV = NumericString; // NumericString
export const _decode_IMEISV: $.ASN1Decoder<IMEISV> = (el: _Element): IMEISV => {
    const value = $._decodeNumericString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("IMEISV violates SIZE constraint");
    }
    return value;
};
export const _encode_IMEISV: $.ASN1Encoder<IMEISV> = $._encodeNumericString;


/* eslint-enable */
