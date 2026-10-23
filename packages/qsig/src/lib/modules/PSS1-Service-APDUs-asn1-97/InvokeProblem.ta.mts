/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeProblem
 * @description
 *
 * Problem code for an Invoke APDU, carried in a Reject APDU (ECMA-165
 * §11.3.3.4, Annex G).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
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
 * @description
 *
 * The invoke identifier violates the assignment rules of ITU-T X.880 (ECMA-165
 * Annex G). Table 34 spells the constraint `invoke-duplicateInvocation` and
 * says the identifier must be unambiguous. Annex G spells the problem
 * duplicatedInvocation.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const InvokeProblem_duplicateInvocation: InvokeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary duplicateInvocation
 * @description Alias of {@link InvokeProblem_duplicateInvocation}.
 * @constant
 * @type {number}
 */
export
const duplicateInvocation: InvokeProblem = InvokeProblem_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognisedOperation
 * @description
 *
 * The operation is not one supported by the receiver (ECMA-165 Annex G). A
 * Destination PINX shall reject an operation value it does not support (§8.2).
 * The Interpretation APDU can change what is done with that Reject (§8.1.2).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const InvokeProblem_unrecognisedOperation: InvokeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unrecognisedOperation
 * @description Alias of {@link InvokeProblem_unrecognisedOperation}.
 * @constant
 * @type {number}
 */
export
const unrecognisedOperation: InvokeProblem = InvokeProblem_unrecognisedOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @description
 *
 * The operation argument is not of the expected type (ECMA-165 Annex G,
 * §11.3.3.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const InvokeProblem_mistypedArgument: InvokeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mistypedArgument
 * @description Alias of {@link InvokeProblem_mistypedArgument}.
 * @constant
 * @type {number}
 */
export
const mistypedArgument: InvokeProblem = InvokeProblem_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @description
 *
 * The performing PINX cannot perform the invoked operation because of resource
 * limitation (ECMA-165 Annex G). Table 34 names the corresponding
 * `invoke-resourceLimitation` exception and does not attach it to a constraint
 * in the module.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const InvokeProblem_resourceLimitation: InvokeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary resourceLimitation
 * @description Alias of {@link InvokeProblem_resourceLimitation}.
 * @constant
 * @type {number}
 */
export
const resourceLimitation: InvokeProblem = InvokeProblem_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_initiatorReleasing
 * @description
 *
 * The association initiator will not perform the operation because it is about
 * to release the application association (ECMA-165 Annex G). The Table 34
 * exception name is `invoke-releaseInProgress`.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const InvokeProblem_initiatorReleasing: InvokeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary initiatorReleasing
 * @description Alias of {@link InvokeProblem_initiatorReleasing}.
 * @constant
 * @type {number}
 */
export
const initiatorReleasing: InvokeProblem = InvokeProblem_initiatorReleasing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognisedLinkedId
 * @description
 *
 * No operation is in progress with an invoke identifier equal to the linked
 * identifier (ECMA-165 Annex G). Table 34 requires `linkedId` to identify an
 * outstanding operation.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const InvokeProblem_unrecognisedLinkedId: InvokeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unrecognisedLinkedId
 * @description Alias of {@link InvokeProblem_unrecognisedLinkedId}.
 * @constant
 * @type {number}
 */
export
const unrecognisedLinkedId: InvokeProblem = InvokeProblem_unrecognisedLinkedId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @description
 *
 * The operation identified by the linked identifier is not a parent operation
 * (ECMA-165 Annex G). Table 34 requires that operation to have one or more
 * linked operations.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const InvokeProblem_linkedResponseUnexpected: InvokeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary linkedResponseUnexpected
 * @description Alias of {@link InvokeProblem_linkedResponseUnexpected}.
 * @constant
 * @type {number}
 */
export
const linkedResponseUnexpected: InvokeProblem = InvokeProblem_linkedResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unexpectedChildOperation
 * @description
 *
 * The child operation is not one that the parent operation, identified by the
 * linked identifier, allows (ECMA-165 Annex G). Table 34 requires the opcode to
 * be in the `&Linked` field of that operation; the exception name is
 * `invoke-unexpectedLinkedOperation`.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const InvokeProblem_unexpectedChildOperation: InvokeProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unexpectedChildOperation
 * @description Alias of {@link InvokeProblem_unexpectedChildOperation}.
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
