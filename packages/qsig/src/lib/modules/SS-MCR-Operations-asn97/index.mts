/**
 * @module
 * @description
 *
 * Make Call Request (SS-MCR) at the Q reference point. A Requesting
 * User asks a Co-operating User to set up a Requested Call to a
 * Destination User. That call is correlated with the Original Call
 * and is either a basic call or a call-independent signalling
 * connection. ECMA-344 1st edition (June 2003), §6.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 */
export * from "./CallType.ta.mjs";
export * from "./Correlation.ta.mjs";
export * from "./CorrelationReason.ta.mjs";
export * from "./MCAlertingArg.ta.mjs";
export * from "./MCInformArg.ta.mjs";
export * from "./MCRExtensions.ta.mjs";
export * from "./MCRequestArg.ta.mjs";
export * from "./MCRequestResult.ta.mjs";
export * from "./Make-Call-Request-Operations.osa.mjs";
export * from "./MakeCallRequestExtension.osa.mjs";
export * from "./invalidCooperationNumber.oa.mjs";
export * from "./invalidDestinationNumber.oa.mjs";
export * from "./mCAlerting.oa.mjs";
export * from "./mCCoopUserBusy.oa.mjs";
export * from "./mCCoopUserRejected.oa.mjs";
export * from "./mCDestUserBusy.oa.mjs";
export * from "./mCExecutionNotAllowed.oa.mjs";
export * from "./mCInform.oa.mjs";
export * from "./mCRequest.oa.mjs";
export * from "./mCRequestNotAllowed.oa.mjs";
export * from "./unspecified.oa.mjs";
