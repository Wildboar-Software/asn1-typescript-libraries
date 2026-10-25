/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MACAddress
 * @description
 * 
 * Derived from a MAC address defined in IETF RFC 7042 [126].
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MACAddress  ::=  OCTET STRING (SIZE(6))
 * ```
 */
export
type MACAddress = OCTET_STRING; // OctetStringType
export const _decode_MACAddress: $.ASN1Decoder<MACAddress> = (el: _Element): MACAddress => {
    const value = $._decodeOctetString(el);
    if (value.length < 6 || value.length > 6) {
        throw new ASN1SizeError("MACAddress violates SIZE constraint");
    }
    return value;
};
export const _encode_MACAddress: $.ASN1Encoder<MACAddress> = $._encodeOctetString;


/* eslint-enable */
