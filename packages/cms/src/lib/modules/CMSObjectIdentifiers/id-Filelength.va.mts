/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_Filelength
 * @description
 *
 * CKM file-length attribute OID. (ITU-T X.894 | ISO/IEC 24824-4 / ANSI X9.69 CKM).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Filelength OID ::= { ckm-CMS 3 }
 * ```
 *
 * @constant
 */
export const id_Filelength: OID = _OID.fromParts([3], ckm_CMS);

/* eslint-enable */
