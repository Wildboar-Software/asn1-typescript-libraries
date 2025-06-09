/* eslint-disable */
import { id_idm_disp } from "../DirectoryIDMProtocols/id-idm-disp.va.js";
import { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.js";
import { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa.js";
import { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.js";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.js";
import { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { id_idm_disp } from "../DirectoryIDMProtocols/id-idm-disp.va.js";
export { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.js";
export { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa.js";
export { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.js";
export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.js";
export { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.js";

/* START_OF_SYMBOL_DEFINITION disp_ip */
/**
 * @summary disp_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * disp-ip IDM-PROTOCOL ::= {
 *   BIND-OPERATION  dSAShadowBind
 *   OPERATIONS      {requestShadowUpdate |
 *                    updateShadow |
 *                    coordinateShadowUpdate}
 *   ID              id-idm-disp }
 * ```
 *
 * @constant
 * @type {IDM_PROTOCOL}
 * @implements {IDM_PROTOCOL}
 */
export const disp_ip: IDM_PROTOCOL = {
    class: "IDM-PROTOCOL",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAShadowBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        requestShadowUpdate,
        updateShadow,
        coordinateShadowUpdate,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_idm_disp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION disp_ip */

/* eslint-enable */
