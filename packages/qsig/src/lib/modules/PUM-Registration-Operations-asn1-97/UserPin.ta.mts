/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UserPin
 * @description
 *
 * PIN of the PUM user or of the activating user (ECMA-282 §6.3.1, §6.5.1.1,
 * §6.5.6.1). One to 20 octets. The octet encoding is not specified. Clause 6
 * allows authentication to use the PIN and is silent on the check.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserPin  ::=  OCTET STRING (SIZE(1..20))
 * ```
 */
export
type UserPin = OCTET_STRING; // OctetStringType

export
const _decode_UserPin = (el: _Element): UserPin => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("UserPin violates SIZE constraint");
    }
    return value;
};

export
const _encode_UserPin: $.ASN1Encoder<UserPin> = $._encodeOctetString;

/* eslint-enable */
