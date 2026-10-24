/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv4Address
 * @description
 * 
 * The IPv4 address being reported in binary representation.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv4Address  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type IPv4Address = OCTET_STRING; // OctetStringType
export const _decode_IPv4Address: $.ASN1Decoder<IPv4Address> = (el: _Element): IPv4Address => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 4) {
        throw new ASN1SizeError("IPv4Address violates SIZE constraint");
    }
    return value;
};
export const _encode_IPv4Address: $.ASN1Encoder<IPv4Address> = $._encodeOctetString;


/* eslint-enable */
