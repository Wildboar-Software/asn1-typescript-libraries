/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
export { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/* START_OF_SYMBOL_DEFINITION id_FavoriteName */
/**
 * @summary id_FavoriteName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-FavoriteName OID ::= { ckm-CMS 13 }
 * ```
 *
 * @constant
 */
export const id_FavoriteName: OID = new _OID([13], ckm_CMS);
/* END_OF_SYMBOL_DEFINITION id_FavoriteName */

/* eslint-enable */
