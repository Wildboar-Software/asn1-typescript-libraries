/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSCorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCorrelationNumber  ::=  OCTET STRING
 * ```
 */
export
type MMSCorrelationNumber = OCTET_STRING; // OctetStringType
export const _decode_MMSCorrelationNumber: $.ASN1Decoder<MMSCorrelationNumber> = $._decodeOctetString;
export const _encode_MMSCorrelationNumber: $.ASN1Encoder<MMSCorrelationNumber> = $._encodeOctetString;


/* eslint-enable */
