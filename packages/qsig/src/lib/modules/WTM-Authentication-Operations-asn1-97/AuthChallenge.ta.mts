/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AuthChallenge
 * @description
 *
 * Randomly generated authentication parameter (ECMA-306 §6.3.1). In SS-WTAT the
 * network produces it, unless the Visitor PINX supplied one (§6.5.7.1). In
 * SS-WTAN it is the challenge received from the WTM user (§7.5.1.1). Generation
 * is outside ECMA-306 (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
