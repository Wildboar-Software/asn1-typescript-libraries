/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRcfGet_specific
 * @description
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
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfGet_specific_unknownParameter: DiagnosticRcfGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticRcfGet_specific = DiagnosticRcfGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRcfGet_specific: $.ASN1Decoder<DiagnosticRcfGet_specific> = $._decodeInteger;
export const _encode_DiagnosticRcfGet_specific: $.ASN1Encoder<DiagnosticRcfGet_specific> = $._encodeInteger;


/* eslint-enable */
