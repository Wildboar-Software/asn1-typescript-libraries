/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va.mjs";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
export { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va.mjs";

/* START_OF_SYMBOL_DEFINITION id_signedData */
/**
 * @summary id_signedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signedData OID ::= { pkcs7 signedData(2) }
 * ```
 *
 * @constant
 */
export const id_signedData: OID = new _OID([/* signedData */ 2], pkcs7);
/* END_OF_SYMBOL_DEFINITION id_signedData */

/* eslint-enable */
