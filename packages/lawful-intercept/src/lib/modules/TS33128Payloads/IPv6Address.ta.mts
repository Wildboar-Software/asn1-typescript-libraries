/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv6Address
 * @description
 * 
 * The IPv6 address being reported in binary representation.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6Address  ::=  OCTET STRING (SIZE(16))
 * ```
 */
export
type IPv6Address = OCTET_STRING; // OctetStringType
export const _decode_IPv6Address: $.ASN1Decoder<IPv6Address> = (el: _Element): IPv6Address => {
    const value = $._decodeOctetString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("IPv6Address violates SIZE constraint");
    }
    return value;
};
export const _encode_IPv6Address: $.ASN1Encoder<IPv6Address> = $._encodeOctetString;


/* eslint-enable */
