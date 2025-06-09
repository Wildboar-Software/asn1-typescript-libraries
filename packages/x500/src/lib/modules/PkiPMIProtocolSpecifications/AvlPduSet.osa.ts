/* eslint-disable */
import { addAvlReq } from "../PkiPMIProtocolSpecifications/addAvlReq.oa.js";
import { addAvlRsp } from "../PkiPMIProtocolSpecifications/addAvlRsp.oa.js";
import { certReplaceReq } from "../PkiPMIProtocolSpecifications/certReplaceReq.oa.js";
import { certReplaceRsp } from "../PkiPMIProtocolSpecifications/certReplaceRsp.oa.js";
import { certReq } from "../PkiPMIProtocolSpecifications/certReq.oa.js";
import { certRsp } from "../PkiPMIProtocolSpecifications/certRsp.oa.js";
import { certSubscribeReq } from "../PkiPMIProtocolSpecifications/certSubscribeReq.oa.js";
import { certSubscribeRsp } from "../PkiPMIProtocolSpecifications/certSubscribeRsp.oa.js";
import { certUnsubscribeReq } from "../PkiPMIProtocolSpecifications/certUnsubscribeReq.oa.js";
import { certUnsubscribeRsp } from "../PkiPMIProtocolSpecifications/certUnsubscribeRsp.oa.js";
import { deleteAvlReq } from "../PkiPMIProtocolSpecifications/deleteAvlReq.oa.js";
import { deleteAvlRsp } from "../PkiPMIProtocolSpecifications/deleteAvlRsp.oa.js";
import { rejectAVL } from "../PkiPMIProtocolSpecifications/rejectAVL.oa.js";
import { rejectCAsubscribe } from "../PkiPMIProtocolSpecifications/rejectCAsubscribe.oa.js";
import { replaceAvlReq } from "../PkiPMIProtocolSpecifications/replaceAvlReq.oa.js";
import { replaceAvlRsp } from "../PkiPMIProtocolSpecifications/replaceAvlRsp.oa.js";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.js";
export { addAvlReq } from "../PkiPMIProtocolSpecifications/addAvlReq.oa.js";
export { addAvlRsp } from "../PkiPMIProtocolSpecifications/addAvlRsp.oa.js";
export { certReplaceReq } from "../PkiPMIProtocolSpecifications/certReplaceReq.oa.js";
export { certReplaceRsp } from "../PkiPMIProtocolSpecifications/certReplaceRsp.oa.js";
export { certReq } from "../PkiPMIProtocolSpecifications/certReq.oa.js";
export { certRsp } from "../PkiPMIProtocolSpecifications/certRsp.oa.js";
export { certSubscribeReq } from "../PkiPMIProtocolSpecifications/certSubscribeReq.oa.js";
export { certSubscribeRsp } from "../PkiPMIProtocolSpecifications/certSubscribeRsp.oa.js";
export { certUnsubscribeReq } from "../PkiPMIProtocolSpecifications/certUnsubscribeReq.oa.js";
export { certUnsubscribeRsp } from "../PkiPMIProtocolSpecifications/certUnsubscribeRsp.oa.js";
export { deleteAvlReq } from "../PkiPMIProtocolSpecifications/deleteAvlReq.oa.js";
export { deleteAvlRsp } from "../PkiPMIProtocolSpecifications/deleteAvlRsp.oa.js";
export { rejectAVL } from "../PkiPMIProtocolSpecifications/rejectAVL.oa.js";
export { rejectCAsubscribe } from "../PkiPMIProtocolSpecifications/rejectCAsubscribe.oa.js";
export { replaceAvlReq } from "../PkiPMIProtocolSpecifications/replaceAvlReq.oa.js";
export { replaceAvlRsp } from "../PkiPMIProtocolSpecifications/replaceAvlRsp.oa.js";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.js";

/* START_OF_SYMBOL_DEFINITION AvlPduSet */
/**
 * @summary AvlPduSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvlPduSet WRAPPED-PDU ::= {
 *   certReq |
 *   certRsp |
 *   addAvlReq |
 *   addAvlRsp |
 *   replaceAvlReq |
 *   replaceAvlRsp |
 *   deleteAvlReq |
 *   deleteAvlRsp |
 *   rejectAVL |
 *   certSubscribeReq |
 *   certSubscribeRsp |
 *   certUnsubscribeReq |
 *   certUnsubscribeRsp |
 *   certReplaceReq |
 *   certReplaceRsp |
 *   rejectCAsubscribe,
 *   ... }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU[]}
 *
 */
export const AvlPduSet: WRAPPED_PDU[] = [
    certReq,
    certRsp,
    addAvlReq,
    addAvlRsp,
    replaceAvlReq,
    replaceAvlRsp,
    deleteAvlReq,
    deleteAvlRsp,
    rejectAVL,
    certSubscribeReq,
    certSubscribeRsp,
    certUnsubscribeReq,
    certUnsubscribeRsp,
    certReplaceReq,
    certReplaceRsp,
    rejectCAsubscribe,
];
/* END_OF_SYMBOL_DEFINITION AvlPduSet */

/* eslint-enable */
