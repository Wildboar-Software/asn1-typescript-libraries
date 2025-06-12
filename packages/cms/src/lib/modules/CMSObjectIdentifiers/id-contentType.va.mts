/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs9 } from "../CMSObjectIdentifiers/pkcs9.va.mjs";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
export { pkcs9 } from "../CMSObjectIdentifiers/pkcs9.va.mjs";

/* START_OF_SYMBOL_DEFINITION id_contentType */
/**
 * @summary id_contentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contentType OID ::= { pkcs9 contentType(3) }
 * ```
 *
 * @constant
 */
export const id_contentType: OID = new _OID([/* contentType */ 3], pkcs9);
/* END_OF_SYMBOL_DEFINITION id_contentType */

/* eslint-enable */
