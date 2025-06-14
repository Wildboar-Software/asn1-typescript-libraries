/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_Secryptm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Secryptm OID ::= { ckm-CMS 2 }
 * ```
 *
 * @constant
 */
export const id_Secryptm: OID = new _OID([2], ckm_CMS);

/* eslint-enable */
