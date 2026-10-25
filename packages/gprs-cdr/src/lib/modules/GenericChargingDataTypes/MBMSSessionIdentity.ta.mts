/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSSessionIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSSessionIdentity  ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type MBMSSessionIdentity = OCTET_STRING; // OctetStringType

export const _decode_MBMSSessionIdentity = (el: _Element): MBMSSessionIdentity => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("MBMSSessionIdentity violates SIZE constraint");
    }
    return value;
};

export
const _encode_MBMSSessionIdentity: $.ASN1Encoder<MBMSSessionIdentity> = $._encodeOctetString;

/* eslint-enable */
