/**
 * @description
 *
 * ASN.1 module `CCSDS-SLE-TRANSFER-SERVICE-RCF-INCOMING-PDUS` from the CCSDS
 * Space Link Extension transfer services. The module is declared with IMPLICIT
 * TAGS.
 *
 * SLE-PDUs the Return Channel Frames provider can receive. CCSDS 911.2-B-4,
 * annex A, subsection A2.6.
 *
 * `{iso identified-organization(3) standards-producing-organization(112)
 * ccsds(4) space-link-extension(3) sle-transfer-services(1) modules(1)
 * return-channel-frames-service(13) version-four(4) asn1-rcf-incoming-pdu(2)}`
 */
export * from "./RcfGetParameterInvocation.ta.mjs";
export * from "./RcfStartInvocation.ta.mjs";
export * from "./RcfUserToProviderPdu.ta.mjs";
