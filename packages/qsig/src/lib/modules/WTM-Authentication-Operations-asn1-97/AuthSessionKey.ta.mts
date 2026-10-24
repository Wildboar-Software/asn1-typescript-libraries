/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AuthSessionKey
 * @description
 *
 * Authentication session key (ECMA-306 §6.3.1). When this choice is received,
 * the Visitor PINX calculates the challenge and the expected response
 * (§6.5.6.1), or the SS-WTAN response (§7.5.1.1). That computation is outside
 * ECMA-306 (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
