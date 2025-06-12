/* eslint-disable */
import { MODE } from "../CMSSigncryption/MODE.oca.mjs";
import { signcryptedAttributes } from "../CMSSigncryption/signcryptedAttributes.oa.mjs";
import { signcryptedComponents } from "../CMSSigncryption/signcryptedComponents.oa.mjs";
import { signcryptedContent } from "../CMSSigncryption/signcryptedContent.oa.mjs";
import { signcryptedEnveloped } from "../CMSSigncryption/signcryptedEnveloped.oa.mjs";
export { MODE } from "../CMSSigncryption/MODE.oca.mjs";
export { signcryptedAttributes } from "../CMSSigncryption/signcryptedAttributes.oa.mjs";
export { signcryptedComponents } from "../CMSSigncryption/signcryptedComponents.oa.mjs";
export { signcryptedContent } from "../CMSSigncryption/signcryptedContent.oa.mjs";
export { signcryptedEnveloped } from "../CMSSigncryption/signcryptedEnveloped.oa.mjs";

/* START_OF_SYMBOL_DEFINITION ProcessingModes */
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
/* END_OF_SYMBOL_DEFINITION ProcessingModes */

/* eslint-enable */
