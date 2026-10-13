/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspInvokeDirective_specific
 * @description
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
 * @constant
 * @type {number}
 */
export
const DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed: DiagnosticFspInvokeDirective_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed
 * @constant
 * @type {number}
 */
export
const directiveInvocationNotAllowed: DiagnosticFspInvokeDirective_specific = DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence
 * @constant
 * @type {number}
 */
export
const DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence: DiagnosticFspInvokeDirective_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence
 * @constant
 * @type {number}
 */
export
const directiveIdentificationOutOfSequence: DiagnosticFspInvokeDirective_specific = DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveError
 * @constant
 * @type {number}
 */
export
const DiagnosticFspInvokeDirective_specific_directiveError: DiagnosticFspInvokeDirective_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveError
 * @constant
 * @type {number}
 */
export
const directiveError: DiagnosticFspInvokeDirective_specific = DiagnosticFspInvokeDirective_specific_directiveError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticFspInvokeDirective_specific: $.ASN1Decoder<DiagnosticFspInvokeDirective_specific> = $._decodeInteger;
export const _encode_DiagnosticFspInvokeDirective_specific: $.ASN1Encoder<DiagnosticFspInvokeDirective_specific> = $._encodeInteger;


/* eslint-enable */
