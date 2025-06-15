/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

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

/* eslint-enable */
