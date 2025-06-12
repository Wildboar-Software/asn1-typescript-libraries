/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption } from "../CMSObjectIdentifiers/signcryption.va.mjs";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
export { signcryption } from "../CMSObjectIdentifiers/signcryption.va.mjs";

/* START_OF_SYMBOL_DEFINITION signcryption_mode */
/**
 * @summary signcryption_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryption-mode OID ::= { signcryption modes(1) }
 * ```
 *
 * @constant
 */
export const signcryption_mode: OID = new _OID([/* modes */ 1], signcryption);
/* END_OF_SYMBOL_DEFINITION signcryption_mode */

/* eslint-enable */
