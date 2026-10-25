/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ReturnErrorProblem
 * @description
 *
 * Problem code for a return-error APDU, carried in a Reject APDU (ECMA-165
 * §11.3.3.4, Annex G).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnErrorProblem  ::=  INTEGER {
 *     unrecognisedInvocation(0),
 *     errorResponseUnexpected(1),
 *     unrecognisedError(2),
 *     unexpectedError(3),
 *     mistypedParameter(4)
 * }
 * ```
 */
export
type ReturnErrorProblem = INTEGER;

/**
 * @summary ReturnErrorProblem_unrecognisedInvocation
 * @description
 *
 * No operation with this invoke identifier is in progress (ECMA-165 Annex G,
 * §11.3.3.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ReturnErrorProblem_unrecognisedInvocation: ReturnErrorProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unrecognisedInvocation
 * @description Alias of {@link ReturnErrorProblem_unrecognisedInvocation}.
 * @constant
 * @type {number}
 */
export
const unrecognisedInvocation: ReturnErrorProblem = ReturnErrorProblem_unrecognisedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @description
 *
 * The invoked operation does not report failure (ECMA-165 Annex G, §11.3.3.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ReturnErrorProblem_errorResponseUnexpected: ReturnErrorProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary errorResponseUnexpected
 * @description Alias of {@link ReturnErrorProblem_errorResponseUnexpected}.
 * @constant
 * @type {number}
 */
export
const errorResponseUnexpected: ReturnErrorProblem = ReturnErrorProblem_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unrecognisedError
 * @description
 *
 * The reported error is not one expected (ECMA-165 Annex G). Table 34 raises
 * this when the error code is outside the Errors set.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ReturnErrorProblem_unrecognisedError: ReturnErrorProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unrecognisedError
 * @description Alias of {@link ReturnErrorProblem_unrecognisedError}.
 * @constant
 * @type {number}
 */
export
const unrecognisedError: ReturnErrorProblem = ReturnErrorProblem_unrecognisedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unexpectedError
 * @description
 *
 * The reported error is not one that the invoked operation may report (ECMA-165
 * Annex G). Table 34 requires the code to be in that operation's `&Errors`.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ReturnErrorProblem_unexpectedError: ReturnErrorProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unexpectedError
 * @description Alias of {@link ReturnErrorProblem_unexpectedError}.
 * @constant
 * @type {number}
 */
export
const unexpectedError: ReturnErrorProblem = ReturnErrorProblem_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @description
 *
 * The error parameter is not of the expected type (ECMA-165 Annex G,
 * §11.3.3.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ReturnErrorProblem_mistypedParameter: ReturnErrorProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mistypedParameter
 * @description Alias of {@link ReturnErrorProblem_mistypedParameter}.
 * @constant
 * @type {number}
 */
export
const mistypedParameter: ReturnErrorProblem = ReturnErrorProblem_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ReturnErrorProblem: $.ASN1Decoder<ReturnErrorProblem> = $._decodeInteger;

export
const _encode_ReturnErrorProblem: $.ASN1Encoder<ReturnErrorProblem> = $._encodeInteger;

/* eslint-enable */
