/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_Ivec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Ivec OID ::= { ckm-CMS 1 }
 * ```
 *
 * @constant
 */
export const id_Ivec: OID = new _OID([1], ckm_CMS);

/* eslint-enable */
