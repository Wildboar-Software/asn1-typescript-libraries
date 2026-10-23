/**
 * @module
 * @description
 *
 * Network Facility Extension, which gives a Facility information element
 * network significance between PINXs that need not be adjacent (ECMA-165 §4.25,
 * §7.1.2, §11.3.3.1 Table 31). X.680 edition,
 * `network-facility-extension-asn1-97(13)`. Table 10 states which elements are
 * present for each source and destination. Absence of an NFE means link
 * significance only (§4.23, §7.1.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export * from "./AddressInformation.ta.mjs";
export * from "./EntityType.ta.mjs";
export * from "./NetworkFacilityExtension.ta.mjs";
