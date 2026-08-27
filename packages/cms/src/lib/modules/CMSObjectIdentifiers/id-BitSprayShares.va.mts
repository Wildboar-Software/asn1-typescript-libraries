/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_BitSprayShares
 * @description
 *
 * CKM BitSpray shares OID. (ITU-T X.894 | ISO/IEC 24824-4 / ANSI X9.69 CKM).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-BitSprayShares OID ::= { ckm-CMS 12 2 }
 * ```
 *
 * @constant
 */
export const id_BitSprayShares: OID = _OID.fromParts([12, 2], ckm_CMS);

/* eslint-enable */
