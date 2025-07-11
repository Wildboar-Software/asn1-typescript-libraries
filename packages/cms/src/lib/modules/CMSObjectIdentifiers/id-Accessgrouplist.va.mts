/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_Accessgrouplist
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Accessgrouplist OID ::= { ckm-CMS 7 }
 * ```
 *
 * @constant
 */
export const id_Accessgrouplist: OID = _OID.fromParts([7], ckm_CMS);

/* eslint-enable */
