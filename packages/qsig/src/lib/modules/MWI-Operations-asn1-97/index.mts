/**
 * @module
 * @description
 *
 * QSIG Message Waiting Indication (ECMA-242, 4th edition, December 2001). A
 * Message Centre PINX activates or cancels a message-waiting indication at a
 * Served User PINX, and the Served User PINX may interrogate that status. All
 * three operations use a call-independent signalling connection. Service
 * behaviour is ECMA-241, 4th edition, February 2002.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export * from "./BasicService.ta.mjs";
export * from "./DummyRes.ta.mjs";
export * from "./MWI-Operations.osa.mjs";
export * from "./MWIActivateArg-argumentExt.ta.mjs";
export * from "./MWIActivateArg.ta.mjs";
export * from "./MWIDeactivateArg-argumentExt.ta.mjs";
export * from "./MWIDeactivateArg.ta.mjs";
export * from "./MWIExtSet.osa.mjs";
export * from "./MWIInterrogateArg-argumentExt.ta.mjs";
export * from "./MWIInterrogateArg.ta.mjs";
export * from "./MWIInterrogateRes.ta.mjs";
export * from "./MWIInterrogateResElt-argumentExt.ta.mjs";
export * from "./MWIInterrogateResElt.ta.mjs";
export * from "./MsgCentreId.ta.mjs";
export * from "./NbOfMessages.ta.mjs";
export * from "./TimeStamp.ta.mjs";
export * from "./invalidMsgCentreId.oa.mjs";
export * from "./mWIActivate.oa.mjs";
export * from "./mWIDeactivate.oa.mjs";
export * from "./mWIInterrogate.oa.mjs";
export * from "./unspecified.oa.mjs";
