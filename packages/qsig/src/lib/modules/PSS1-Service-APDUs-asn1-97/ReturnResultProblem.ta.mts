/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ReturnResultProblem
 * @description
 *
 * Problem code for a return-result APDU, carried in a Reject APDU (ECMA-165
 * §11.3.3.4, Annex G).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnResultProblem  ::=  INTEGER {
 *     unrecognisedInvocation(0),
 *     resultResponseUnexpected(1),
 *     mistypedResult(2)
 * }
 * ```
 */
export
type ReturnResultProblem = INTEGER;

/**
 * @summary ReturnResultProblem_unrecognisedInvocation
 * @description
 *
 * No operation with this invoke identifier is in progress (ECMA-165 Annex G).
 * Table 34 also uses it when the result opcode is not the operation identified
 * by that invoke identifier.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ReturnResultProblem_unrecognisedInvocation = 0 satisfies ReturnResultProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unrecognisedInvocation
 * @description Alias of {@link ReturnResultProblem_unrecognisedInvocation}.
 * @constant
 * @type {number}
 */
export
const unrecognisedInvocation = ReturnResultProblem_unrecognisedInvocation satisfies ReturnResultProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @description
 *
 * The invoked operation does not report a result (ECMA-165 Annex G, §11.3.3.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ReturnResultProblem_resultResponseUnexpected = 1 satisfies ReturnResultProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary resultResponseUnexpected
 * @description Alias of {@link ReturnResultProblem_resultResponseUnexpected}.
 * @constant
 * @type {number}
 */
export
const resultResponseUnexpected = ReturnResultProblem_resultResponseUnexpected satisfies ReturnResultProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_mistypedResult
 * @description
 *
 * The result parameter is not of the expected type (ECMA-165 Annex G,
 * §11.3.3.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ReturnResultProblem_mistypedResult = 2 satisfies ReturnResultProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mistypedResult
 * @description Alias of {@link ReturnResultProblem_mistypedResult}.
 * @constant
 * @type {number}
 */
export
const mistypedResult = ReturnResultProblem_mistypedResult satisfies ReturnResultProblem; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ReturnResultProblem: $.ASN1Decoder<ReturnResultProblem> = $._decodeInteger;

export
const _encode_ReturnResultProblem: $.ASN1Encoder<ReturnResultProblem> = $._encodeInteger;

/* eslint-enable */
