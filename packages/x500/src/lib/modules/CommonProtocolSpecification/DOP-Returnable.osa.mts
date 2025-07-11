/* eslint-disable */
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.mjs";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.mjs";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.mjs";
/**
 * @summary DOP_Returnable
 * @description
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
