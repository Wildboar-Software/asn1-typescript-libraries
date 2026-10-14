/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRocfGet_specific
 * @description
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
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfGet_specific_unknownParameter: DiagnosticRocfGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticRocfGet_specific = DiagnosticRocfGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRocfGet_specific: $.ASN1Decoder<DiagnosticRocfGet_specific> = $._decodeInteger;
export const _encode_DiagnosticRocfGet_specific: $.ASN1Encoder<DiagnosticRocfGet_specific> = $._encodeInteger;


/* eslint-enable */
