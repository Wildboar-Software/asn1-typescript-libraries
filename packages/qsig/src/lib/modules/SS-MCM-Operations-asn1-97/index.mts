/**
 * @module
 * @description
 *
 * Message Centre Monitoring (ECMA-347, 1st edition,
 * June 2003). The Message Centre PINX reports a new
 * message, an empty new-message queue, a change in stored
 * messages, or a full mailbox. The Served User PINX
 * activates, deactivates, interrogates, or requests an
 * update (§6.1, §6.5). SS-MCM includes SS-MWI: local codes
 * 80, 81, and 82 are `mWIActivate`, `mWIDeactivate`, and
 * `mWIInterrogate` (§6.3.1, §6.8.24).
 *
 * APDUs use a call-independent signalling connection. The
 * sender that opened it may clear on a return result,
 * return error, or reject, or may keep it (§6.5). The NFE
 * destination entity is `endPINX` (§6.3.2.1).
 *
 * If the Served User has more than one mailbox, Message
 * Centre Access profile 3 identifies that mailbox with
 * SS-MID before the SS-MCM APDUs that refer to it
 * (ECMA-345 §7.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-345/
 */
export * from "./AddressHeader.ta.mjs";
export * from "./AllMsgInfo.ta.mjs";
export * from "./CompleteInfo.ta.mjs";
export * from "./CompressedInfo.ta.mjs";
export * from "./MCM-Operations.osa.mjs";
export * from "./MCMChange.ta.mjs";
export * from "./MCMDummyRes.ta.mjs";
export * from "./MCMExtSet.osa.mjs";
export * from "./MCMExtensions.ta.mjs";
export * from "./MCMInterrogateArg.ta.mjs";
export * from "./MCMInterrogateRes.ta.mjs";
export * from "./MCMMode.ta.mjs";
export * from "./MCMNewMsgArg-argumentExt.ta.mjs";
export * from "./MCMNewMsgArg.ta.mjs";
export * from "./MCMNoNewMsgArg-argumentExt.ta.mjs";
export * from "./MCMNoNewMsgArg.ta.mjs";
export * from "./MCMServiceArg.ta.mjs";
export * from "./MCMServiceInfo.ta.mjs";
export * from "./MCMUpdateArg.ta.mjs";
export * from "./MCMUpdateReqArg-argumentExt.ta.mjs";
export * from "./MCMUpdateReqArg.ta.mjs";
export * from "./MCMUpdateReqRes.ta.mjs";
export * from "./MCMUpdateReqResElt-argumentExt.ta.mjs";
export * from "./MCMUpdateReqResElt.ta.mjs";
export * from "./MCMailboxFullArg.ta.mjs";
export * from "./MailboxFullFor.ta.mjs";
export * from "./MailboxFullPar.ta.mjs";
export * from "./MessageInfo.ta.mjs";
export * from "./MessageType.ta.mjs";
export * from "./MsgCentreId.ta.mjs";
export * from "./NrOfMessages.ta.mjs";
export * from "./PartyInfo.ta.mjs";
export * from "./Priority.ta.mjs";
export * from "./TimeStamp.ta.mjs";
export * from "./UpdateInfo.ta.mjs";
export * from "./mCMInterrogate.oa.mjs";
export * from "./mCMModeNotProvided.oa.mjs";
export * from "./mCMNewMsg.oa.mjs";
export * from "./mCMNoNewMsg.oa.mjs";
export * from "./mCMService.oa.mjs";
export * from "./mCMUpdate.oa.mjs";
export * from "./mCMUpdateReq.oa.mjs";
export * from "./mCMailboxFull.oa.mjs";
export * from "./unspecified.oa.mjs";
