/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const id_KeyUsage: OID = _OID.fromParts([11], ckm_CMS);

/* eslint-enable */
