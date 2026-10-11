import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary Errors
 * @description
 *
 * Parameterized information object set: the union of `&Errors` from the
 * given operations. It is not an encoded ASN.1 type.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Errors{OPERATION:Operations} ERROR ::= {Operations.&Errors}
 * ```
 *
 * @type {ERROR}
 */
export type Errors = ERROR;
