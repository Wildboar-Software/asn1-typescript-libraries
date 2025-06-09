/* eslint-disable */
import { id_idm_dop } from "../DirectoryIDMProtocols/id-idm-dop.va.js";
import { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.js";
import { dSAOperationalBindingManagementBind } from "../OperationalBindingManagement/dSAOperationalBindingManagementBind.oa.js";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.js";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.js";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { id_idm_dop } from "../DirectoryIDMProtocols/id-idm-dop.va.js";
export { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.js";
export { dSAOperationalBindingManagementBind } from "../OperationalBindingManagement/dSAOperationalBindingManagementBind.oa.js";
export { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.js";
export { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.js";
export { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.js";

/* START_OF_SYMBOL_DEFINITION dop_ip */
/**
 * @summary dop_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dop-ip IDM-PROTOCOL ::= {
 *   BIND-OPERATION  dSAOperationalBindingManagementBind
 *   OPERATIONS      {establishOperationalBinding |
 *                    modifyOperationalBinding |
 *                    terminateOperationalBinding}
 *   ID              id-idm-dop }
 * ```
 *
 * @constant
 * @type {IDM_PROTOCOL}
 * @implements {IDM_PROTOCOL}
 */
export const dop_ip: IDM_PROTOCOL = {
    class: "IDM-PROTOCOL",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAOperationalBindingManagementBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        establishOperationalBinding,
        modifyOperationalBinding,
        terminateOperationalBinding,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_idm_dop /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dop_ip */

/* eslint-enable */
