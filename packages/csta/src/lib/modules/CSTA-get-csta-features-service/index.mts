/**
 * @description
 *
 * Get CSTA Features (ECMA-269 §13.1.1 / ECMA-285 §11.1.1).
 * Computing function queries which CSTA services and events the
 * switching function supports anywhere in the sub-domain. Per-device
 * support may still vary.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getCSTAFeature.oa.mjs";
export * from "./GetCSTAFeatureArgument.ta.mjs";
export * from "./GetCSTAFeatureResult-supportedEvents.ta.mjs";
export * from "./GetCSTAFeatureResult-supportedServices.ta.mjs";
export * from "./GetCSTAFeatureResult.ta.mjs";
