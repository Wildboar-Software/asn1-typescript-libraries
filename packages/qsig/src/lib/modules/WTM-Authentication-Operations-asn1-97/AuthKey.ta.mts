/* eslint-disable */
import {
    OCTET_STRING
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
const _decode_AuthKey: $.ASN1Decoder<AuthKey> = $._decodeOctetString;

export
const _encode_AuthKey: $.ASN1Encoder<AuthKey> = $._encodeOctetString;

/* eslint-enable */
