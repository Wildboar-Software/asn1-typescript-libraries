/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MessageDigest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageDigest  ::=  OCTET STRING
 * ```
 */
export
type MessageDigest = OCTET_STRING; // OctetStringType

export
const _decode_MessageDigest: $.ASN1Decoder<MessageDigest> = $._decodeOctetString;

export
const _encode_MessageDigest: $.ASN1Encoder<MessageDigest> = $._encodeOctetString;

/* eslint-enable */
