/* eslint-disable */
import { type SIGNCRYPTED } from "../CMSSigncryption/SIGNCRYPTED.oca.mjs";
import { xPathManifest } from "../CMSSigncryption/xPathManifest.oa.mjs";

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

/* eslint-enable */
