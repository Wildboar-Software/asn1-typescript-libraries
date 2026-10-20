/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
// export { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
// export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
import { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.mjs";
// export { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.mjs";


/**
 * @summary DISP_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DISP-Returnable OPERATION ::= {requestShadowUpdate | updateShadow | coordinateShadowUpdate}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const DISP_Returnable: (OPERATION)[] = [ requestShadowUpdate, updateShadow, coordinateShadowUpdate, ] as unknown as OPERATION[];

/* eslint-enable */
