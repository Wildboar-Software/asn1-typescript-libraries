/* eslint-disable */
import {
    type ASN1Element as _Element,
    type BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary N3IWFIDNGAP
 * @description
 * 
 * The N3IWFIDNGAP type is used to report the N3IWF Identity received over NGAP.
 * The N3IWFIDNGAP type is derived from the data present in the N3IWF ID
 * parameter of the Global N3IWFID defined in TS 38.413 [23] clause 9.3.1.57.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N3IWFIDNGAP  ::=  BIT STRING (SIZE(16))
 * ```
 */
export
type N3IWFIDNGAP = BIT_STRING;
export const _decode_N3IWFIDNGAP: $.ASN1Decoder<N3IWFIDNGAP> = (el: _Element): N3IWFIDNGAP => {
    const value = $._decodeBitString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("N3IWFIDNGAP violates SIZE constraint");
    }
    return value;
};
export const _encode_N3IWFIDNGAP: $.ASN1Encoder<N3IWFIDNGAP> = $._encodeBitString;


/* eslint-enable */
