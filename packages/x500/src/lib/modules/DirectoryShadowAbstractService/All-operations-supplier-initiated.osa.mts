/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.mjs";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
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
