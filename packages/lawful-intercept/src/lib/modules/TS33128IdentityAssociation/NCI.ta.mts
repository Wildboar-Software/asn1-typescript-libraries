/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NCI
 * @description
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
