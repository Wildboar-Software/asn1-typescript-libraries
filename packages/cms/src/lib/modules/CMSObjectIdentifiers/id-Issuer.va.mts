/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_Issuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Issuer OID ::= { ckm-CMS 8 }
 * ```
 *
 * @constant
 */
export const id_Issuer: OID = _OID.fromParts([8], ckm_CMS);

/* eslint-enable */
