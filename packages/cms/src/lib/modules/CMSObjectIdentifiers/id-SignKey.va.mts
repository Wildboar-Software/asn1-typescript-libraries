/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_SignKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-SignKey OID ::= { ckm-CMS 10 }
 * ```
 *
 * @constant
 */
export const id_SignKey: OID = _OID.fromParts([10], ckm_CMS);

/* eslint-enable */
