/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRocfGet_specific
 * @description
 * 
 * ROCF-GET-PARAMETER diagnostic particular to this service. Used when the
 * requested parameter name is not one the provider recognizes. The duplicate
 * invoke-ID and other-reason diagnostics are on the common alternative of
 * DiagnosticRocfGet.
 *
 * CCSDS 911.5-B-4, section 3.10.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRocfGet-specific ::= INTEGER
 *    {  unknownParameter        (0)
 *    }
 * ```
 */
export
type DiagnosticRocfGet_specific = INTEGER;

/**
 * @summary DiagnosticRocfGet_specific_unknownParameter
 * @description
 * 
 * rocf-parameter does not identify an ROCF parameter the provider recognizes.
 * The readable names are those in table 3-11. CCSDS 911.5-B-4, section
 * 3.10.2.8.
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfGet_specific_unknownParameter: DiagnosticRocfGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfGet_specific_unknownParameter
 * @description
 * 
 * GET-PARAMETER was rejected because the provider does not recognize the
 * requested parameter (CCSDS 911.5-B-4, section 3.10.2.8).
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticRocfGet_specific = DiagnosticRocfGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRocfGet_specific: $.ASN1Decoder<DiagnosticRocfGet_specific> = $._decodeInteger;
export const _encode_DiagnosticRocfGet_specific: $.ASN1Encoder<DiagnosticRocfGet_specific> = $._encodeInteger;


/* eslint-enable */
