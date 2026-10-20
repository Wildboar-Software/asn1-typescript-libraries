/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
// export { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
// export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";


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
export
const All_operations_consumer_initiated: (OPERATION)[] = [ requestShadowUpdate, updateShadow, ];

/* eslint-enable */
