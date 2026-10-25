/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
// export { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
// export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
import { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.mjs";
// export { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.mjs";


/**
 * @summary DISP_Invokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DISP-Invokable OPERATION ::= {requestShadowUpdate | updateShadow | coordinateShadowUpdate}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const DISP_Invokable: (OPERATION)[] = [ requestShadowUpdate, updateShadow, coordinateShadowUpdate, ];

/* eslint-enable */
