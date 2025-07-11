/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const id_DataSignature: OID = _OID.fromParts([14], ckm_CMS);

/* eslint-enable */
