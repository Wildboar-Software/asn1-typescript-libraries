/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeneralProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeneralProblem  ::=  INTEGER {
 *   unrecognizedComponent(0), mistypedComponent(1), badlyStructuredComponent(2)
 * }
 * ```
 */
export
type GeneralProblem = INTEGER;

/**
 * @summary GeneralProblem_unrecognizedComponent
 * @constant
 * @type {number}
 */
export
const GeneralProblem_unrecognizedComponent: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_unrecognizedComponent
 * @constant
 * @type {number}
 */
export
const unrecognizedComponent: GeneralProblem = GeneralProblem_unrecognizedComponent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedComponent
 * @constant
 * @type {number}
 */
export
const GeneralProblem_mistypedComponent: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedComponent
 * @constant
 * @type {number}
 */
export
const mistypedComponent: GeneralProblem = GeneralProblem_mistypedComponent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredComponent
 * @constant
 * @type {number}
 */
export
const GeneralProblem_badlyStructuredComponent: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredComponent
 * @constant
 * @type {number}
 */
export
const badlyStructuredComponent: GeneralProblem = GeneralProblem_badlyStructuredComponent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GeneralProblem: $.ASN1Decoder<GeneralProblem> = $._decodeInteger;
export const _encode_GeneralProblem: $.ASN1Encoder<GeneralProblem> = $._encodeInteger;


/* eslint-enable */
