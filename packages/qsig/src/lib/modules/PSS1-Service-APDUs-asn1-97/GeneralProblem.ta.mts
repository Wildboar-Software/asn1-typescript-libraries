/* eslint-disable */
import {
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
 *     unrecognisedPDU(0),
 *     mistypedPDU(1),
 *     badlyStructuredPDU(2)
 * }
 * ```
 */
export
type GeneralProblem = INTEGER;

/**
 * @summary GeneralProblem_unrecognisedPDU
 * @constant
 * @type {number}
 */
export
const GeneralProblem_unrecognisedPDU: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_unrecognisedPDU
 * @constant
 * @type {number}
 */
export
const unrecognisedPDU: GeneralProblem = GeneralProblem_unrecognisedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedPDU
 * @constant
 * @type {number}
 */
export
const GeneralProblem_mistypedPDU: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedPDU
 * @constant
 * @type {number}
 */
export
const mistypedPDU: GeneralProblem = GeneralProblem_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export
const GeneralProblem_badlyStructuredPDU: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export
const badlyStructuredPDU: GeneralProblem = GeneralProblem_badlyStructuredPDU; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_GeneralProblem: $.ASN1Decoder<GeneralProblem> = $._decodeInteger;

export
const _encode_GeneralProblem: $.ASN1Encoder<GeneralProblem> = $._encodeInteger;

/* eslint-enable */
