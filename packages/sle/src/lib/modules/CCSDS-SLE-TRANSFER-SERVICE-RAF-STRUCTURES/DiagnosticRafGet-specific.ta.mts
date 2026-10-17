/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRafGet_specific
 * @description
 * 
 * RAF-specific rejection codes for RAF-GET-PARAMETER. Duplicate invoke-ID and
 * other reason are carried in the `common` alternative.
 * 
 * CCSDS 911.1-B-5, section 3.10.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRafGet-specific ::= INTEGER
 *     {   unknownParameter                      (0)
 *     }
 * ```
 */
export
type DiagnosticRafGet_specific = INTEGER;

/**
 * @summary DiagnosticRafGet_specific_unknownParameter
 * @description
 * 
 * The `raf-parameter` in the invocation does not identify an RAF parameter the
 * provider recognizes. The recognized set is table 3-11.
 * 
 * CCSDS 911.1-B-5, section 3.10.2.8.
 * @constant
 * @type {number}
 */
export
const DiagnosticRafGet_specific_unknownParameter: DiagnosticRafGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafGet_specific_unknownParameter
 * @description
 * 
 * `raf-parameter` is not a recognized RAF parameter (CCSDS 911.1-B-5, section
 * 3.10.2.8).
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticRafGet_specific = DiagnosticRafGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRafGet_specific: $.ASN1Decoder<DiagnosticRafGet_specific> = $._decodeInteger;
export const _encode_DiagnosticRafGet_specific: $.ASN1Encoder<DiagnosticRafGet_specific> = $._encodeInteger;


/* eslint-enable */
