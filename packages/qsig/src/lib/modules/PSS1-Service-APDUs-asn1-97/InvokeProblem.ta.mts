/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InvokeProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeProblem  ::=  INTEGER {
 *     duplicateInvocation(0),
 *     unrecognisedOperation(1),
 *     mistypedArgument(2),
 *     resourceLimitation(3),
 *     initiatorReleasing(4),
 *     unrecognisedLinkedId(5),
 *     linkedResponseUnexpected(6),
 *     unexpectedChildOperation(7)
 * }
 * ```
 */
export
type InvokeProblem = INTEGER;

/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export
const InvokeProblem_duplicateInvocation: InvokeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export
const duplicateInvocation: InvokeProblem = InvokeProblem_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognisedOperation
 * @constant
 * @type {number}
 */
export
const InvokeProblem_unrecognisedOperation: InvokeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognisedOperation
 * @constant
 * @type {number}
 */
export
const unrecognisedOperation: InvokeProblem = InvokeProblem_unrecognisedOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export
const InvokeProblem_mistypedArgument: InvokeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export
const mistypedArgument: InvokeProblem = InvokeProblem_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export
const InvokeProblem_resourceLimitation: InvokeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export
const resourceLimitation: InvokeProblem = InvokeProblem_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_initiatorReleasing
 * @constant
 * @type {number}
 */
export
const InvokeProblem_initiatorReleasing: InvokeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_initiatorReleasing
 * @constant
 * @type {number}
 */
export
const initiatorReleasing: InvokeProblem = InvokeProblem_initiatorReleasing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognisedLinkedId
 * @constant
 * @type {number}
 */
export
const InvokeProblem_unrecognisedLinkedId: InvokeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognisedLinkedId
 * @constant
 * @type {number}
 */
export
const unrecognisedLinkedId: InvokeProblem = InvokeProblem_unrecognisedLinkedId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @constant
 * @type {number}
 */
export
const InvokeProblem_linkedResponseUnexpected: InvokeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @constant
 * @type {number}
 */
export
const linkedResponseUnexpected: InvokeProblem = InvokeProblem_linkedResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unexpectedChildOperation
 * @constant
 * @type {number}
 */
export
const InvokeProblem_unexpectedChildOperation: InvokeProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unexpectedChildOperation
 * @constant
 * @type {number}
 */
export
const unexpectedChildOperation: InvokeProblem = InvokeProblem_unexpectedChildOperation; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_InvokeProblem: $.ASN1Decoder<InvokeProblem> = $._decodeInteger;

export
const _encode_InvokeProblem: $.ASN1Encoder<InvokeProblem> = $._encodeInteger;

/* eslint-enable */
