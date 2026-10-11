/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VoipCorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoipCorrelationNumber  ::=  OCTET STRING
 * ```
 */
export
type VoipCorrelationNumber = OCTET_STRING; // OctetStringType

export const _decode_VoipCorrelationNumber: $.ASN1Decoder<VoipCorrelationNumber> = $._decodeOctetString;

export const _encode_VoipCorrelationNumber: $.ASN1Encoder<VoipCorrelationNumber> = $._encodeOctetString;


/* eslint-enable */
