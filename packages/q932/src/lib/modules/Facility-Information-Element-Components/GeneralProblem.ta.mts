/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeneralProblem
 * @description
 * 
 * Problem detected by the Q.932 protocol entity, carried in a reject as the
 * `general` alternative. Integer 0 means the component type is not recognized.
 * Integer 1 means the component is mistyped. Integer 2 means the component is
 * badly structured.
 *
 * ITU-T Rec. Q.932 (05/1998) Table 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 8-7 bis.
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
 * @description
 * 
 * The component type is not one of invoke, return result, return error, or
 * reject. ITU-T Rec. Q.932 (05/1998) Table 8-7; ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const GeneralProblem_unrecognizedComponent: 0 = 0 satisfies GeneralProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_unrecognizedComponent
 * @description
 * 
 * The component type is not one of invoke, return result, return error, or
 * reject. ITU-T Rec. Q.932 (05/1998) Table 8-7; ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const unrecognizedComponent: 0 = GeneralProblem_unrecognizedComponent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedComponent
 * @description
 * 
 * The component is recognized but does not conform to its type. ITU-T Rec.
 * Q.932 (05/1998) Table 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7
 * bis.
 * 
 * @constant
 * @type {number}
 */
export
const GeneralProblem_mistypedComponent: 1 = 1 satisfies GeneralProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedComponent
 * @description
 * 
 * The component is recognized but does not conform to its type. ITU-T Rec.
 * Q.932 (05/1998) Table 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7
 * bis.
 * 
 * @constant
 * @type {number}
 */
export
const mistypedComponent: 1 = GeneralProblem_mistypedComponent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredComponent
 * @description
 * 
 * The component structure is badly formed. ITU-T Rec. Q.932 (05/1998) Table
 * 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const GeneralProblem_badlyStructuredComponent: 2 = 2 satisfies GeneralProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredComponent
 * @description
 * 
 * The component structure is badly formed. ITU-T Rec. Q.932 (05/1998) Table
 * 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const badlyStructuredComponent: 2 = GeneralProblem_badlyStructuredComponent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GeneralProblem: $.ASN1Decoder<GeneralProblem> = $._decodeInteger;
export const _encode_GeneralProblem: $.ASN1Encoder<GeneralProblem> = $._encodeInteger;


/* eslint-enable */
