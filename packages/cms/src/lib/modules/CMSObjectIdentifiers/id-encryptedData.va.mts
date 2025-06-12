/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va.mjs";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
export { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va.mjs";

/* START_OF_SYMBOL_DEFINITION id_encryptedData */
/**
 * @summary id_encryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-encryptedData OID ::= { pkcs7 encryptedData (6) }
 * ```
 *
 * @constant
 */
export const id_encryptedData: OID = new _OID([/* encryptedData */ 6], pkcs7);
/* END_OF_SYMBOL_DEFINITION id_encryptedData */

/* eslint-enable */
