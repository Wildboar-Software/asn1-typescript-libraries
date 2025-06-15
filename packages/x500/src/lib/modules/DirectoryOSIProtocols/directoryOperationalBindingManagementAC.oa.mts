/* eslint-disable */
import { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.mjs";
import { id_ac_directoryOperationalBindingManagementAC } from "../DirectoryOSIProtocols/id-ac-directoryOperationalBindingManagementAC.va.mjs";
import { dSAOperationalBindingManagementBind } from "../OperationalBindingManagement/dSAOperationalBindingManagementBind.oa.mjs";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.mjs";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.mjs";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.mjs";
/**
 * @summary directoryOperationalBindingManagementAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryOperationalBindingManagementAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSAOperationalBindingManagementBind
 *   OPERATIONS                {establishOperationalBinding |
 *                              modifyOperationalBinding |
 *                              terminateOperationalBinding}
 *   APPLICATION CONTEXT NAME  id-ac-directoryOperationalBindingManagementAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const directoryOperationalBindingManagementAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAOperationalBindingManagementBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        establishOperationalBinding,
        modifyOperationalBinding,
        terminateOperationalBinding,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_directoryOperationalBindingManagementAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
