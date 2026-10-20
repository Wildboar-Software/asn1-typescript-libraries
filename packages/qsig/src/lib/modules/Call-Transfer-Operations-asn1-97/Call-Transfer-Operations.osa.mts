/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { callTransferIdentify } from "../Call-Transfer-Operations-asn1-97/callTransferIdentify.oa.mjs";
// export { callTransferIdentify } from "../Call-Transfer-Operations-asn1-97/callTransferIdentify.oa.mjs";
import { callTransferAbandon } from "../Call-Transfer-Operations-asn1-97/callTransferAbandon.oa.mjs";
// export { callTransferAbandon } from "../Call-Transfer-Operations-asn1-97/callTransferAbandon.oa.mjs";
import { callTransferInitiate } from "../Call-Transfer-Operations-asn1-97/callTransferInitiate.oa.mjs";
// export { callTransferInitiate } from "../Call-Transfer-Operations-asn1-97/callTransferInitiate.oa.mjs";
import { callTransferSetup } from "../Call-Transfer-Operations-asn1-97/callTransferSetup.oa.mjs";
// export { callTransferSetup } from "../Call-Transfer-Operations-asn1-97/callTransferSetup.oa.mjs";
import { callTransferActive } from "../Call-Transfer-Operations-asn1-97/callTransferActive.oa.mjs";
// export { callTransferActive } from "../Call-Transfer-Operations-asn1-97/callTransferActive.oa.mjs";
import { callTransferComplete } from "../Call-Transfer-Operations-asn1-97/callTransferComplete.oa.mjs";
// export { callTransferComplete } from "../Call-Transfer-Operations-asn1-97/callTransferComplete.oa.mjs";
import { callTransferUpdate } from "../Call-Transfer-Operations-asn1-97/callTransferUpdate.oa.mjs";
// export { callTransferUpdate } from "../Call-Transfer-Operations-asn1-97/callTransferUpdate.oa.mjs";
import { subaddressTransfer } from "../Call-Transfer-Operations-asn1-97/subaddressTransfer.oa.mjs";
// export { subaddressTransfer } from "../Call-Transfer-Operations-asn1-97/subaddressTransfer.oa.mjs";


/**
 * @summary Call_Transfer_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Call-Transfer-Operations OPERATION ::= {
 *     callTransferIdentify
 *     | callTransferAbandon
 *     | callTransferInitiate
 *     | callTransferSetup
 *     | callTransferActive
 *     | callTransferComplete
 *     | callTransferUpdate
 *     | subaddressTransfer
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Call_Transfer_Operations: (OPERATION)[] = [ callTransferIdentify, callTransferAbandon, callTransferInitiate, callTransferSetup, callTransferActive, callTransferComplete, callTransferUpdate, subaddressTransfer, ];

/* eslint-enable */
