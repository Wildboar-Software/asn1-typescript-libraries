/**
 * @module
 * @description
 * ASN.1 for GSMA consumer Remote SIM Provisioning (SGP.22).
 *
 * Comments cite SGP.22 v3.1. Where this module still uses an earlier
 * name or OID arc, the comment on that symbol says what v3.1 calls it.
 * `PEDefinitions` supplies `UICCCapability`, which Annex H imports
 * for `EUICCInfo2`.
 */
export * as RSPDefinitions from "./lib/modules/RSPDefinitions/index.mjs";
export * as PEDefinitions from "./lib/modules/PEDefinitions/index.mjs";
