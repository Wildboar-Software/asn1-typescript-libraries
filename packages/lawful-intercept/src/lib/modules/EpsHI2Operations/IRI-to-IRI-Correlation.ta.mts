/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRI_to_IRI_Correlation
 * @description
 * 
 * Correlates IRI records of one communication (module comment). For IMS, either
 * the SIP Call-id or an implementation-dependent number for one SIP session, or
 * the number that ties an XCAP request to its response (table 7.2). The
 * specification text does not define one octet layout. 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-to-IRI-Correlation  ::=  OCTET STRING
 * ```
 */
export
type IRI_to_IRI_Correlation = OCTET_STRING; // OctetStringType
export const _decode_IRI_to_IRI_Correlation: $.ASN1Decoder<IRI_to_IRI_Correlation> = $._decodeOctetString;
export const _encode_IRI_to_IRI_Correlation: $.ASN1Encoder<IRI_to_IRI_Correlation> = $._encodeOctetString;


/* eslint-enable */
