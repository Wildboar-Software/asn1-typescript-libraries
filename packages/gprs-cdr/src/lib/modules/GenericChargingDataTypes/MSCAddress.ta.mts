/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSCAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSCAddress  ::=  OCTET STRING ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type MSCAddress = OCTET_STRING; // OctetStringType

export const _decode_MSCAddress = (el: _Element): MSCAddress => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("MSCAddress violates SIZE constraint");
    }
    return value;
};

export
const _encode_MSCAddress: $.ASN1Encoder<MSCAddress> = $._encodeOctetString;

/* eslint-enable */
