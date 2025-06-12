/* eslint-disable */
import { CMSProfileAttributes } from "../CMSProfileAttributes/CMSProfileAttributes.osa.js";
import { aa_contentType } from "../CryptographicMessageSyntax-2010/aa-contentType.oa.js";
import { aa_messageDigest } from "../CryptographicMessageSyntax-2010/aa-messageDigest.oa.js";
import { aa_signingTime } from "../CryptographicMessageSyntax-2010/aa-signingTime.oa.js";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import { tokenizedParts } from "../TokenizationManifest/tokenizedParts.oa.js";

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
