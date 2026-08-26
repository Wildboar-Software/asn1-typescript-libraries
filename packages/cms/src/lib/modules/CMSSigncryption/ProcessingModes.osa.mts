/* eslint-disable */
import { type MODE } from "../CMSSigncryption/MODE.oca.mjs";
import { signcryptedAttributes } from "../CMSSigncryption/signcryptedAttributes.oa.mjs";
import { signcryptedComponents } from "../CMSSigncryption/signcryptedComponents.oa.mjs";
import { signcryptedContent } from "../CMSSigncryption/signcryptedContent.oa.mjs";
import { signcryptedEnveloped } from "../CMSSigncryption/signcryptedEnveloped.oa.mjs";

/**
 * @summary ProcessingModes
 * @description
 *
 * Object set of SigncryptedData processing modes (attributes, components,
 * content, enveloped) (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingModes MODE ::= {
 * signcryptedAttributes    |
 * signcryptedComponents    |
 * signcryptedContent     |
 * signcryptedEnveloped,
 * ... -- Expect additional processing modes --
 * }
 * ```
 *
 * @constant
 * @type {MODE[]}
 *
 */
export const ProcessingModes: MODE[] = [
    signcryptedAttributes,
    signcryptedComponents,
    signcryptedContent,
    signcryptedEnveloped,
];

/* eslint-enable */
