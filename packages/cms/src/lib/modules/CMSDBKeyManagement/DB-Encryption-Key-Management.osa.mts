/* eslint-disable */
import { dbekmRecipientInfo } from "../CMSDBKeyManagement/dbekmRecipientInfo.oa.mjs";
import { type KEY_MANAGEMENT } from "../CMSDBKeyManagement/KEY-MANAGEMENT.oca.mjs";

/**
 * @summary DB_Encryption_Key_Management
 * @description
 *
 * Object set of DBEKM key-management constructions. (ITU-T X.894 | ISO/IEC 24824-4 clause 9.2 / Annex A.16).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DB-Encryption-Key-Management    KEY-MANAGEMENT ::= {
 * dbekmRecipientInfo,
 * ...    -- Expect additional key management objects --
 * }
 * ```
 *
 * @constant
 * @type {KEY_MANAGEMENT[]}
 *
 */
export const DB_Encryption_Key_Management: KEY_MANAGEMENT[] = [
    dbekmRecipientInfo,
];

/* eslint-enable */
