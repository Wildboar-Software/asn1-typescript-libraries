/**
 * @description
 *
 * Digital-data call capability parameters used in capability exchange:
 * supported connection rates and delay tolerances, available channels at a
 * device, and max channels per connection. ECMA-269 §12.2.20, Get Logical
 * Device Information; ECMA-285 §9.13.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 */
export * from "./ConnectionRateList.ta.mjs";
export * from "./DelayToleranceList.ta.mjs";
export * from "./MaxChannelBind.ta.mjs";
export * from "./NumberOfChannels.ta.mjs";
