/**
 * @description
 *
 * Physical Device Feature event (ECMA-269 §21.2.3 / ECMA-285 §19.2.3): A
 * display's contents changed. Entire display snapshot. `contentsOfDisplay` has
 * `logicalRows * logicalColumns` characters. After Set Display, completion
 * matches that service's completion criteria. Not generated when a Set request
 * leaves the feature unchanged (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./DisplayUpdatedEvent.ta.mjs";
