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
