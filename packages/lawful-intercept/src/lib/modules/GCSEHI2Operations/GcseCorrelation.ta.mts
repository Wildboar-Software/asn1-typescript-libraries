/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GcseCorrelation
 * @description
 * 
 * Correlation number for GCSE IRI and content of communication. Required by
 * stage 2 on the GCSE records. The octet layout is not defined. 3GPP TS 33.108,
 * clause 14.2.2.3 and table 14.2.
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
