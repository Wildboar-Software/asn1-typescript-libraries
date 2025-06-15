/* eslint-disable */
import { id_idm_dop } from "../DirectoryIDMProtocols/id-idm-dop.va.mjs";
import { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.mjs";
import { dSAOperationalBindingManagementBind } from "../OperationalBindingManagement/dSAOperationalBindingManagementBind.oa.mjs";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.mjs";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.mjs";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.mjs";
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

/* eslint-enable */
