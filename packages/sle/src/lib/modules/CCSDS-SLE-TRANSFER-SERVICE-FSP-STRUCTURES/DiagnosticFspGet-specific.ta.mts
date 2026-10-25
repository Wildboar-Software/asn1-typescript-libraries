/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspGet_specific
 * @description
 * 
 * FSP-specific rejection code for FSP-GET-PARAMETER. Duplicate invoke-ID and
 * other reason are carried in the `common` alternative.
 * 
 * CCSDS 912.3-B-3, section 3.10.2.8.
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
 * @description
 * 
 * The `fspParameter` value does not identify an FSP service parameter the
 * provider recognizes.
 * 
 * CCSDS 912.3-B-3, section 3.10.2.8.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspGet_specific_unknownParameter: 0 = 0 satisfies DiagnosticFspGet_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspGet_specific_unknownParameter
 * @description
 * 
 * The requested name is not an FSP service parameter (CCSDS 912.3-B-3, section
 * 3.10.2.8).
 * @constant
 * @type {number}
 */
export
const unknownParameter: 0 = DiagnosticFspGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticFspGet_specific: $.ASN1Decoder<DiagnosticFspGet_specific> = $._decodeInteger;
export const _encode_DiagnosticFspGet_specific: $.ASN1Encoder<DiagnosticFspGet_specific> = $._encodeInteger;


/* eslint-enable */
