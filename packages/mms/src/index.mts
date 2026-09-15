/**
 * @packageDocumentation
 *
 * TypeScript encodings of ISO 9506 Manufacturing Message Specification
 * (MMS) ASN.1 modules. MMS is the application-layer ASE for messaging
 * with manufacturing devices: it models a Virtual Manufacturing Device
 * (VMD) and confirmed, unconfirmed, and environment-management services
 * used over an application association (ISO 9506-1:2003 §5–§8). Import
 * from a subpath (for example `@wildboar/mms/ISO-9506-MMS-1`) rather
 * than this root: the package root does not re-export every module.
 *
 * Association Control Service Element types used by MMS (`AP-title`,
 * `AP-invocation-identifier`, `AE-qualifier`, `AE-invocation-identifier`,
 * `Authentication-value`) identify application entities in an MMS
 * `ApplicationReference` (ISO 9506-1:2003 §6.6; ISO 9506-2:2003 Annex A)
 * and are re-exported from `@wildboar/acse`.
 */
export {};
