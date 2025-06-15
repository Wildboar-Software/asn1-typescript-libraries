/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_KeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-KeyUsage OID ::= { ckm-CMS 11 }
 * ```
 *
 * @constant
 */
export const id_KeyUsage: OID = new _OID([11], ckm_CMS);

/* eslint-enable */
