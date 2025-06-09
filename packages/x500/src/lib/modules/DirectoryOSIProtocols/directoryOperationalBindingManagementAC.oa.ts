/* eslint-disable */
import { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.js";
import { id_ac_directoryOperationalBindingManagementAC } from "../DirectoryOSIProtocols/id-ac-directoryOperationalBindingManagementAC.va.js";
import { dSAOperationalBindingManagementBind } from "../OperationalBindingManagement/dSAOperationalBindingManagementBind.oa.js";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.js";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.js";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.js";
export { id_ac_directoryOperationalBindingManagementAC } from "../DirectoryOSIProtocols/id-ac-directoryOperationalBindingManagementAC.va.js";
export { dSAOperationalBindingManagementBind } from "../OperationalBindingManagement/dSAOperationalBindingManagementBind.oa.js";
export { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa.js";
export { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa.js";
export { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa.js";

/* START_OF_SYMBOL_DEFINITION directoryOperationalBindingManagementAC */
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
/* END_OF_SYMBOL_DEFINITION directoryOperationalBindingManagementAC */

/* eslint-enable */
