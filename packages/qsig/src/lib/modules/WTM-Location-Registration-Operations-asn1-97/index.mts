/**
 * @module
 * @description
 *
 * SS-WTLR and ANF-WTINFO at the Q reference point. ECMA-302 2nd edition
 * (December 2001), aligned with ISO/IEC 15429. SS-WTLR registers or deregisters
 * a WTM user's location so the PISN can route incoming calls and offer services
 * in the current location area (ECMA-302 §6.1). ANF-WTINFO carries
 * route-restriction information from the Home PINX to the Visitor PINX and lets
 * either PINX check location data (§7.1). Module
 * `WTM-Location-Registration-Operations-asn1-97`. §6.3.1 assigns arc
 * `wtlr-operations-asn1-97(1)` under `pss1-location-registration(15429)`.
 * ECMA-282 §6.3.1 imports this module under arc `wtmlr-operations-asn1-97(1)`.
 * Invokes set NFE `destinationEntity` to `endPINX`; Interpretation is omitted
 * or `rejectAnyUnrecognisedInvokePdu` (§6.3.2.1, §7.3.2.1). `pisnEnquiry` is
 * defined here; ECMA-282 only imports it.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 */
export * from "./AlternativeId.ta.mjs";
export * from "./CheckResult.ta.mjs";
export * from "./DummyRes.ta.mjs";
export * from "./GetRRCInfArg.ta.mjs";
export * from "./GetRRCInfRes.ta.mjs";
export * from "./LocDeRegArg.ta.mjs";
export * from "./LocDelArg.ta.mjs";
export * from "./LocInfoCheckArg.ta.mjs";
export * from "./LocInfoCheckRes.ta.mjs";
export * from "./LocUpdArg.ta.mjs";
export * from "./LrExtension.ta.mjs";
export * from "./PisnEnqArg.ta.mjs";
export * from "./PisnEnqRes.ta.mjs";
export * from "./RRClass.ta.mjs";
export * from "./WTMLR-Operations.osa.mjs";
export * from "./WTMLRExtSet.osa.mjs";
export * from "./WtmUserId.ta.mjs";
export * from "./getRRCInf.oa.mjs";
export * from "./locDeReg.oa.mjs";
export * from "./locDelete.oa.mjs";
export * from "./locInfoCheck.oa.mjs";
export * from "./locUpdate.oa.mjs";
export * from "./notAuthorized.oa.mjs";
export * from "./pisnEnquiry.oa.mjs";
export * from "./temporarilyUnavailable.oa.mjs";
export * from "./unspecified.oa.mjs";
