/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AuthResponse
 * @description
 *
 * In SS-WTAT, the response the WTM user is expected to return. In SS-WTAN, the
 * response value from the network (ECMA-306 §6.3.1). How either value is
 * computed is outside ECMA-306 (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
