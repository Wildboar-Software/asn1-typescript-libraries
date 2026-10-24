/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GeneralProblem
 * @description
 *
 * Problem code for a ROSE APDU as a whole, carried in a Reject APDU (ECMA-165
 * §11.3.3.4, Annex G).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
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
 * @description
 *
 * The APDU type identifier is not one of the types defined in clause 11
 * (ECMA-165 Annex G). Carried in a Reject APDU (§11.3.3.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const GeneralProblem_unrecognisedPDU: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unrecognisedPDU
 * @description Alias of {@link GeneralProblem_unrecognisedPDU}.
 * @constant
 * @type {number}
 */
export
const unrecognisedPDU: GeneralProblem = GeneralProblem_unrecognisedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedPDU
 * @description
 *
 * The APDU structure does not conform to clause 11 (ECMA-165 Annex G). Carried
 * in a Reject APDU (§11.3.3.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const GeneralProblem_mistypedPDU: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mistypedPDU
 * @description Alias of {@link GeneralProblem_mistypedPDU}.
 * @constant
 * @type {number}
 */
export
const mistypedPDU: GeneralProblem = GeneralProblem_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @description
 *
 * The APDU does not conform to the notation and encoding rules of ITU-T X.680
 * and X.690 (ECMA-165 Annex G). Carried in a Reject APDU (§11.3.3.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const GeneralProblem_badlyStructuredPDU: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary badlyStructuredPDU
 * @description Alias of {@link GeneralProblem_badlyStructuredPDU}.
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
