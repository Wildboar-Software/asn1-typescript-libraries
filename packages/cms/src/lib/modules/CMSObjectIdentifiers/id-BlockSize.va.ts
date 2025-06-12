/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.js";
import { OID } from "../CMSObjectIdentifiers/OID.ta.js";
export { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.js";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_BlockSize */
/**
 * @summary id_BlockSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-BlockSize OID ::= { ckm-CMS 15 }
 * ```
 *
 * @constant
 */
export const id_BlockSize: OID = new _OID([15], ckm_CMS);
/* END_OF_SYMBOL_DEFINITION id_BlockSize */

/* eslint-enable */
