/* eslint-disable */
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.mjs";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.mjs";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.mjs";
/**
 * @summary DOP_Returnable
 * @description
 *
 * ROS operations the DOP responder may return. Same three ops as
 * `DOP-Invokable`. OSI: only the Bind initiator invokes; IDM (`dop-ip`)
 * allows either side to request.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DOP-Returnable OPERATION ::= {establishOperationalBinding |
 *    modifyOperationalBinding |
 *    terminateOperationalBinding}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const DOP_Returnable: OPERATION[] = [
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
];

/* eslint-enable */
