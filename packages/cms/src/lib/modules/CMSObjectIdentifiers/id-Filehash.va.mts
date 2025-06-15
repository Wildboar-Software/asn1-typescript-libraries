/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_Filehash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Filehash OID ::= { ckm-CMS 4 }
 * ```
 *
 * @constant
 */
export const id_Filehash: OID = new _OID([4], ckm_CMS);

/* eslint-enable */
