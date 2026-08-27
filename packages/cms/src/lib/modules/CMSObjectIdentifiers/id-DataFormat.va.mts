/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_DataFormat
 * @description
 *
 * CKM data-format attribute OID. (ITU-T X.894 | ISO/IEC 24824-4 / ANSI X9.69 CKM).
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
