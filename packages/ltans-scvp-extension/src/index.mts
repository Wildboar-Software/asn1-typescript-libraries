/**
 * @module
 * @description
 *
 * SCVP WantBacks that carry long-term evidence records, from
 * [IETF RFC 5276](https://www.rfc-editor.org/rfc/rfc5276).
 * Place these OIDs in `CVRequest.wantBack` so the responder
 * returns preservation evidence for the certificates, paths,
 * and revocation information it used.
 * Import from `@wildboar/ltans-scvp-extension` or
 * `@wildboar/ltans-scvp-extension/LTANS-SCVP-EXTENSION`.
 *
 * `EvidenceRecord` comes from `@wildboar/ers`.
 */
export * from "./lib/modules/LTANS-SCVP-EXTENSION/index.mjs";
