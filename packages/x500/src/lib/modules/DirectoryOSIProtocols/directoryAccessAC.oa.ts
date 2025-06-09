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
import { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.js";
import { id_ac_directoryAccessAC } from "../DirectoryOSIProtocols/id-ac-directoryAccessAC.va.js";
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
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.js";
export { id_ac_directoryAccessAC } from "../DirectoryOSIProtocols/id-ac-directoryAccessAC.va.js";

/* START_OF_SYMBOL_DEFINITION directoryAccessAC */
/**
 * @summary directoryAccessAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryAccessAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            directoryBind
 *   OPERATIONS                {read |
 *                              compare |
 *                              abandon |
 *                              list |
 *                              search |
 *                              addEntry |
 *                              removeEntry |
 *                              modifyEntry |
 *                              modifyDN |
 *                              administerPassword |
 *                              changePassword }
 *   APPLICATION CONTEXT NAME  id-ac-directoryAccessAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const directoryAccessAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
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
    "&applicationContextName": id_ac_directoryAccessAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION directoryAccessAC */

/* eslint-enable */
