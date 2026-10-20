/* eslint-disable */
import {
    OCTET_STRING
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
const _decode_UserPin: $.ASN1Decoder<UserPin> = $._decodeOctetString;

export
const _encode_UserPin: $.ASN1Encoder<UserPin> = $._encodeOctetString;

/* eslint-enable */
