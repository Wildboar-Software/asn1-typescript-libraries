/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSAddress  ::=  OCTET STRING(SIZE(2..12))
 * ```
 */
export
type SMSAddress = OCTET_STRING; // OctetStringType
export const _decode_SMSAddress: $.ASN1Decoder<SMSAddress> = (el: _Element): SMSAddress => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 12) {
        throw new ASN1SizeError("SMSAddress violates SIZE constraint");
    }
    return value;
};
export const _encode_SMSAddress: $.ASN1Encoder<SMSAddress> = $._encodeOctetString;


/* eslint-enable */
