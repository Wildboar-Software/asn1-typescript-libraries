/**
 * @module
 * @description
 *
 * Logotypes in X.509 public-key and attribute certificates, from
 * [IETF RFC 3709](https://www.rfc-editor.org/rfc/rfc3709).
 *
 * `id-pe-logotype` carries community, issuer-organization,
 * subject-organization, and other logotypes so a person can recognize
 * a certificate. Path validation ignores the extension, and the
 * extension is non-critical. Clients support image logotypes; audio
 * is optional. Image, audio, and `.LTD` files are fetched by URI and
 * checked with a one-way hash. `AlgorithmIdentifier` comes from
 * `@wildboar/pki-stub`.
 */
export * from "./lib/modules/LogotypeCertExtn/index.mjs";
