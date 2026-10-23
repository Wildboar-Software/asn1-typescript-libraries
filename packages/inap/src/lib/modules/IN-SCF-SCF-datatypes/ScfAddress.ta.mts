/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScfAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfAddress  ::= 
 *   OCTET STRING
 * ```
 */
export
type ScfAddress = OCTET_STRING; // OctetStringType

export
const _decode_ScfAddress: $.ASN1Decoder<ScfAddress> = $._decodeOctetString;

export
const _encode_ScfAddress: $.ASN1Encoder<ScfAddress> = $._encodeOctetString;

/* eslint-enable */
