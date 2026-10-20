/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";

/**
 * @summary AuthCtmUser
 * @description
 *
 * X.208 OPERATION macro (ECMA-243 / ISO/IEC 15433). `OPERATION` is an
 * information object class, not a BER-encoded type, so this assignment has
 * no codec. The compiler emitted only this alias; the operation values and
 * argument types from `CT-Authentication-Operations` were not produced.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthCtmUser ::= OPERATION
 *     ARGUMENT AuthCtmArg
 *     RESULT AuthCtmRes
 *     ERRORS {
 *         temporarilyUnavailable,
 *         invalidServedUserNr,
 *         notAuthorized,
 *         paramNotAvailable,
 *         unspecified
 *     }
 * ```
 */
export
type AuthCtmUser = OPERATION;

/* eslint-enable */
