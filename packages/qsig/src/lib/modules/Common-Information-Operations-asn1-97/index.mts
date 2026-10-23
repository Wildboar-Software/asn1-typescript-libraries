/**
 * @module
 * @description
 *
 * Operations for ANF Common Information (ECMA-251 3rd ed.,
 * Dec 2001, §6.3.1). Exchanges feature availability, party
 * category, and equipment identity between the two ends of a
 * connection. Solicited (cmnRequest) and unsolicited (cmnInform)
 * services may be combined.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export * from "./CMN-Operations.osa.mjs";
export * from "./CMNExtSet.osa.mjs";
export * from "./CmnArg-extension.ta.mjs";
export * from "./CmnArg.ta.mjs";
export * from "./DummyArg.ta.mjs";
export * from "./EquipmentId.ta.mjs";
export * from "./FeatureIdList.ta.mjs";
export * from "./PartyCategory.ta.mjs";
export * from "./cmnInform.oa.mjs";
export * from "./cmnRequest.oa.mjs";
