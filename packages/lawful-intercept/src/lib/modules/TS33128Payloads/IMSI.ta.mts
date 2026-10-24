/* eslint-disable */
import {
    ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSI
 * @description
 * 
 * Derived from the International Mobile Subscription Identity defined in TS
 * 23.003 [19] clause 2.1 and clause 2.2.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI  ::=  NumericString (SIZE(6..15))
 * ```
 */
export
type IMSI = NumericString; // NumericString
export const _decode_IMSI: $.ASN1Decoder<IMSI> = (el: _Element): IMSI => {
    const value = $._decodeNumericString(el);
    if (value.length < 6 || value.length > 15) {
        throw new ASN1SizeError("IMSI violates SIZE constraint");
    }
    return value;
};
export const _encode_IMSI: $.ASN1Encoder<IMSI> = $._encodeNumericString;


/* eslint-enable */
