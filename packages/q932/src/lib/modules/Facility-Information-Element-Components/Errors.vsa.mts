/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary Errors
 * @description
 *
 * Parameterized information object set: the union of `&Errors` from the
 * supplied operations. Q.932 uses it as the `ERROR` parameter of `ReturnError`.
 * It is not an ASN.1 type, so it has no encoder or decoder.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Errors{OPERATION:Operations} ERROR ::= {Operations.&Errors}
 * ```
 *
 * @type {ERROR}
 */
export
type Errors = ERROR; // VALUE_SET_TYPE

/* eslint-enable */
