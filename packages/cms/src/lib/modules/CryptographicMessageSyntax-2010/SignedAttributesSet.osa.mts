/* eslint-disable */
import { CMSProfileAttributes } from "../CMSProfileAttributes/CMSProfileAttributes.osa.mjs";
import { aa_contentType } from "../CryptographicMessageSyntax-2010/aa-contentType.oa.mjs";
import { aa_messageDigest } from "../CryptographicMessageSyntax-2010/aa-messageDigest.oa.mjs";
import { aa_signingTime } from "../CryptographicMessageSyntax-2010/aa-signingTime.oa.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import { tokenizedParts } from "../TokenizationManifest/tokenizedParts.oa.mjs";

/* START_OF_SYMBOL_DEFINITION SignedAttributesSet */
/**
 * @summary SignedAttributesSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedAttributesSet ATTRIBUTE ::= { aa-signingTime | aa-messageDigest | aa-contentType |
 *   CMSProfileAttributes | tokenizedParts, ... }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SignedAttributesSet: ATTRIBUTE[] = [
    aa_signingTime,
    aa_messageDigest,
    aa_contentType,
    ...CMSProfileAttributes,
    tokenizedParts,
];
/* END_OF_SYMBOL_DEFINITION SignedAttributesSet */

/* eslint-enable */
