/* eslint-disable */
import { addAvlReq } from "../PkiPMIProtocolSpecifications/addAvlReq.oa.mjs";
import { addAvlRsp } from "../PkiPMIProtocolSpecifications/addAvlRsp.oa.mjs";
import { certReplaceReq } from "../PkiPMIProtocolSpecifications/certReplaceReq.oa.mjs";
import { certReplaceRsp } from "../PkiPMIProtocolSpecifications/certReplaceRsp.oa.mjs";
import { certReq } from "../PkiPMIProtocolSpecifications/certReq.oa.mjs";
import { certRsp } from "../PkiPMIProtocolSpecifications/certRsp.oa.mjs";
import { certSubscribeReq } from "../PkiPMIProtocolSpecifications/certSubscribeReq.oa.mjs";
import { certSubscribeRsp } from "../PkiPMIProtocolSpecifications/certSubscribeRsp.oa.mjs";
import { certUnsubscribeReq } from "../PkiPMIProtocolSpecifications/certUnsubscribeReq.oa.mjs";
import { certUnsubscribeRsp } from "../PkiPMIProtocolSpecifications/certUnsubscribeRsp.oa.mjs";
import { deleteAvlReq } from "../PkiPMIProtocolSpecifications/deleteAvlReq.oa.mjs";
import { deleteAvlRsp } from "../PkiPMIProtocolSpecifications/deleteAvlRsp.oa.mjs";
import { rejectAVL } from "../PkiPMIProtocolSpecifications/rejectAVL.oa.mjs";
import { rejectCAsubscribe } from "../PkiPMIProtocolSpecifications/rejectCAsubscribe.oa.mjs";
import { replaceAvlReq } from "../PkiPMIProtocolSpecifications/replaceAvlReq.oa.mjs";
import { replaceAvlRsp } from "../PkiPMIProtocolSpecifications/replaceAvlRsp.oa.mjs";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
export { addAvlReq } from "../PkiPMIProtocolSpecifications/addAvlReq.oa.mjs";
export { addAvlRsp } from "../PkiPMIProtocolSpecifications/addAvlRsp.oa.mjs";
export { certReplaceReq } from "../PkiPMIProtocolSpecifications/certReplaceReq.oa.mjs";
export { certReplaceRsp } from "../PkiPMIProtocolSpecifications/certReplaceRsp.oa.mjs";
export { certReq } from "../PkiPMIProtocolSpecifications/certReq.oa.mjs";
export { certRsp } from "../PkiPMIProtocolSpecifications/certRsp.oa.mjs";
export { certSubscribeReq } from "../PkiPMIProtocolSpecifications/certSubscribeReq.oa.mjs";
export { certSubscribeRsp } from "../PkiPMIProtocolSpecifications/certSubscribeRsp.oa.mjs";
export { certUnsubscribeReq } from "../PkiPMIProtocolSpecifications/certUnsubscribeReq.oa.mjs";
export { certUnsubscribeRsp } from "../PkiPMIProtocolSpecifications/certUnsubscribeRsp.oa.mjs";
export { deleteAvlReq } from "../PkiPMIProtocolSpecifications/deleteAvlReq.oa.mjs";
export { deleteAvlRsp } from "../PkiPMIProtocolSpecifications/deleteAvlRsp.oa.mjs";
export { rejectAVL } from "../PkiPMIProtocolSpecifications/rejectAVL.oa.mjs";
export { rejectCAsubscribe } from "../PkiPMIProtocolSpecifications/rejectCAsubscribe.oa.mjs";
export { replaceAvlReq } from "../PkiPMIProtocolSpecifications/replaceAvlReq.oa.mjs";
export { replaceAvlRsp } from "../PkiPMIProtocolSpecifications/replaceAvlRsp.oa.mjs";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";

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
