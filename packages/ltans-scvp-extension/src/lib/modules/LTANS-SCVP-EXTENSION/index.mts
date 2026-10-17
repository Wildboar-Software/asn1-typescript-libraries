/**
 * @module
 * @description
 *
 * ASN.1 module `LTANS-SCVP-EXTENSION`
 * `{iso(1) identified-organization(3) dod(6) internet(1) security(5) mechanisms(5) ltans(11) id-mod(0) id-mod-ers-scvp(5) id-mod-ers-scvp-v1(1)}`
 * from [IETF RFC 5276](https://www.rfc-editor.org/rfc/rfc5276),
 * [Appendix A](https://www.rfc-editor.org/rfc/rfc5276#appendix-A).
 *
 * WantBack object identifiers and the structures an SCVP server
 * returns so a client can obtain long-term evidence records for
 * certification path and revocation information.
 * `EvidenceRecord` is imported from `@wildboar/ers` and is not
 * re-exported here.
 */
export * from "./EvidenceRecords.ta.mjs";
export * from "./EvidenceRecordWantBack.ta.mjs";
export * from "./EvidenceRecordWantBacks.ta.mjs";
export * from "./id-swb-ers-all.va.mjs";
export * from "./id-swb-ers-best-cert-path.va.mjs";
export * from "./id-swb-ers-partial-cert-path.va.mjs";
export * from "./id-swb-ers-pkc-cert.va.mjs";
export * from "./id-swb-ers-revocation-info.va.mjs";
export * from "./id-swb-partial-cert-path.va.mjs";
export * from "./id-swb.va.mjs";
