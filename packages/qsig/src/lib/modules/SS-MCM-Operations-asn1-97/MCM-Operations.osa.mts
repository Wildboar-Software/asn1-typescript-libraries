/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { mCMNewMsg } from "../SS-MCM-Operations-asn1-97/mCMNewMsg.oa.mjs";
import { mCMNoNewMsg } from "../SS-MCM-Operations-asn1-97/mCMNoNewMsg.oa.mjs";
import { mCMUpdate } from "../SS-MCM-Operations-asn1-97/mCMUpdate.oa.mjs";
import { mCMUpdateReq } from "../SS-MCM-Operations-asn1-97/mCMUpdateReq.oa.mjs";
import { mCMService } from "../SS-MCM-Operations-asn1-97/mCMService.oa.mjs";
import { mCMInterrogate } from "../SS-MCM-Operations-asn1-97/mCMInterrogate.oa.mjs";
import { mCMailboxFull } from "../SS-MCM-Operations-asn1-97/mCMailboxFull.oa.mjs";

/**
 * @summary MCM_Operations
 * @description
 *
 * Operations of SS-MCM (ECMA-347 §6.3.1). Each invoke is
 * carried in a Facility information element on a
 * call-independent signalling connection (§6.3.2, §6.5).
 * The NFE destination entity is `endPINX`. The sender that
 * opened the connection may clear it on a return result,
 * return error, or reject, or may keep it (§6.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCM-Operations OPERATION ::= {
 *     mCMNewMsg
 *     | mCMNoNewMsg
 *     | mCMUpdate
 *     | mCMUpdateReq
 *     | mCMService
 *     | mCMInterrogate
 *     | mCMailboxFull
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const MCM_Operations: (OPERATION)[] = [ mCMNewMsg, mCMNoNewMsg, mCMUpdate, mCMUpdateReq, mCMService, mCMInterrogate, mCMailboxFull, ];

/* eslint-enable */
