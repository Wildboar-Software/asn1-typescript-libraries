/**
 * Child Information (CINF) types for the OID Resolution
 * System (ORS) in ITU-T Rec. X.672 (06/2022) | ISO/IEC
 * 29168-1
 * [Annex C](https://www.itu.int/rec/T-REC-X.672-202206-I).
 *
 * An ORS-supported node's DNS zone has a NAPTR with service
 * `ORS+CINF` whose regexp is a URL of a `.xml` file. That
 * file is EXTENDED-XER of `ChildInformation`: either
 * `noDisclosure` or a list of child arcs (only those that
 * agreed) so applications can walk the tree. ASN.1 module
 * `{joint-iso-itu-t ors(50) modules(0) cinf(0) version1(1)}`
 * (`/ORS/Modules/CINF/Version1`).
 *
 * @module
 */
export * from "./lib/modules/CINF-module/ChildDetails.ta.mjs";
export * from "./lib/modules/CINF-module/ChildInformation.ta.mjs";
export * from "./lib/modules/CINF-module/Information.ta.mjs";
export * from "./lib/modules/CINF-module/Non-numericUnicodeLabel.ta.mjs";
export * from "./lib/modules/CINF-module/UnicodeLabels.ta.mjs";
