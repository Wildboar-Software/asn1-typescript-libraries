/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.14 / ECMA-285 §19.1.14): set
 * label and/or associated number of a button. At least one of `buttonLabel` or
 * `buttonAssociatedNumber` is required. Generates a Button Information event.
 * If already at the requested value: positive ack and no event (ECMA-269 §9.5.1
 * FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setButtonInformation.oa.mjs";
export * from "./SetButtonInformationArgument.ta.mjs";
export * from "./SetButtonInformationResult.ta.mjs";
