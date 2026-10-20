/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { chainedRead } from "../DistributedOperations/chainedRead.oa.mjs";
// export { chainedRead } from "../DistributedOperations/chainedRead.oa.mjs";
import { chainedCompare } from "../DistributedOperations/chainedCompare.oa.mjs";
// export { chainedCompare } from "../DistributedOperations/chainedCompare.oa.mjs";
import { chainedAbandon } from "../DistributedOperations/chainedAbandon.oa.mjs";
// export { chainedAbandon } from "../DistributedOperations/chainedAbandon.oa.mjs";
import { chainedList } from "../DistributedOperations/chainedList.oa.mjs";
// export { chainedList } from "../DistributedOperations/chainedList.oa.mjs";
import { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
// export { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
import { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.mjs";
// export { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.mjs";
import { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.mjs";
// export { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.mjs";
import { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.mjs";
// export { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.mjs";
import { chainedModifyDN } from "../DistributedOperations/chainedModifyDN.oa.mjs";
// export { chainedModifyDN } from "../DistributedOperations/chainedModifyDN.oa.mjs";


/**
 * @summary DSP_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSP-Returnable OPERATION ::= {chainedRead | chainedCompare | chainedAbandon | chainedList | chainedSearch
 *    | chainedAddEntry | chainedRemoveEntry | chainedModifyEntry |
 *    chainedModifyDN}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const DSP_Returnable: (OPERATION)[] = [ chainedRead, chainedCompare, chainedAbandon, chainedList, chainedSearch, chainedAddEntry, chainedRemoveEntry, chainedModifyEntry, chainedModifyDN, ];

/* eslint-enable */
