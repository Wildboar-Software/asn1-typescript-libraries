/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_Issuer
 * @description
 *
 * CKM issuer attribute OID. (ITU-T X.894 | ISO/IEC 24824-4 / ANSI X9.69 CKM).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Issuer OID ::= { ckm-CMS 8 }
 * ```
 *
 * @constant
 */
export const id_Issuer: OID = _OID.fromParts([8], ckm_CMS);

/* eslint-enable */
