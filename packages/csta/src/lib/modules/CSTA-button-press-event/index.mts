/**
 * @description
 *
 * Physical Device Feature event (ECMA-269 §21.2.2 / ECMA-285 §19.2.2): A button
 * was pressed (manually or Button Press service). Not used to track the
 * function the button represents (§21.2.2.2 FR 1). At least one of
 * `buttonLabel` or `buttonAssociatedNumber`. Not generated when a Set request
 * leaves the feature unchanged (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./ButtonPressEvent.ta.mjs";
