/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SSIType
 * @description
 * 
 * Short Subscriber Identity, 24 bits, as defined in EN 300 392-1. Together with
 * the mobile country code and mobile network code it forms a TSI. An Alias
 * Short Subscriber Identity assigned by the hosting network is an example of a
 * supplementary address bound to that TSI (clause 6.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSIType  ::=  BIT STRING (SIZE (24))
 * ```
 */
export
type SSIType = BIT_STRING;
export const _decode_SSIType: $.ASN1Decoder<SSIType> = (el: _Element): SSIType => {
    const value = $._decodeBitString(el);
    if (value.length < 24 || value.length > 24) {
        throw new ASN1SizeError("SSIType violates SIZE constraint");
    }
    return value;
};
export const _encode_SSIType: $.ASN1Encoder<SSIType> = $._encodeBitString;


/* eslint-enable */
