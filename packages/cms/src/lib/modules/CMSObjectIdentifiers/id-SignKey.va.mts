/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
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
export const id_SignKey: OID = new _OID([10], ckm_CMS);

/* eslint-enable */
