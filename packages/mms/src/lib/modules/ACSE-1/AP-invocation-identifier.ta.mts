/**
 * Application-process invocation identifier used in an MMS
 * `ApplicationReference` to identify an AE (ISO 9506-1:2003 §6.6;
 * ISO 9506-2:2003 Annex A). Re-exported from `@wildboar/acse`; this
 * module does not define ACSE field semantics.
 */
export {
    type AP_invocation_identifier,
    _decode_AP_invocation_identifier,
    _encode_AP_invocation_identifier,
} from "@wildboar/acse";
