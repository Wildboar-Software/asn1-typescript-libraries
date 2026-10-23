/**
 * @module
 * @description
 *
 * Call Offer (SS-CO) signalling operations (ECMA-192 4th ed.,
 * December 2001). On request from the calling user, a call is
 * offered to a busy called user and waits for that user to accept
 * it (ECMA-191 §6.1.1; ECMA-192 §6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-191/
 */
export * from "./COExtSet.osa.mjs";
export * from "./Call-Offer-Operations.osa.mjs";
export * from "./DummyArg.ta.mjs";
export * from "./DummyRes.ta.mjs";
export * from "./PathRetainArg-extendedServiceList.ta.mjs";
export * from "./PathRetainArg.ta.mjs";
export * from "./ServiceAvailableArg-extendedServiceList.ta.mjs";
export * from "./ServiceAvailableArg.ta.mjs";
export * from "./ServiceList.ta.mjs";
export * from "./callOfferRequest.oa.mjs";
export * from "./cfbOverride.oa.mjs";
export * from "./notBusy.oa.mjs";
export * from "./pathRetain.oa.mjs";
export * from "./serviceAvailable.oa.mjs";
export * from "./temporarilyUnavailable.oa.mjs";
export * from "./unspecified.oa.mjs";
