/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuGetParameter_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuGetParameter-specific ::= INTEGER
 *    {  unknownParameter                 (0)
 *    }
 * ```
 */
export
type DiagnosticCltuGetParameter_specific = INTEGER;

/**
 * @summary DiagnosticCltuGetParameter_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuGetParameter_specific_unknownParameter: DiagnosticCltuGetParameter_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuGetParameter_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticCltuGetParameter_specific = DiagnosticCltuGetParameter_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticCltuGetParameter_specific: $.ASN1Decoder<DiagnosticCltuGetParameter_specific> = $._decodeInteger;
export const _encode_DiagnosticCltuGetParameter_specific: $.ASN1Encoder<DiagnosticCltuGetParameter_specific> = $._encodeInteger;


/* eslint-enable */
