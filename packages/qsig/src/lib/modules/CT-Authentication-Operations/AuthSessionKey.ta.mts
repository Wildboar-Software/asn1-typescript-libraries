/* eslint-disable */
import {
    OCTET_STRING
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
const _decode_AuthSessionKey: $.ASN1Decoder<AuthSessionKey> = $._decodeOctetString;

export
const _encode_AuthSessionKey: $.ASN1Encoder<AuthSessionKey> = $._encodeOctetString;

/* eslint-enable */
