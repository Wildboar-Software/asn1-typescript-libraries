/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_Credentiallist
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Credentiallist OID ::= { ckm-CMS 9 }
 * ```
 *
 * @constant
 */
export const id_Credentiallist: OID = _OID.fromParts([9], ckm_CMS);

/* eslint-enable */
