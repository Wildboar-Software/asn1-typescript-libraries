/* eslint-disable */
import { abandon } from "../DirectoryAbstractService/abandon.oa.js";
import { addEntry } from "../DirectoryAbstractService/addEntry.oa.js";
import { administerPassword } from "../DirectoryAbstractService/administerPassword.oa.js";
import { changePassword } from "../DirectoryAbstractService/changePassword.oa.js";
import { compare } from "../DirectoryAbstractService/compare.oa.js";
import { directoryBind } from "../DirectoryAbstractService/directoryBind.oa.js";
import { list } from "../DirectoryAbstractService/list.oa.js";
import { modifyDN } from "../DirectoryAbstractService/modifyDN.oa.js";
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.js";
import { read } from "../DirectoryAbstractService/read.oa.js";
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.js";
import { search } from "../DirectoryAbstractService/search.oa.js";
import { id_idm_dap } from "../DirectoryIDMProtocols/id-idm-dap.va.js";
import { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { abandon } from "../DirectoryAbstractService/abandon.oa.js";
export { addEntry } from "../DirectoryAbstractService/addEntry.oa.js";
export { administerPassword } from "../DirectoryAbstractService/administerPassword.oa.js";
export { changePassword } from "../DirectoryAbstractService/changePassword.oa.js";
export { compare } from "../DirectoryAbstractService/compare.oa.js";
export { directoryBind } from "../DirectoryAbstractService/directoryBind.oa.js";
export { list } from "../DirectoryAbstractService/list.oa.js";
export { modifyDN } from "../DirectoryAbstractService/modifyDN.oa.js";
export { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.js";
export { read } from "../DirectoryAbstractService/read.oa.js";
export { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.js";
export { search } from "../DirectoryAbstractService/search.oa.js";
export { id_idm_dap } from "../DirectoryIDMProtocols/id-idm-dap.va.js";
export { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.js";

/* START_OF_SYMBOL_DEFINITION dap_ip */
/**
 * @summary dap_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dap-ip IDM-PROTOCOL ::= {
 *   BIND-OPERATION  directoryBind
 *   OPERATIONS      {read |
 *                    compare |
 *                    abandon |
 *                    list |
 *                    search |
 *                    addEntry |
 *                    removeEntry |
 *                    modifyEntry |
 *                    modifyDN |
 *                    administerPassword |
 *                    changePassword }
 *   ID              id-idm-dap }
 * ```
 *
 * @constant
 * @type {IDM_PROTOCOL}
 * @implements {IDM_PROTOCOL}
 */
export const dap_ip: IDM_PROTOCOL = {
    class: "IDM-PROTOCOL",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": directoryBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        read,
        compare,
        abandon,
        list,
        search,
        addEntry,
        removeEntry,
        modifyEntry,
        modifyDN,
        administerPassword,
        changePassword,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_idm_dap /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dap_ip */

/* eslint-enable */
