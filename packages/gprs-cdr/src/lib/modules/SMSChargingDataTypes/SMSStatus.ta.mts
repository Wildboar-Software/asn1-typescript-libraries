/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSStatus   ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type SMSStatus = OCTET_STRING; // OctetStringType

export const _decode_SMSStatus = (el: _Element): SMSStatus => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("SMSStatus violates SIZE constraint");
    }
    return value;
};

export
const _encode_SMSStatus: $.ASN1Encoder<SMSStatus> = $._encodeOctetString;

/* eslint-enable */
