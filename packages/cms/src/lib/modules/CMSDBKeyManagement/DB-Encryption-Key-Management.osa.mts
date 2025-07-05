/* eslint-disable */
import { dbekmRecipientInfo } from "../CMSDBKeyManagement/dbekmRecipientInfo.oa.mjs";
import { type KEY_MANAGEMENT } from "../CMSDBKeyManagement/KEY-MANAGEMENT.oca.mjs";

/**
 * @summary DB_Encryption_Key_Management
 * @description
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
