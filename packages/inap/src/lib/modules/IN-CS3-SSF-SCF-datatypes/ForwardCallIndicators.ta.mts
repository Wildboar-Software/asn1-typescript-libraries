/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardCallIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardCallIndicators  ::=  OCTET STRING(SIZE (2))
 * ```
 */
export
type ForwardCallIndicators = OCTET_STRING; // OctetStringType

export
const _decode_ForwardCallIndicators: $.ASN1Decoder<ForwardCallIndicators> = $._decodeOctetString;

export
const _encode_ForwardCallIndicators: $.ASN1Encoder<ForwardCallIndicators> = $._encodeOctetString;

/* eslint-enable */
