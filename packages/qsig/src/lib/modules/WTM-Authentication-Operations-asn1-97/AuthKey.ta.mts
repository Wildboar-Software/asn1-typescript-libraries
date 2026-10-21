/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AuthKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthKey  ::=  OCTET STRING (SIZE(1..16))
 * ```
 */
export
type AuthKey = OCTET_STRING; // OctetStringType

export
const _decode_AuthKey = (el: _Element): AuthKey => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("AuthKey violates SIZE constraint");
    }
    return value;
};

export
const _encode_AuthKey: $.ASN1Encoder<AuthKey> = $._encodeOctetString;

/* eslint-enable */
