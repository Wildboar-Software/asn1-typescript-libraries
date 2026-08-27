/* eslint-disable */
import { signcryptedEnvelope } from "../CMSSigncryption/signcryptedEnvelope.oa.mjs";
import { SignedAttributesSet } from "../CryptographicMessageSyntax-2010/SignedAttributesSet.osa.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";

/**
 * @summary SigncryptionAttributes
 * @description
 *
 * Object set of attributes permitted under signcryption
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2).
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
