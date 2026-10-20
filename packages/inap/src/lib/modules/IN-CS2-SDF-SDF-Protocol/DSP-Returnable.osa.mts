/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.mjs";
// export { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.mjs";
import { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.mjs";
// export { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.mjs";
import { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.mjs";
// export { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.mjs";
import { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
// export { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
import { chainedExecute } from "../IN-CS2-SDF-SDF-Protocol/chainedExecute.oa.mjs";
// export { chainedExecute } from "../IN-CS2-SDF-SDF-Protocol/chainedExecute.oa.mjs";


/**
 * @summary DSP_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSP-Returnable OPERATION ::= {chainedAddEntry | chainedRemoveEntry | chainedModifyEntry | chainedSearch |
 *    chainedExecute}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const DSP_Returnable: (OPERATION)[] = [ chainedAddEntry, chainedRemoveEntry, chainedModifyEntry, chainedSearch, chainedExecute, ] as unknown as OPERATION[];

/* eslint-enable */
