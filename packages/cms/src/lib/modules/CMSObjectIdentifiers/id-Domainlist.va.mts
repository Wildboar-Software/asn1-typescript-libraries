/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_Domainlist
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Domainlist OID ::= { ckm-CMS 6 }
 * ```
 *
 * @constant
 */
export const id_Domainlist: OID = _OID.fromParts([6], ckm_CMS);

/* eslint-enable */
