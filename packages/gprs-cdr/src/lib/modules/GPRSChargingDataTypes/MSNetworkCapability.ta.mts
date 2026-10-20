/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSNetworkCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSNetworkCapability  ::=  OCTET STRING ( SIZE( 1 .. 8 ) )
 * ```
 */
export
type MSNetworkCapability = OCTET_STRING; // OctetStringType

export const _decode_MSNetworkCapability = (el: _Element): MSNetworkCapability => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("MSNetworkCapability violates SIZE constraint");
    }
    return value;
};

export
const _encode_MSNetworkCapability: $.ASN1Encoder<MSNetworkCapability> = $._encodeOctetString;

/* eslint-enable */
