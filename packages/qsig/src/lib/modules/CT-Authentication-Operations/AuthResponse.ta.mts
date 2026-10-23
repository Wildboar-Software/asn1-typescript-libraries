/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthResponse
 * @description
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
const _decode_AuthResponse: $.ASN1Decoder<AuthResponse> = $._decodeOctetString;

export
const _encode_AuthResponse: $.ASN1Encoder<AuthResponse> = $._encodeOctetString;

/* eslint-enable */
