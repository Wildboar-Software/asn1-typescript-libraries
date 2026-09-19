/**
 * @packageDocumentation
 *
 * TypeScript encodings of ISO/IEC 29120-1:2022 machine-readable biometric
 * testing and reporting (MRBTR) test reports. The format records technology
 * and scenario test output that ISO/IEC 19795-1 and ISO/IEC 19795-2 require
 * to be reported, plus an optional CMS-style signed wrapper.
 *
 * Clause 6.1: encode with XER (ISO/IEC 8825-4) or BER (ISO/IEC 8825-1).
 * This document does not specify sample or template formats, their
 * encapsulation, or which metrics to measure (metrics are ISO/IEC
 * 19795-1). Interoperability tests may be documented as a collection of
 * these reports, one per tested combination of components.
 *
 * Outer `BiometricTestReport` is a CMS `CONTENT-TYPE` envelope: technology
 * (`id-testReportTechnology`), scenario (`id-testReportScenario`), or
 * signed (`id-signedTestReport`). These reports are extracts of a larger
 * traditional written report, referenced as `parentTestReport`.
 *
 * Import from `@wildboar/mrbtr`. Per-module subpaths remain available.
 *
 * Directory `Name` is re-exported from `@wildboar/x500`. CMS `CONTENT_TYPE`,
 * `CertificateSet`, `RevocationInfoChoices`, and `SignerInfos` are
 * re-exported from `@wildboar/cms`. CBEFF `BiometricType`, `BiometricSubtype`,
 * and `Product` are re-exported from `@wildboar/cbeff`.
 *
 * The short integer name `v0` is omitted because it collides between
 * `MRTDBTRVersion` and `VersionProduct`. Use the long forms.
 */
export * from "./lib/modules/CBEFF-DATA-ELEMENTS/index.mjs";
export * from "./lib/modules/CryptographicMessageSyntax-2009/index.mjs";
export * from "./lib/modules/InformationFramework/index.mjs";
export * from "./lib/modules/MachineReadableBiometricTestingAndReportingTestReport/index.mjs";
