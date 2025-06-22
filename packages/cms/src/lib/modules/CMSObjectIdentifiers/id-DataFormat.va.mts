/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_DataFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-DataFormat OID ::= { ckm-CMS 16 }
 * ```
 *
 * @constant
 */
export const id_DataFormat: OID = _OID.fromParts([16], ckm_CMS);

/* eslint-enable */
