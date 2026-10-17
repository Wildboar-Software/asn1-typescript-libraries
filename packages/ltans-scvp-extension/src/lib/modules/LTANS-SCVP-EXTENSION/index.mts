/**
 * @module
 * @description
 *
 * ASN.1 module `LTANS-SCVP-EXTENSION`
 * `{iso(1) identified-organization(3) dod(6) internet(1) security(5) mechanisms(5) ltans(11) id-mod(0) id-mod-ers-scvp(5) id-mod-ers-scvp-v1(1)}`
 * from [IETF RFC 5276](https://www.rfc-editor.org/rfc/rfc5276),
 * [Appendix A](https://www.rfc-editor.org/rfc/rfc5276#appendix-A).
 *
 * WantBacks and reply structures that associate an
 * [RFC 4998](https://www.rfc-editor.org/rfc/rfc4998)
 * evidence record with PKI artifacts in an SCVP response.
 * A client retrieves a signed archived object from a
 * long-term archive, asks SCVP for the signer's status at
 * a time of interest plus these WantBacks, and checks the
 * returned records before using that certificate. Path
 * evidence can then be reused across archived objects of
 * similar vintage.
 *
 * Each evidence-record WantBack requires the WantBack for
 * the object it covers. If that companion is missing, the
 * server MUST set `wantBackUnsatisfied` in `ReplyStatus`.
 * Clients MAY ignore the evidence-record WantBack in that
 * case
 * ([§5](https://www.rfc-editor.org/rfc/rfc5276#section-5)).
 *
 * For {@link id_swb_ers_best_cert_path} and
 * {@link id_swb_ers_partial_cert_path}, the record covers
 * the contents of the companion `replyWantBack`'s
 * `value`, not that OCTET STRING's tag and length.
 * {@link id_swb_ers_pkc_cert} covers `CertReply.cert`.
 * {@link id_swb_ers_revocation_info} returns an
 * {@link EvidenceRecords} sequence.
 * {@link id_swb_ers_all} returns an
 * {@link EvidenceRecordWantBacks}.
 *
 * If the server cannot build a requested record, it MUST
 * still return a `replyWantBack` of that type with an
 * empty `value`
 * ([§4](https://www.rfc-editor.org/rfc/rfc5276#section-4)).
 *
 * Verify the SCVP response with a public key the relying
 * party trusts. Trust anchors inside an evidence record
 * are protected by that signature. Relying parties SHOULD
 * ignore trust anchors in an unsigned response
 * ([§6](https://www.rfc-editor.org/rfc/rfc5276#section-6)).
 *
 * `EvidenceRecord` is imported from `@wildboar/ers` and is
 * not re-exported here.
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
