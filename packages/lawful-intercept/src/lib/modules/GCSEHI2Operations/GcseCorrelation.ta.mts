/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GcseCorrelation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseCorrelation  ::=  OCTET STRING
 * ```
 */
export
type GcseCorrelation = OCTET_STRING; // OctetStringType

export const _decode_GcseCorrelation: $.ASN1Decoder<GcseCorrelation> = $._decodeOctetString;

export const _encode_GcseCorrelation: $.ASN1Encoder<GcseCorrelation> = $._encodeOctetString;

/* eslint-enable */
