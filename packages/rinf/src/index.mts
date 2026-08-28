/**
 * Registration Information (RINF) types for the OID
 * Resolution System (ORS) in ITU-T Rec. X.672 (06/2022) |
 * ISO/IEC 29168-1
 * [Annex D](https://www.itu.int/rec/T-REC-X.672-202206-I).
 *
 * An ORS-supported node's DNS zone has a NAPTR with service
 * `ORS+RINF` whose regexp is a URL of a `.xml` file. That
 * file is EXTENDED-XER of `RegistrationInformation`:
 * purpose of the OID allocation, optional extra text, and
 * first/current registrant (clear or enciphered). ASN.1
 * module `{joint-iso-itu-t ors(50) modules(0) rinf(1) version1(1)}`
 * (`/ORS/Modules/RINF/Version1`).
 *
 * @module
 */
export * from "./lib/modules/RINF-module/HTMLString.ta.mjs";
export * from "./lib/modules/RINF-module/Information.ta.mjs";
export * from "./lib/modules/RINF-module/RegistrantContactDetails.ta.mjs";
export * from "./lib/modules/RINF-module/RegistrationDetails-registrant-enciphered-registrant.ta.mjs";
export * from "./lib/modules/RINF-module/RegistrationDetails-registrant.ta.mjs";
export * from "./lib/modules/RINF-module/RegistrationDetails.ta.mjs";
export * from "./lib/modules/RINF-module/RegistrationInformation.ta.mjs";
