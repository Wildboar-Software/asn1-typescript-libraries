/* eslint-disable */
import {
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary InvokeProblem
 * @description
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
export type InvokeProblem = INTEGER;


/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export const InvokeProblem_duplicateInvocation: InvokeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export const duplicateInvocation: InvokeProblem = InvokeProblem_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const InvokeProblem_unrecognizedOperation: InvokeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const unrecognizedOperation: InvokeProblem = InvokeProblem_unrecognizedOperation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export const InvokeProblem_mistypedArgument: InvokeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export const mistypedArgument: InvokeProblem = InvokeProblem_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export const InvokeProblem_resourceLimitation: InvokeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export const resourceLimitation: InvokeProblem = InvokeProblem_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export const InvokeProblem_releaseInProgress: InvokeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export const releaseInProgress: InvokeProblem = InvokeProblem_releaseInProgress; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_unrecognizedLinkedId
 * @constant
 * @type {number}
 */
export const InvokeProblem_unrecognizedLinkedId: InvokeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_unrecognizedLinkedId
 * @constant
 * @type {number}
 */
export const unrecognizedLinkedId: InvokeProblem = InvokeProblem_unrecognizedLinkedId; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @constant
 * @type {number}
 */
export const InvokeProblem_linkedResponseUnexpected: InvokeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @constant
 * @type {number}
 */
export const linkedResponseUnexpected: InvokeProblem = InvokeProblem_linkedResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_unexpectedLinkedOperation
 * @constant
 * @type {number}
 */
export const InvokeProblem_unexpectedLinkedOperation: InvokeProblem = 7; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InvokeProblem_unexpectedLinkedOperation
 * @constant
 * @type {number}
 */
export const unexpectedLinkedOperation: InvokeProblem = InvokeProblem_unexpectedLinkedOperation; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_InvokeProblem = $._decodeInteger;




export const _encode_InvokeProblem = $._encodeInteger;


/* eslint-enable */
