/* eslint-disable */
import { id_idm_dsp } from "../DirectoryIDMProtocols/id-idm-dsp.va.mjs";
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
import { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.mjs";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
export { id_idm_dsp } from "../DirectoryIDMProtocols/id-idm-dsp.va.mjs";
export { chainedAbandon } from "../DistributedOperations/chainedAbandon.oa.mjs";
export { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.mjs";
export { chainedAdministerPassword } from "../DistributedOperations/chainedAdministerPassword.oa.mjs";
export { chainedChangePassword } from "../DistributedOperations/chainedChangePassword.oa.mjs";
export { chainedCompare } from "../DistributedOperations/chainedCompare.oa.mjs";
export { chainedLdapTransport } from "../DistributedOperations/chainedLdapTransport.oa.mjs";
export { chainedLinkedLDAP } from "../DistributedOperations/chainedLinkedLDAP.oa.mjs";
export { chainedList } from "../DistributedOperations/chainedList.oa.mjs";
export { chainedModifyDN } from "../DistributedOperations/chainedModifyDN.oa.mjs";
export { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.mjs";
export { chainedRead } from "../DistributedOperations/chainedRead.oa.mjs";
export { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.mjs";
export { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
export { dSABind } from "../DistributedOperations/dSABind.oa.mjs";
export { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca.mjs";

/* START_OF_SYMBOL_DEFINITION dsp_ip */
/**
 * @summary dsp_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsp-ip IDM-PROTOCOL ::= {
 *   BIND-OPERATION  dSABind
 *   OPERATIONS      {chainedRead |
 *                    chainedCompare |
 *                    chainedAbandon |
 *                    chainedList |
 *                    chainedSearch |
 *                    chainedAddEntry |
 *                    chainedRemoveEntry |
 *                    chainedModifyEntry |
 *                    chainedModifyDN |
 *                    chainedAdministerPassword |
 *                    chainedChangePassword |
 *                    chainedLdapTransport |
 *                    chainedLinkedLDAP }
 *   ID              id-idm-dsp }
 * ```
 *
 * @constant
 * @type {IDM_PROTOCOL}
 * @implements {IDM_PROTOCOL}
 */
export const dsp_ip: IDM_PROTOCOL = {
    class: "IDM-PROTOCOL",
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
    "&id": id_idm_dsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dsp_ip */

/* eslint-enable */
