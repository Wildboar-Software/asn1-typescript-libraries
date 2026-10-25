/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthSessionKey
 * @description
 *
 * Authentication session key (ECMA-243 §6.3.1). When `canCompute` was
 * indicated, the Visitor PINX uses it to compute a challenge and/or a response
 * (§6.5.6.1, §7.5.1.1). That computation is outside ECMA-243 (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
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
const _decode_AuthSessionKey: $.ASN1Decoder<AuthSessionKey> = $._decodeOctetString;

export
const _encode_AuthSessionKey: $.ASN1Encoder<AuthSessionKey> = $._encodeOctetString;

/* eslint-enable */
