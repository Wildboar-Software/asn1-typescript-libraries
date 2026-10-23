/* eslint-disable */
import { ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary Errors
 * @description
 *
 * The errors of the operations in an object set: `Operations.&Errors` (ECMA-165
 * §11.3.3.4). A return-error code outside this set is `unrecognisedError`. A
 * code that is not in the particular operation's errors is `unexpectedError`
 * (Annex G).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Errors { OPERATION: Operations } ERROR ::= {Operations.&Errors}
 * ```
 *
 * @type {ERROR}
 */
export
type Errors = ERROR; // VALUE_SET_TYPE

/* eslint-enable */
