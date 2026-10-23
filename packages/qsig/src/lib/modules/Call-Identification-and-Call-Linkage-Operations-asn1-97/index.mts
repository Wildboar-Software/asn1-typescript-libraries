/**
 * @module
 * @description
 *
 * Operations for ANF Call Identification and Call Linkage
 * (ECMA-314 2nd ed., Dec 2001, §6.3.1). Assigns an end-to-end
 * Global Call Identification and, optionally, a Thread
 * Identification and a Leg Identification. The data structure
 * follows ECMA-269 §12.2.5, imported in ECMA-314 Annex D.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-314/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export * from "./CallIdentification-Operations.osa.mjs";
export * from "./CallIdentificationAssignArg.ta.mjs";
export * from "./CallIdentificationData-linkageID.ta.mjs";
export * from "./CallIdentificationData.ta.mjs";
export * from "./CallIdentificationUpdateArg.ta.mjs";
export * from "./ExampleExtSet.osa.mjs";
export * from "./ExtensionType.ta.mjs";
export * from "./GloballyUniqueID.ta.mjs";
export * from "./SubDomainID.ta.mjs";
export * from "./SwitchingSubDomainName.ta.mjs";
export * from "./TimeStamp.ta.mjs";
export * from "./callIdentificationAssign.oa.mjs";
export * from "./callIdentificationUpdate.oa.mjs";
