/* eslint-disable */
import {
    ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEI
 * @description
 * 
 * Derived from the International Mobile Equipment Identity defined in TS 23.003
 * [19] clause 6.2.1.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEI  ::=  NumericString (SIZE(14))
 * ```
 */
export
type IMEI = NumericString; // NumericString
export const _decode_IMEI: $.ASN1Decoder<IMEI> = (el: _Element): IMEI => {
    const value = $._decodeNumericString(el);
    if (value.length < 14 || value.length > 14) {
        throw new ASN1SizeError("IMEI violates SIZE constraint");
    }
    return value;
};
export const _encode_IMEI: $.ASN1Encoder<IMEI> = $._encodeNumericString;


/* eslint-enable */
