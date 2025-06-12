/* eslint-disable */
import { id_idm_dop } from "../DirectoryIDMProtocols/id-idm-dop.va.mjs";
import { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.mjs";
import { dSAOperationalBindingManagementBind } from "../OperationalBindingManagement/dSAOperationalBindingManagementBind.oa.mjs";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.mjs";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.mjs";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.mjs";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
export { id_idm_dop } from "../DirectoryIDMProtocols/id-idm-dop.va.mjs";
export { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.mjs";
export { dSAOperationalBindingManagementBind } from "../OperationalBindingManagement/dSAOperationalBindingManagementBind.oa.mjs";
export { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.mjs";
export { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.mjs";
export { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.mjs";

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
