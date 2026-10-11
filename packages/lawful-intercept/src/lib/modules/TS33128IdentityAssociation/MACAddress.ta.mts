/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MACAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MACAddress  ::=  OCTET STRING (SIZE(6))
 * ```
 */
export
type MACAddress = OCTET_STRING; // OctetStringType

export function _decode_MACAddress (el: _Element): MACAddress {
    const value = $._decodeOctetString(el);
    if (value.length < 6 || value.length > 6) {
        throw new ASN1SizeError("MACAddress violates the SIZE constraint");
    }
    return value;
}

export const _encode_MACAddress: $.ASN1Encoder<MACAddress> = $._encodeOctetString;


/* eslint-enable */
