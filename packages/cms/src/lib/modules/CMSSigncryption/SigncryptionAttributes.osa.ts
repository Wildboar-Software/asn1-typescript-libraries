/* eslint-disable */
import { signcryptedEnvelope } from "../CMSSigncryption/signcryptedEnvelope.oa.js";
import { SignedAttributesSet } from "../CryptographicMessageSyntax-2010/SignedAttributesSet.osa.js";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
export { signcryptedEnvelope } from "../CMSSigncryption/signcryptedEnvelope.oa.js";
export { SignedAttributesSet } from "../CryptographicMessageSyntax-2010/SignedAttributesSet.osa.js";

/* START_OF_SYMBOL_DEFINITION SigncryptionAttributes */
/**
 * @summary SigncryptionAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptionAttributes ATTRIBUTE ::= {
 * SignedAttributesSet    | -- CMS Signed Attributes --
 * signcryptedEnvelope,
 * ... -- Expect user defined attributes --
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SigncryptionAttributes: ATTRIBUTE[] = [
    ...SignedAttributesSet,
    signcryptedEnvelope,
];
/* END_OF_SYMBOL_DEFINITION SigncryptionAttributes */

/* eslint-enable */
