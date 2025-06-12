/* eslint-disable */
import { id_idm_disp } from "../DirectoryIDMProtocols/id-idm-disp.va.mjs";
import { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.mjs";
import { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa.mjs";
import { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
import { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.mjs";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
export { id_idm_disp } from "../DirectoryIDMProtocols/id-idm-disp.va.mjs";
export { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.mjs";
export { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa.mjs";
export { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
export { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.mjs";

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
