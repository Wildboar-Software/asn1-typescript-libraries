/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InvokeProblem
 * @description
 * 
 * Problem detected by the supplementary-service entity for an invoke, carried
 * in a reject as the `invoke` alternative.
 *
 * Integer 4 is `releaseInProgress`. The 1998 module names that value
 * `initiatorReleasing`. Integer 7 is `unexpectedLinkedOperation`. The 1998
 * module names that value `unexpectedChildOperation`.
 *
 * An unrecognized operation (integer 1) is rejected without affecting the rest
 * of the message. ITU-T Rec. Q.932 (05/1998) §6.3.6.1 and Table 8-7; ITU-T Rec.
 * Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeProblem  ::=  INTEGER {
 *   duplicateInvocation(0), unrecognizedOperation(1), mistypedArgument(2),
 *   resourceLimitation(3), releaseInProgress(4), unrecognizedLinkedId(5),
 *   linkedResponseUnexpected(6), unexpectedLinkedOperation(7)}
 * ```
 */
export
type InvokeProblem = INTEGER;

/**
 * @summary InvokeProblem_duplicateInvocation
 * @description
 * 
 * This invoke identifier is already in use. Identifiers are significant only
 * within one call reference. ITU-T Rec. Q.932 (05/1998) §8.2.3.1.2 and Table
 * 8-7.
 * 
 * @constant
 * @type {number}
 */
export
const InvokeProblem_duplicateInvocation: InvokeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_duplicateInvocation
 * @description
 * 
 * This invoke identifier is already in use. Identifiers are significant only
 * within one call reference. ITU-T Rec. Q.932 (05/1998) §8.2.3.1.2 and Table
 * 8-7.
 * 
 * @constant
 * @type {number}
 */
export
const duplicateInvocation: InvokeProblem = InvokeProblem_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedOperation
 * @description
 * 
 * The operation is not implemented. Return this reject and continue to handle
 * the rest of the message. ITU-T Rec. Q.932 (05/1998) §6.3.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const InvokeProblem_unrecognizedOperation: InvokeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedOperation
 * @description
 * 
 * The operation is not implemented. Return this reject and continue to handle
 * the rest of the message. ITU-T Rec. Q.932 (05/1998) §6.3.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const unrecognizedOperation: InvokeProblem = InvokeProblem_unrecognizedOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @description
 * 
 * The invoke argument does not match the operation. ITU-T Rec. Q.932 (05/1998)
 * Table 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const InvokeProblem_mistypedArgument: InvokeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @description
 * 
 * The invoke argument does not match the operation. ITU-T Rec. Q.932 (05/1998)
 * Table 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const mistypedArgument: InvokeProblem = InvokeProblem_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @description
 * 
 * The performing entity cannot carry out the operation because of a resource
 * limitation. ITU-T Rec. Q.932 (05/1998) Table 8-7.
 * 
 * @constant
 * @type {number}
 */
export
const InvokeProblem_resourceLimitation: InvokeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @description
 * 
 * The performing entity cannot carry out the operation because of a resource
 * limitation. ITU-T Rec. Q.932 (05/1998) Table 8-7.
 * 
 * @constant
 * @type {number}
 */
export
const resourceLimitation: InvokeProblem = InvokeProblem_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_releaseInProgress
 * @description
 * 
 * Amendment 1 name for integer 4. The 1998 module calls this value
 * `initiatorReleasing`. ITU-T Rec. Q.932 (05/1998) Table 8-7; ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const InvokeProblem_releaseInProgress: InvokeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_releaseInProgress
 * @description
 * 
 * Amendment 1 name for integer 4. The 1998 module calls this value
 * `initiatorReleasing`. ITU-T Rec. Q.932 (05/1998) Table 8-7; ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const releaseInProgress: InvokeProblem = InvokeProblem_releaseInProgress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedLinkedId
 * @description
 * 
 * The linked identifier does not identify an outstanding operation. ITU-T Rec.
 * Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const InvokeProblem_unrecognizedLinkedId: InvokeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedLinkedId
 * @description
 * 
 * The linked identifier does not identify an outstanding operation. ITU-T Rec.
 * Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const unrecognizedLinkedId: InvokeProblem = InvokeProblem_unrecognizedLinkedId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @description
 * 
 * The identified operation has no linked operations. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const InvokeProblem_linkedResponseUnexpected: InvokeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @description
 * 
 * The identified operation has no linked operations. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const linkedResponseUnexpected: InvokeProblem = InvokeProblem_linkedResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unexpectedLinkedOperation
 * @description
 * 
 * The opcode is not in the parent operation's `&Linked` set. The 1998 module
 * calls integer 7 `unexpectedChildOperation`. ITU-T Rec. Q.932 (05/1998) Table
 * 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const InvokeProblem_unexpectedLinkedOperation: InvokeProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unexpectedLinkedOperation
 * @description
 * 
 * The opcode is not in the parent operation's `&Linked` set. The 1998 module
 * calls integer 7 `unexpectedChildOperation`. ITU-T Rec. Q.932 (05/1998) Table
 * 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const unexpectedLinkedOperation: InvokeProblem = InvokeProblem_unexpectedLinkedOperation; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_InvokeProblem: $.ASN1Decoder<InvokeProblem> = $._decodeInteger;
export const _encode_InvokeProblem: $.ASN1Encoder<InvokeProblem> = $._encodeInteger;


/* eslint-enable */
