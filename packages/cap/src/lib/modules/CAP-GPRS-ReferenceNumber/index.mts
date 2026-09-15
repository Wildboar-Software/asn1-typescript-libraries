/**
 * @description
 *
 * ASN.1 module `CAP-GPRS-ReferenceNumber` (3GPP TS 29.078 V19.0.0
 * clause 8.1.1).
 *
 * SEQUENCE identifying the SGSN–gsmSCF relationship
 * (`destinationReference` / `originationReference`, both Integer4
 * OPTIONAL) plus its ABSTRACT-SYNTAX and OID. Rel-6 definitions are
 * unchanged from Rel-5. Used in TC User Information (clause 14.1.4);
 * invalid or missing references abort with `invalid-reference` or
 * `missing-reference` (clause 5.7).
 */
export * from "./cAP-GPRS-ReferenceNumber-Abstract-Syntax.oa.mjs";
export * from "./CAP-GPRS-ReferenceNumber.ta.mjs";
export * from "./id-CAP-GPRS-ReferenceNumber.va.mjs";
