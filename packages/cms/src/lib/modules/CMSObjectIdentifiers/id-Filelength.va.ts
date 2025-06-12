/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.js";
import { OID } from "../CMSObjectIdentifiers/OID.ta.js";
export { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.js";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_Filelength */
/**
 * @summary id_Filelength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Filelength OID ::= { ckm-CMS 3 }
 * ```
 *
 * @constant
 */
export const id_Filelength: OID = new _OID([3], ckm_CMS);
/* END_OF_SYMBOL_DEFINITION id_Filelength */

/* eslint-enable */
