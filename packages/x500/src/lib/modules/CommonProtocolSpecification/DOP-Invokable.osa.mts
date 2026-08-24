/* eslint-disable */
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.mjs";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.mjs";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.mjs";
/**
 * @summary DOP_Invokable
 * @description
 *
 * ROS operations the DOP initiator may invoke. Same three ops as
 * `DOP-Returnable`. OSI: only the Bind initiator invokes DOP operations.
 * IDM (`dop-ip`) permits either side to request. Opcodes 100 / 101 /
 * 102 are not sequential (`terminate` is 101, `modify` is 102).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DOP-Invokable OPERATION ::= {establishOperationalBinding |
 *    modifyOperationalBinding |
 *    terminateOperationalBinding}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const DOP_Invokable: OPERATION[] = [
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
];

/* eslint-enable */
