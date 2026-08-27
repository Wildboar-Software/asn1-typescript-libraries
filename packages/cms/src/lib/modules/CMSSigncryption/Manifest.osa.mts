/* eslint-disable */
import { type SIGNCRYPTED } from "../CMSSigncryption/SIGNCRYPTED.oca.mjs";
import { xPathManifest } from "../CMSSigncryption/xPathManifest.oa.mjs";

/**
 * @summary Manifest
 * @description
 *
 * Object set of signcrypted-parts manifests (includes `xPathManifest`)
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.3).
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
