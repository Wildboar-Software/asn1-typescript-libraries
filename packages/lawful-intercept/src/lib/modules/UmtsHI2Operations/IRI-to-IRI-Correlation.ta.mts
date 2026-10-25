/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRI_to_IRI_Correlation
 * @description
 * 
 * Correlates this IRI to other IRI. Table 7.2: a SIP correlation number, either
 * Call-id or another implementation-dependent value that identifies the SIP
 * messages of one session. Table 7.6 uses it to correlate an XCAP request with
 * its response. Annex B.3 does not define the octet layout.
 * 
 * 3GPP TS 33.108, clause 7.1.3 and table 7.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
