/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { search } from "../DirectoryAbstractService/search.oa.mjs";
// export { search } from "../DirectoryAbstractService/search.oa.mjs";
import { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
// export { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
// export { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";
// export { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";


/**
 * @summary DAP_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DAP-Returnable OPERATION ::= {search | addEntry | removeEntry | modifyEntry}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const DAP_Returnable: (OPERATION)[] = [ search, addEntry, removeEntry, modifyEntry, ];

/* eslint-enable */
