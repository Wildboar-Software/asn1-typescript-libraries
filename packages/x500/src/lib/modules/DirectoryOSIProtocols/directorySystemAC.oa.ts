/* eslint-disable */
import { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.js";
import { id_ac_directorySystemAC } from "../DirectoryOSIProtocols/id-ac-directorySystemAC.va.js";
import { chainedAbandon } from "../DistributedOperations/chainedAbandon.oa.js";
import { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.js";
import { chainedAdministerPassword } from "../DistributedOperations/chainedAdministerPassword.oa.js";
import { chainedChangePassword } from "../DistributedOperations/chainedChangePassword.oa.js";
import { chainedCompare } from "../DistributedOperations/chainedCompare.oa.js";
import { chainedLdapTransport } from "../DistributedOperations/chainedLdapTransport.oa.js";
import { chainedLinkedLDAP } from "../DistributedOperations/chainedLinkedLDAP.oa.js";
import { chainedList } from "../DistributedOperations/chainedList.oa.js";
import { chainedModifyDN } from "../DistributedOperations/chainedModifyDN.oa.js";
import { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.js";
import { chainedRead } from "../DistributedOperations/chainedRead.oa.js";
import { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.js";
import { chainedSearch } from "../DistributedOperations/chainedSearch.oa.js";
import { dSABind } from "../DistributedOperations/dSABind.oa.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.js";
export { id_ac_directorySystemAC } from "../DirectoryOSIProtocols/id-ac-directorySystemAC.va.js";
export { chainedAbandon } from "../DistributedOperations/chainedAbandon.oa.js";
export { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.js";
export { chainedAdministerPassword } from "../DistributedOperations/chainedAdministerPassword.oa.js";
export { chainedChangePassword } from "../DistributedOperations/chainedChangePassword.oa.js";
export { chainedCompare } from "../DistributedOperations/chainedCompare.oa.js";
export { chainedLdapTransport } from "../DistributedOperations/chainedLdapTransport.oa.js";
export { chainedLinkedLDAP } from "../DistributedOperations/chainedLinkedLDAP.oa.js";
export { chainedList } from "../DistributedOperations/chainedList.oa.js";
export { chainedModifyDN } from "../DistributedOperations/chainedModifyDN.oa.js";
export { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.js";
export { chainedRead } from "../DistributedOperations/chainedRead.oa.js";
export { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.js";
export { chainedSearch } from "../DistributedOperations/chainedSearch.oa.js";
export { dSABind } from "../DistributedOperations/dSABind.oa.js";

/* START_OF_SYMBOL_DEFINITION directorySystemAC */
/**
 * @summary directorySystemAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directorySystemAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSABind
 *   OPERATIONS                {chainedRead |
 *                              chainedCompare |
 *                              chainedAbandon |
 *                              chainedList |
 *                              chainedSearch |
 *                              chainedAddEntry |
 *                              chainedRemoveEntry |
 *                              chainedModifyEntry |
 *                              chainedModifyDN |
 *                              chainedAdministerPassword |
 *                              chainedChangePassword |
 *                              chainedLdapTransport |
 *                              chainedLinkedLDAP }
 *   APPLICATION CONTEXT NAME  id-ac-directorySystemAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const directorySystemAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSABind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        chainedRead,
        chainedCompare,
        chainedAbandon,
        chainedList,
        chainedSearch,
        chainedAddEntry,
        chainedRemoveEntry,
        chainedModifyEntry,
        chainedModifyDN,
        chainedAdministerPassword,
        chainedChangePassword,
        chainedLdapTransport,
        chainedLinkedLDAP,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_directorySystemAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION directorySystemAC */

/* eslint-enable */
