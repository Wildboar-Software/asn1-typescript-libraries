/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuGetParameter_specific
 * @description
 * 
 * FCLTU-specific negative result for CLTU-GET-PARAMETER. The provider should
 * report the first failure in the order given in section 3.10.2.8. duplicate
 * invoke id and other reason are the common alternative. CCSDS 912.1-B-5,
 * sections 3.10.2.8 and 3.1.3.4.
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
 * @description
 *
 * The cltu-parameter value does not name an FCLTU service parameter the
 * provider recognizes. Listed after duplicate invoke id. CCSDS 912.1-B-5,
 * section 3.10.2.8.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuGetParameter_specific_unknownParameter: 0 = 0 satisfies DiagnosticCltuGetParameter_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuGetParameter_specific_unknownParameter
 * @description
 *
 * cltu-parameter is not a parameter this provider recognizes (CCSDS 912.1-B-5,
 * section 3.10.2.8).
 * @constant
 * @type {number}
 */
export
const unknownParameter: 0 = DiagnosticCltuGetParameter_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticCltuGetParameter_specific: $.ASN1Decoder<DiagnosticCltuGetParameter_specific> = $._decodeInteger;
export const _encode_DiagnosticCltuGetParameter_specific: $.ASN1Encoder<DiagnosticCltuGetParameter_specific> = $._encodeInteger;


/* eslint-enable */
