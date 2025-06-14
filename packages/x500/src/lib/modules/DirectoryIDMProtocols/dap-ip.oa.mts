/* eslint-disable */
import { abandon } from "../DirectoryAbstractService/abandon.oa.mjs";
import { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
import { administerPassword } from "../DirectoryAbstractService/administerPassword.oa.mjs";
import { changePassword } from "../DirectoryAbstractService/changePassword.oa.mjs";
import { compare } from "../DirectoryAbstractService/compare.oa.mjs";
import { directoryBind } from "../DirectoryAbstractService/directoryBind.oa.mjs";
import { list } from "../DirectoryAbstractService/list.oa.mjs";
import { modifyDN } from "../DirectoryAbstractService/modifyDN.oa.mjs";
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";
import { read } from "../DirectoryAbstractService/read.oa.mjs";
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
import { search } from "../DirectoryAbstractService/search.oa.mjs";
import { id_idm_dap } from "../DirectoryIDMProtocols/id-idm-dap.va.mjs";
import { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.mjs";
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
