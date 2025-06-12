/* eslint-disable */
import { MODE } from "../CMSSigncryption/MODE.oca.js";
import { signcryptedAttributes } from "../CMSSigncryption/signcryptedAttributes.oa.js";
import { signcryptedComponents } from "../CMSSigncryption/signcryptedComponents.oa.js";
import { signcryptedContent } from "../CMSSigncryption/signcryptedContent.oa.js";
import { signcryptedEnveloped } from "../CMSSigncryption/signcryptedEnveloped.oa.js";
export { MODE } from "../CMSSigncryption/MODE.oca.js";
export { signcryptedAttributes } from "../CMSSigncryption/signcryptedAttributes.oa.js";
export { signcryptedComponents } from "../CMSSigncryption/signcryptedComponents.oa.js";
export { signcryptedContent } from "../CMSSigncryption/signcryptedContent.oa.js";
export { signcryptedEnveloped } from "../CMSSigncryption/signcryptedEnveloped.oa.js";

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
