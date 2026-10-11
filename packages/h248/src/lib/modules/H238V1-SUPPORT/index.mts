/**
 * @module
 * @description
 *
 * Version 1 shapes that differ from the version 3 module, as captured
 * in `doc/h248v1support.asn1`. The identifier keeps the compiled
 * spelling `H238V1-SUPPORT`.
 *
 * `ServiceChangeVersion` 1 means ITU-T Rec. H.248.1 (03/2002)
 * (clause 1). The registration ServiceChange, and its reply, are
 * encoded as version 1 even when a higher version is being negotiated
 * (clause 11.3). These types are the audit-reply and parameter forms
 * used by that encoding: a single parameter value, with no
 * `extraInfo`. `AuditReplyV1` is a sequence. Version 3 encodes
 * `AuditReply` as a choice.
 */
export * from "./AuditReplyV1.ta.mjs";
export * from "./AuditResultV1.ta.mjs";
export * from "./EventParamValueV1.ta.mjs";
export * from "./EventParameterV1.ta.mjs";
export * from "./SigParamValueV1.ta.mjs";
export * from "./SigParameterV1.ta.mjs";
