/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthChallenge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthChallenge  ::=  OCTET STRING (SIZE(1..8))
 * ```
 */
export
type AuthChallenge = OCTET_STRING; // OctetStringType

export
const _decode_AuthChallenge = (el: _Element): AuthChallenge => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("AuthChallenge violates SIZE constraint");
    }
    return value;
};

export
const _encode_AuthChallenge: $.ASN1Encoder<AuthChallenge> = $._encodeOctetString;

/* eslint-enable */
