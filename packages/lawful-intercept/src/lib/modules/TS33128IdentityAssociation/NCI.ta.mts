/* eslint-disable */
import {
    ASN1Element as _Element,
    type BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NCI
 * @description
 * 
 * Encoded as per TS 38.413 [23] clause 9.3.1.7.
 *
 * 3GPP TS 33.128, clause 6.2.2A.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NCI  ::=  BIT STRING (SIZE(36))
 * ```
 */
export
type NCI = BIT_STRING;
export const _decode_NCI: $.ASN1Decoder<NCI> = (el: _Element): NCI => {
    const value = $._decodeBitString(el);
    if (value.length < 36 || value.length > 36) {
        throw new ASN1SizeError("NCI violates SIZE constraint");
    }
    return value;
};
export const _encode_NCI: $.ASN1Encoder<NCI> = $._encodeBitString;


/* eslint-enable */
