/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserPin
 * @description
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
