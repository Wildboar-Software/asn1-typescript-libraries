/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AuthSessionKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthSessionKey  ::=  OCTET STRING (SIZE(1..16))
 * ```
 */
export
type AuthSessionKey = OCTET_STRING; // OctetStringType

export
const _decode_AuthSessionKey = (el: _Element): AuthSessionKey => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("AuthSessionKey violates SIZE constraint");
    }
    return value;
};

export
const _encode_AuthSessionKey: $.ASN1Encoder<AuthSessionKey> = $._encodeOctetString;

/* eslint-enable */
