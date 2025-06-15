/* eslint-disable */
import { signcryptedEnvelope } from "../CMSSigncryption/signcryptedEnvelope.oa.mjs";
import { SignedAttributesSet } from "../CryptographicMessageSyntax-2010/SignedAttributesSet.osa.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";

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

/* eslint-enable */
