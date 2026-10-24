/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRcfGet_specific
 * @description
 *
 * RCF-GET-PARAMETER diagnostic particular to this service. Duplicate Invoke-ID
 * and other reason are the common alternative.
 *
 * CCSDS 911.2-B-4, section 3.10.2.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRcfGet-specific ::= INTEGER
 *     {   unknownParameter                      (0)
 *     }
 * ```
 */
export
type DiagnosticRcfGet_specific = INTEGER;

/**
 * @summary DiagnosticRcfGet_specific_unknownParameter
 * @description
 *
 * rcf-parameter does not identify an RCF parameter the provider recognizes.
 * The recognized names are those listed for RcfParameterName in table 3-11.
 *
 * CCSDS 911.2-B-4, section 3.10.2.8.
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfGet_specific_unknownParameter: DiagnosticRcfGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfGet_specific_unknownParameter
 * @description
 *
 * The requested parameter is not an RCF parameter this provider recognizes
 * (CCSDS 911.2-B-4, section 3.10.2.8).
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticRcfGet_specific = DiagnosticRcfGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRcfGet_specific: $.ASN1Decoder<DiagnosticRcfGet_specific> = $._decodeInteger;
export const _encode_DiagnosticRcfGet_specific: $.ASN1Encoder<DiagnosticRcfGet_specific> = $._encodeInteger;


/* eslint-enable */
