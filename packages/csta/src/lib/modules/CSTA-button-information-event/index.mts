/**
 * @description
 *
 * Physical Device Feature event (ECMA-269 §21.2.1 / ECMA-285 §19.2.1): Button
 * info changed (Set Button Information or manual/management). At least one of
 * `buttonLabel`, `buttonAssociatedNumber`, `buttonPressIndicator`. Not
 * generated when a Set request leaves the feature unchanged (ECMA-269 §9.5.1 FR
 * 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./ButtonInformationEvent.ta.mjs";
