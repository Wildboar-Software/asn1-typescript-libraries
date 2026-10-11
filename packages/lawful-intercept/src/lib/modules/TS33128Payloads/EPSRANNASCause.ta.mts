/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EPSRANNASCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSRANNASCause  ::=  OCTET STRING
 * ```
 */
export
type EPSRANNASCause = OCTET_STRING; // OctetStringType

export const _decode_EPSRANNASCause: $.ASN1Decoder<EPSRANNASCause> = $._decodeOctetString;

export const _encode_EPSRANNASCause: $.ASN1Encoder<EPSRANNASCause> = $._encodeOctetString;

/* eslint-enable */
