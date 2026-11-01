/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { pKCS7PDU } from "../PKCS-9/pKCS7PDU.oa.mjs";
// export { pKCS7PDU } from "../PKCS-9/pKCS7PDU.oa.mjs";
import { userPKCS12 } from "../PKCS-9/userPKCS12.oa.mjs";
// export { userPKCS12 } from "../PKCS-9/userPKCS12.oa.mjs";
import { pKCS15Token } from "../PKCS-9/pKCS15Token.oa.mjs";
// export { pKCS15Token } from "../PKCS-9/pKCS15Token.oa.mjs";
import { encryptedPrivateKeyInfo } from "../PKCS-9/encryptedPrivateKeyInfo.oa.mjs";
// export { encryptedPrivateKeyInfo } from "../PKCS-9/encryptedPrivateKeyInfo.oa.mjs";


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
export
const PKCSEntityAttributeSet: (ATTRIBUTE)[] = [ pKCS7PDU, userPKCS12, pKCS15Token, encryptedPrivateKeyInfo, ];

/* eslint-enable */
