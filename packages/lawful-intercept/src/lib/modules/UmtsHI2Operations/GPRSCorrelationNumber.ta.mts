/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSCorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSCorrelationNumber  ::=  OCTET STRING (SIZE(8..20))
 * ```
 */
export
type GPRSCorrelationNumber = OCTET_STRING; // OctetStringType
export const _decode_GPRSCorrelationNumber: $.ASN1Decoder<GPRSCorrelationNumber> = $._decodeOctetString;
export const _encode_GPRSCorrelationNumber: $.ASN1Encoder<GPRSCorrelationNumber> = $._encodeOctetString;


/* eslint-enable */
