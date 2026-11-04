/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RandomNonce
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RandomNonce  ::=  OCTET STRING (SIZE(4..MAX))
 * ```
 */
export
type RandomNonce = OCTET_STRING; // OctetStringType

export
const _decode_RandomNonce: $.ASN1Decoder<RandomNonce> = $._decodeOctetString;

export
const _encode_RandomNonce: $.ASN1Encoder<RandomNonce> = $._encodeOctetString;

/* eslint-enable */
