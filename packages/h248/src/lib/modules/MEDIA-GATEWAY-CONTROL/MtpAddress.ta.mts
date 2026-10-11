/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MtpAddress
 * @description
 * 
 * MTP3 point-code address, 2 to 4 octets, used as a message identifier.
 *
 * Fourteen bits of point code are defined for international use, with national
 * options of 16 or 24 bits, plus a 2-bit network indicator. The most
 * significant bits are zero so the value is octet-aligned (Annex A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MtpAddress  ::=  OCTET STRING(SIZE(2..4))
 * ```
 */
export
type MtpAddress = OCTET_STRING; // OctetStringType
export const _decode_MtpAddress = (el: _Element): MtpAddress => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 4) {
        throw new ASN1SizeError("MtpAddress violates SIZE constraint");
    }
    return value;
};
export const _encode_MtpAddress = $._encodeOctetString;


/* eslint-enable */
