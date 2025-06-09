/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.js";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.js";
export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.js";

/* START_OF_SYMBOL_DEFINITION All_operations_supplier_initiated */
/**
 * @summary All_operations_supplier_initiated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * All-operations-supplier-initiated OPERATION ::= {coordinateShadowUpdate | updateShadow}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const All_operations_supplier_initiated: OPERATION[] = [
    coordinateShadowUpdate,
    updateShadow,
];
/* END_OF_SYMBOL_DEFINITION All_operations_supplier_initiated */

/* eslint-enable */
