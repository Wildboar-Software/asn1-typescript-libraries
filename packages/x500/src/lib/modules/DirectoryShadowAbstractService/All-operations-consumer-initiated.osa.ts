/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.js";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.js";
export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.js";

/* START_OF_SYMBOL_DEFINITION All_operations_consumer_initiated */
/**
 * @summary All_operations_consumer_initiated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * All-operations-consumer-initiated OPERATION ::= {requestShadowUpdate | updateShadow}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const All_operations_consumer_initiated: OPERATION[] = [
    requestShadowUpdate,
    updateShadow,
];
/* END_OF_SYMBOL_DEFINITION All_operations_consumer_initiated */

/* eslint-enable */
