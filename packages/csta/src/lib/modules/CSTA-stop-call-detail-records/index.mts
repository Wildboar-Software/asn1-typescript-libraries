/**
 * @description
 *
 * Stop Call Detail Records Transmission: cancel a CDR transmission. Either side
 * may invoke; positive ack invalidates `cdrCrossRefID` (ECMA-269 §27.1.5,
 * ECMA-285 §25.1.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./stopCDRTransmission.oa.mjs";
export * from "./StopCDRTransmissionArgument.ta.mjs";
export * from "./StopCDRTransmissionResult.ta.mjs";
