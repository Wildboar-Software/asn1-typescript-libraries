/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { read } from "../DirectoryAbstractService/read.oa.mjs";
// export { read } from "../DirectoryAbstractService/read.oa.mjs";
import { compare } from "../DirectoryAbstractService/compare.oa.mjs";
// export { compare } from "../DirectoryAbstractService/compare.oa.mjs";
import { abandon } from "../DirectoryAbstractService/abandon.oa.mjs";
// export { abandon } from "../DirectoryAbstractService/abandon.oa.mjs";
import { list } from "../DirectoryAbstractService/list.oa.mjs";
// export { list } from "../DirectoryAbstractService/list.oa.mjs";
import { search } from "../DirectoryAbstractService/search.oa.mjs";
// export { search } from "../DirectoryAbstractService/search.oa.mjs";
import { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
// export { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
// export { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";
// export { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";
import { modifyDN } from "../DirectoryAbstractService/modifyDN.oa.mjs";
// export { modifyDN } from "../DirectoryAbstractService/modifyDN.oa.mjs";


/**
 * @summary DAP_Invokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DAP-Invokable OPERATION ::= {read | compare | abandon | list | search | addEntry | removeEntry |
 *    modifyEntry | modifyDN}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const DAP_Invokable: (OPERATION)[] = [ read, compare, abandon, list, search, addEntry, removeEntry, modifyEntry, modifyDN, ];

/* eslint-enable */
