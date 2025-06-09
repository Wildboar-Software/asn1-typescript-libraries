/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.js";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.js";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.js";
export { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.js";
export { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.js";

/* START_OF_SYMBOL_DEFINITION DOP_Invokable */
/**
 * @summary DOP_Invokable
 * @description
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
/* END_OF_SYMBOL_DEFINITION DOP_Invokable */

/* eslint-enable */
