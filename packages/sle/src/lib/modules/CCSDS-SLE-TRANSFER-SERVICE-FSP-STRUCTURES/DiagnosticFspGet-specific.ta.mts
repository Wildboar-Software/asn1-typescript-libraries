/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspGet_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspGet-specific ::= INTEGER
 *    {  unknownParameter        (0)
 *    }
 * ```
 */
export
type DiagnosticFspGet_specific = INTEGER;

/**
 * @summary DiagnosticFspGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const DiagnosticFspGet_specific_unknownParameter: DiagnosticFspGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticFspGet_specific = DiagnosticFspGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticFspGet_specific: $.ASN1Decoder<DiagnosticFspGet_specific> = $._decodeInteger;
export const _encode_DiagnosticFspGet_specific: $.ASN1Encoder<DiagnosticFspGet_specific> = $._encodeInteger;


/* eslint-enable */
