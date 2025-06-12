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
import { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.mjs";
import { id_ac_directoryAccessAC } from "../DirectoryOSIProtocols/id-ac-directoryAccessAC.va.mjs";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
export { abandon } from "../DirectoryAbstractService/abandon.oa.mjs";
export { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
export { administerPassword } from "../DirectoryAbstractService/administerPassword.oa.mjs";
export { changePassword } from "../DirectoryAbstractService/changePassword.oa.mjs";
export { compare } from "../DirectoryAbstractService/compare.oa.mjs";
export { directoryBind } from "../DirectoryAbstractService/directoryBind.oa.mjs";
export { list } from "../DirectoryAbstractService/list.oa.mjs";
export { modifyDN } from "../DirectoryAbstractService/modifyDN.oa.mjs";
export { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";
export { read } from "../DirectoryAbstractService/read.oa.mjs";
export { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
export { search } from "../DirectoryAbstractService/search.oa.mjs";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.mjs";
export { id_ac_directoryAccessAC } from "../DirectoryOSIProtocols/id-ac-directoryAccessAC.va.mjs";

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
