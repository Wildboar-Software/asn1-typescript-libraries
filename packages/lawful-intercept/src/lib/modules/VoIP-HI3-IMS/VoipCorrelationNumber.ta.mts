/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VoipCorrelationNumber
 * @description
 * 
 * Correlation number for one VoIP session. Correlates CC with IRI, and
 * correlates IRI records and CC data within that session. Supplied by the CC
 * Intercept Triggering Function (clause 12.6). For PTC, paired with the PTC
 * session info to identify one talk burst.
 * 
 * 3GPP TS 33.108, clause 12.1.4 and annex K.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
