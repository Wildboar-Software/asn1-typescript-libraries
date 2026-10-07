/**
 * @packageDocumentation
 *
 * TypeScript encodings of ANSI/NISO Z39.50 record syntaxes, diagnostics,
 * access-control formats, user-information formats, and the APDU types
 * those definitions import.
 *
 * This module is ESM-only. Import from `@wildboar/z3950`, or from a
 * per-module subpath such as `@wildboar/z3950/RecordSyntax-explain`.
 *
 * Short named integers omitted from these barrels because the names collide:
 * - `date` (Challenge_Item_dataType_date and PrimitiveDataType_date)
 * - `present` (AccessRestrictions_Item_accessType_present and Permissions_Item_allowableFunctions_present)
 * - `search` (AccessRestrictions_Item_accessType_search and ProcessingInformation_processingContext_search)
 * - `type_` (DiagFormat_extServices_req_type_ and DiagFormat_term_problem_type_)
 *
 * Use the long forms.
 */
export * from "./lib/modules/AccessControlFormat-des-1/index.mjs";
export * from "./lib/modules/AccessControlFormat-krb-1/index.mjs";
export * from "./lib/modules/AccessControlFormat-Prompt-1/index.mjs";
export * from "./lib/modules/ANSI-Z39-50-ObjectIdentifier/index.mjs";
export * from "./lib/modules/DiagnosticFormatDiag1/index.mjs";
export * from "./lib/modules/RecordSyntax-ESTaskPackage/index.mjs";
export * from "./lib/modules/RecordSyntax-explain/index.mjs";
export * from "./lib/modules/RecordSyntax-generic/index.mjs";
export * from "./lib/modules/RecordSyntax-opac/index.mjs";
export * from "./lib/modules/RecordSyntax-summary/index.mjs";
export * from "./lib/modules/RecordSyntax-SUTRS/index.mjs";
export * from "./lib/modules/UserInfoFormat-searchResult-1/index.mjs";
export * from "./lib/modules/Z39-50-APDU-1995/index.mjs";
export * from "./lib/modules/Z39-50-OCLC-UserInformation/index.mjs";
