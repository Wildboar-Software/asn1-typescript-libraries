/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRafGet_specific
 * @description
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
 * @constant
 * @type {number}
 */
export
const DiagnosticRafGet_specific_unknownParameter: DiagnosticRafGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticRafGet_specific = DiagnosticRafGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRafGet_specific: $.ASN1Decoder<DiagnosticRafGet_specific> = $._decodeInteger;
export const _encode_DiagnosticRafGet_specific: $.ASN1Encoder<DiagnosticRafGet_specific> = $._encodeInteger;


/* eslint-enable */
