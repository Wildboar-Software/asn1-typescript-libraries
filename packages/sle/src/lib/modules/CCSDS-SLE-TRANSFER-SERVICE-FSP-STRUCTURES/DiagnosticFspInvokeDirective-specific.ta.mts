/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspInvokeDirective_specific
 * @description
 * 
 * FSP-specific rejection codes for FSP-INVOKE-DIRECTIVE. Duplicate invoke-ID
 * and other reason are carried in the `common` alternative.
 * 
 * CCSDS 912.3-B-3, section 3.12.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspInvokeDirective-specific ::= INTEGER
 *    {  directiveInvocationNotAllowed          (0)
 *    ,  directiveIdentificationOutOfSequence   (1)
 *    ,  directiveError                         (2)
 *    }
 * ```
 */
export
type DiagnosticFspInvokeDirective_specific = INTEGER;

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed
 * @description
 * 
 * FSP-INVOKE-DIRECTIVE is not enabled for this service instance. For one
 * telecommand VC, at most one instance is configured to invoke it.
 * 
 * CCSDS 912.3-B-3, sections 3.12.2.8 and 3.12.1.2.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed = 0 satisfies DiagnosticFspInvokeDirective_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed
 * @description
 * 
 * This instance is not enabled to invoke directives (CCSDS 912.3-B-3, section
 * 3.12.2.8).
 * @constant
 * @type {number}
 */
export
const directiveInvocationNotAllowed = DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed satisfies DiagnosticFspInvokeDirective_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence
 * @description
 * 
 * The directive identification is not the value the provider expected.
 * 
 * CCSDS 912.3-B-3, sections 3.12.2.8 and 3.12.2.5.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence = 1 satisfies DiagnosticFspInvokeDirective_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence
 * @description
 * 
 * The directive identification is not the expected value (CCSDS 912.3-B-3,
 * section 3.12.2.8).
 * @constant
 * @type {number}
 */
export
const directiveIdentificationOutOfSequence = DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence satisfies DiagnosticFspInvokeDirective_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveError
 * @description
 * 
 * The provider found an error in the directive. The directive may be unknown,
 * or the associated parameter may be in error, for example out of range.
 * 
 * CCSDS 912.3-B-3, section 3.12.2.8.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspInvokeDirective_specific_directiveError = 2 satisfies DiagnosticFspInvokeDirective_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveError
 * @description
 * 
 * The directive is unknown or its parameter is in error (CCSDS 912.3-B-3,
 * section 3.12.2.8).
 * @constant
 * @type {number}
 */
export
const directiveError = DiagnosticFspInvokeDirective_specific_directiveError satisfies DiagnosticFspInvokeDirective_specific; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticFspInvokeDirective_specific: $.ASN1Decoder<DiagnosticFspInvokeDirective_specific> = $._decodeInteger;
export const _encode_DiagnosticFspInvokeDirective_specific: $.ASN1Encoder<DiagnosticFspInvokeDirective_specific> = $._encodeInteger;


/* eslint-enable */
