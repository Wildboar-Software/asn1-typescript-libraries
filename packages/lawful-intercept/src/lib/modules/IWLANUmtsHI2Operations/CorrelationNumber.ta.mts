/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationNumber  ::=  OCTET STRING (SIZE(8..20))
 * ```
 */
export
type CorrelationNumber = OCTET_STRING; // OctetStringType
export const _decode_CorrelationNumber: $.ASN1Decoder<CorrelationNumber> = $._decodeOctetString;
export const _encode_CorrelationNumber: $.ASN1Encoder<CorrelationNumber> = $._encodeOctetString;


/* eslint-enable */
