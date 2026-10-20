/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthResponse  ::=  OCTET STRING (SIZE(1..4))
 * ```
 */
export
type AuthResponse = OCTET_STRING; // OctetStringType

export
const _decode_AuthResponse = (el: _Element): AuthResponse => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 4) {
        throw new ASN1SizeError("AuthResponse violates SIZE constraint");
    }
    return value;
};

export
const _encode_AuthResponse: $.ASN1Encoder<AuthResponse> = $._encodeOctetString;

/* eslint-enable */
