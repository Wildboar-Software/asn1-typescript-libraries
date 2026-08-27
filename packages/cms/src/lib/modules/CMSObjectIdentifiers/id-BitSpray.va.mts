/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_BitSpray
 * @description
 *
 * CKM BitSpray arc OID. (ITU-T X.894 | ISO/IEC 24824-4 / ANSI X9.69 CKM).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-BitSpray OID ::= { ckm-CMS 12 }
 * ```
 *
 * @constant
 */
export const id_BitSpray: OID = _OID.fromParts([12], ckm_CMS);

/* eslint-enable */
