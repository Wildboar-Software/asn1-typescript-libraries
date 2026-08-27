/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_BlockSize
 * @description
 *
 * CKM block-size attribute OID. (ITU-T X.894 | ISO/IEC 24824-4 / ANSI X9.69 CKM).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-BlockSize OID ::= { ckm-CMS 15 }
 * ```
 *
 * @constant
 */
export const id_BlockSize: OID = _OID.fromParts([15], ckm_CMS);

/* eslint-enable */
