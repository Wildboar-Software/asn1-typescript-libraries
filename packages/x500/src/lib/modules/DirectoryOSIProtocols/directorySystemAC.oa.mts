/* eslint-disable */
import { type APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.mjs";
import { id_ac_directorySystemAC } from "../DirectoryOSIProtocols/id-ac-directorySystemAC.va.mjs";
import { chainedAbandon } from "../DistributedOperations/chainedAbandon.oa.mjs";
import { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.mjs";
import { chainedAdministerPassword } from "../DistributedOperations/chainedAdministerPassword.oa.mjs";
import { chainedChangePassword } from "../DistributedOperations/chainedChangePassword.oa.mjs";
import { chainedCompare } from "../DistributedOperations/chainedCompare.oa.mjs";
import { chainedLdapTransport } from "../DistributedOperations/chainedLdapTransport.oa.mjs";
import { chainedLinkedLDAP } from "../DistributedOperations/chainedLinkedLDAP.oa.mjs";
import { chainedList } from "../DistributedOperations/chainedList.oa.mjs";
import { chainedModifyDN } from "../DistributedOperations/chainedModifyDN.oa.mjs";
import { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.mjs";
import { chainedRead } from "../DistributedOperations/chainedRead.oa.mjs";
import { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.mjs";
import { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
import { dSABind } from "../DistributedOperations/dSABind.oa.mjs";
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

/* eslint-enable */
