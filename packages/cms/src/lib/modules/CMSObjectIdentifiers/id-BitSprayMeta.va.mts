/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_BitSprayMeta
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-BitSprayMeta OID ::= { ckm-CMS 12 1 }
 * ```
 *
 * @constant
 */
export const id_BitSprayMeta: OID = _OID.fromParts([12, 1], ckm_CMS);

/* eslint-enable */
