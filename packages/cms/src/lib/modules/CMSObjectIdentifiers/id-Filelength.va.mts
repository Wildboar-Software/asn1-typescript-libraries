/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

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

/* eslint-enable */
