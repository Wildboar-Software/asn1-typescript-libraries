/* eslint-disable */
import { type TOKENIZED } from "../TokenizationManifest/TOKENIZED.oca.mjs";
import { xPathTokensManifest } from "../TokenizationManifest/xPathTokensManifest.oa.mjs";

/**
 * @summary Manifest
 * @description
 *
 * Object set of tokenization manifests (includes XPath tokens)
 * (ITU-T X.894 | ISO/IEC 24824-4 Annex A.18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Manifest TOKENIZED ::= {
 * xPathTokensManifest,
 * ...  -- Expect additional manifest objects --
 * }
 * ```
 *
 * @constant
 * @type {TOKENIZED[]}
 *
 */
export const Manifest: TOKENIZED[] = [xPathTokensManifest];

/* eslint-enable */
