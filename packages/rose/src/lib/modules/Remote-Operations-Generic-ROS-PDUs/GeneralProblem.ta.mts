/* eslint-disable */
import {
  type INTEGER,
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
 * @summary GeneralProblem
 * @description
 *
 * Fundamental problem with the form or structure of a `ROS` PDU, carried in `Reject.problem.general` (ITU-T Rec. X.880 (07/94) §9.6.3). Some mappings handle these inside the communications infrastructure.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  INTEGER {
 *   unrecognizedPDU(0), mistypedPDU(1), badlyStructuredPDU(2)}
 * ```
 */
export type GeneralProblem = INTEGER;


/**
 * @summary GeneralProblem_unrecognizedPDU
 * @description Tag of the PDU is not one of the `ROS` alternatives (X.880 §9.6.3 a).
 * @constant
 * @type {number}
 */
export const GeneralProblem_unrecognizedPDU = 0 satisfies GeneralProblem; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary GeneralProblem_unrecognizedPDU
 * @description Tag of the PDU is not one of the `ROS` alternatives (X.880 §9.6.3 a).
 * @constant
 * @type {number}
 */
export const unrecognizedPDU = GeneralProblem_unrecognizedPDU satisfies GeneralProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary GeneralProblem_mistypedPDU
 * @description PDU is recognized but its structure does not match the applicable definition (X.880 §9.6.3 b).
 * @constant
 * @type {number}
 */
export const GeneralProblem_mistypedPDU = 1 satisfies GeneralProblem; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary GeneralProblem_mistypedPDU
 * @description PDU is recognized but its structure does not match the applicable definition (X.880 §9.6.3 b).
 * @constant
 * @type {number}
 */
export const mistypedPDU = GeneralProblem_mistypedPDU satisfies GeneralProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @description Structure of the PDU cannot be determined from the expected abstract syntax (X.880 §9.6.3 c).
 * @constant
 * @type {number}
 */
export const GeneralProblem_badlyStructuredPDU = 2 satisfies GeneralProblem; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @description Structure of the PDU cannot be determined from the expected abstract syntax (X.880 §9.6.3 c).
 * @constant
 * @type {number}
 */
export const badlyStructuredPDU = GeneralProblem_badlyStructuredPDU satisfies GeneralProblem; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_GeneralProblem = $._decodeInteger;




export const _encode_GeneralProblem = $._encodeInteger;


/* eslint-enable */
