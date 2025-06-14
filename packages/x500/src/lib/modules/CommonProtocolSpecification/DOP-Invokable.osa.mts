/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.mjs";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.mjs";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.mjs";
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
