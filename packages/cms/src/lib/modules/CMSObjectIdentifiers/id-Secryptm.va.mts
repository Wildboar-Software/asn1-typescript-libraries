/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const id_Secryptm: OID = _OID.fromParts([2], ckm_CMS);

/* eslint-enable */
