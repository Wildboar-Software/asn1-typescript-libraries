/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSCorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCorrelationNumber  ::=  OCTET STRING
 * ```
 */
export
type EPSCorrelationNumber = OCTET_STRING; // OctetStringType
export const _decode_EPSCorrelationNumber: $.ASN1Decoder<EPSCorrelationNumber> = $._decodeOctetString;
export const _encode_EPSCorrelationNumber: $.ASN1Encoder<EPSCorrelationNumber> = $._encodeOctetString;


/* eslint-enable */
