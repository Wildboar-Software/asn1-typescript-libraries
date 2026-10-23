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
 * Authentication key (ECMA-306 §6.3.1). Carried as choice `authKey` of
 * `transferAuthParam` during the ANF-WTINFO interaction (§6.8.22.1). It shall
 * not appear in a `wtatParamEnq` result (§6.5.7.1). How the key is applied is
 * outside ECMA-306 (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
