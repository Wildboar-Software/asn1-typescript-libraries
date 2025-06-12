/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import { encryptedPrivateKeyInfo } from "../PKCS-9/encryptedPrivateKeyInfo.oa.js";
import { pKCS15Token } from "../PKCS-9/pKCS15Token.oa.js";
import { pKCS7PDU } from "../PKCS-9/pKCS7PDU.oa.js";
import { userPKCS12 } from "../PKCS-9/userPKCS12.oa.js";

/* START_OF_SYMBOL_DEFINITION PKCSEntityAttributeSet */
/**
 * @summary PKCSEntityAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCSEntityAttributeSet ATTRIBUTE ::= {
 *         pKCS7PDU |
 *         userPKCS12 |
 *         pKCS15Token |
 *         encryptedPrivateKeyInfo,
 *         ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const PKCSEntityAttributeSet: ATTRIBUTE[] = [
    pKCS7PDU,
    userPKCS12,
    pKCS15Token,
    encryptedPrivateKeyInfo,
];
/* END_OF_SYMBOL_DEFINITION PKCSEntityAttributeSet */

/* eslint-enable */
