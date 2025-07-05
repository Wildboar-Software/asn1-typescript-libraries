/* eslint-disable */
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.mjs";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
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

/* eslint-enable */
