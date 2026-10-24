/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANNASCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANNASCause  ::=  OCTET STRING
 * ```
 */
export
type RANNASCause = OCTET_STRING; // OctetStringType

export
const _decode_RANNASCause: $.ASN1Decoder<RANNASCause> = $._decodeOctetString;

export
const _encode_RANNASCause: $.ASN1Encoder<RANNASCause> = $._encodeOctetString;

/* eslint-enable */
