/**
 * @module
 * @description
 *
 * Mailbox Identification (ECMA-347, 1st edition,
 * June 2003). The Message Centre PINX names which mailbox
 * the following information belongs to. The Served User
 * PINX authenticates the Served User at a mailbox (§7.1,
 * §7.5). This is used when the Served User has more than
 * one mailbox at the Message Centre.
 *
 * §7.2 requires call-independent control (ECMA-165).
 * §7.5 does not repeat the connection rules of §6.5. The
 * NFE destination entity is `endPINX`. The interpretation
 * APDU is omitted or `rejectAnyUnrecognizedInvokePdu`
 * (§7.3.2.1).
 *
 * On a `mIDMailboxAuth` return error or reject, the Served
 * User PINX shall not send `mCMUpdateReq`, `mCMService`,
 * or `mCMInterrogate`. On a `mIDMailboxID` return error or
 * reject, the Message Centre PINX may still send
 * `mCMNewMsg`, `mCMNoNewMsg`, `mCMUpdate`, and
 * `mCMailboxFull` (§7.8.40). §7.8.40 spells the
 * interrogate operation `mCInterrogate`; §6.8.40 uses
 * `mCMInterrogate`.
 *
 * In Message Centre Access profile 3, a successful SS-MID
 * invoke is sent before SS-MCM APDUs for that mailbox, and
 * again before APDUs for a different mailbox (ECMA-345
 * §7.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-345/
 */
export * from "./MID-Operations.osa.mjs";
export * from "./MIDDummyRes.ta.mjs";
export * from "./MIDExtSet.osa.mjs";
export * from "./MIDExtensions.ta.mjs";
export * from "./MIDMailboxAuthArg.ta.mjs";
export * from "./MIDMailboxIDArg.ta.mjs";
export * from "./PartyInfo.ta.mjs";
export * from "./String.ta.mjs";
export * from "./authorizationFailed.oa.mjs";
export * from "./invalidMailbox.oa.mjs";
export * from "./mIDMailboxAuth.oa.mjs";
export * from "./mIDMailboxID.oa.mjs";
export * from "./unspecified.oa.mjs";
