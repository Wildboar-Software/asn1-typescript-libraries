/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_DataSignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-DataSignature OID ::= { ckm-CMS 14 }
 * ```
 *
 * @constant
 */
export const id_DataSignature: OID = new _OID([14], ckm_CMS);

/* eslint-enable */
