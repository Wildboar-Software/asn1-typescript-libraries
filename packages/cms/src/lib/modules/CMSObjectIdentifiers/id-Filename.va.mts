/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_Filename
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Filename OID ::= { ckm-CMS 5 }
 * ```
 *
 * @constant
 */
export const id_Filename: OID = new _OID([5], ckm_CMS);

/* eslint-enable */
