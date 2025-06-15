/* eslint-disable */
import { TOKENIZED } from "../TokenizationManifest/TOKENIZED.oca.mjs";
import { xPathTokensManifest } from "../TokenizationManifest/xPathTokensManifest.oa.mjs";

/**
 * @summary Manifest
 * @description
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
