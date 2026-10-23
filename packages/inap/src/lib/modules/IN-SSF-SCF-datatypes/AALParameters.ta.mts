/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AALParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AALParameters  ::= 
 *   OCTET STRING
 * ```
 */
export
type AALParameters = OCTET_STRING; // OctetStringType

export
const _decode_AALParameters: $.ASN1Decoder<AALParameters> = $._decodeOctetString;

export
const _encode_AALParameters: $.ASN1Encoder<AALParameters> = $._encodeOctetString;

/* eslint-enable */
