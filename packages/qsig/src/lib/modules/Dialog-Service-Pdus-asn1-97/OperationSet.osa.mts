/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";

/**
 * @summary OperationSet
 * @description
 *
 * Open set of operations that may be invoked or returned inside a dialogue's
 * ROSE APDUs (ECMA-165 §11.3.3.3). Table 33 writes `{...}` and lists no
 * operation. The supplementary service using the dialogue supplies the
 * operations; §8.5 places that outside this Standard.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationSet OPERATION ::= {...}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const OperationSet: (OPERATION)[] = [];

/* eslint-enable */
