/**
 * @description
 *
 * ASN.1 module `CCSDS-SLE-TRANSFER-SERVICE-ROCF-INCOMING-PDUS` from the CCSDS Space Link Extension
 * transfer services. The module is declared with IMPLICIT TAGS.
 *
 * CCSDS 911.5-B-4 annex A2.6 defines this module. The PDUs are those the ROCF
 * provider can receive. Section 3 specifies the operations.
 *
 * `{iso identified-organization(3) standards-producing-organization(112) ccsds(4) space-link-extension(3) sle-transfer-services(1) modules(1) return-operational-control-field-service(14) version-four(4) asn1-rocf-incoming-pdu(2)}`
 */
export * from "./RocfGetParameterInvocation.ta.mjs";
export * from "./RocfStartInvocation.ta.mjs";
export * from "./RocfUsertoProviderPdu.ta.mjs";
