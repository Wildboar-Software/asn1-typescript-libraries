/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallResult  ::=  OCTET STRING(SIZE (minCallResultLength..maxCallResultLength))
 * ```
 */
export
type CallResult = OCTET_STRING; // OctetStringType

export
const _decode_CallResult: $.ASN1Decoder<CallResult> = $._decodeOctetString;

export
const _encode_CallResult: $.ASN1Encoder<CallResult> = $._encodeOctetString;

/* eslint-enable */
