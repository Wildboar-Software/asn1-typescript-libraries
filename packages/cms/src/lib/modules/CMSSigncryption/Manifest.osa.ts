/* eslint-disable */
import { SIGNCRYPTED } from "../CMSSigncryption/SIGNCRYPTED.oca.js";
import { xPathManifest } from "../CMSSigncryption/xPathManifest.oa.js";
export { SIGNCRYPTED } from "../CMSSigncryption/SIGNCRYPTED.oca.js";
export { xPathManifest } from "../CMSSigncryption/xPathManifest.oa.js";

/* START_OF_SYMBOL_DEFINITION Manifest */
/**
 * @summary Manifest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Manifest SIGNCRYPTED ::= {
 * xPathManifest,
 * ... -- Expect additional manifest types --
 * }
 * ```
 *
 * @constant
 * @type {SIGNCRYPTED[]}
 *
 */
export const Manifest: SIGNCRYPTED[] = [xPathManifest];
/* END_OF_SYMBOL_DEFINITION Manifest */

/* eslint-enable */
