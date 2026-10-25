/* eslint-disable */
import {
    type ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCC
 * @description
 * 
 * Mobile Country Code.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCC  ::=  NumericString (SIZE(3))
 * ```
 */
export
type MCC = NumericString; // NumericString
export const _decode_MCC: $.ASN1Decoder<MCC> = (el: _Element): MCC => {
    const value = $._decodeNumericString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("MCC violates SIZE constraint");
    }
    return value;
};
export const _encode_MCC: $.ASN1Encoder<MCC> = $._encodeNumericString;


/* eslint-enable */
