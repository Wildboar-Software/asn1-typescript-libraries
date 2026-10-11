/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthData
 * @description
 * 
 * Integrity check value of the interim authentication header, 12 to 32 octets
 * (clause 10.2, Annex A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthData  ::=  OCTET STRING (SIZE (12..32))
 * ```
 */
export
type AuthData = OCTET_STRING; // OctetStringType
export const _decode_AuthData = (el: _Element): AuthData => {
    const value = $._decodeOctetString(el);
    if (value.length < 12 || value.length > 32) {
        throw new ASN1SizeError("AuthData violates SIZE constraint");
    }
    return value;
};
export const _encode_AuthData = $._encodeOctetString;


/* eslint-enable */
