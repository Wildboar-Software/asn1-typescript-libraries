/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.js";
import { OID } from "../CMSObjectIdentifiers/OID.ta.js";
export { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.js";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_DataSignature */
/**
 * @summary id_DataSignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-DataSignature OID ::= { ckm-CMS 14 }
 * ```
 *
 * @constant
 */
export const id_DataSignature: OID = new _OID([14], ckm_CMS);
/* END_OF_SYMBOL_DEFINITION id_DataSignature */

/* eslint-enable */
