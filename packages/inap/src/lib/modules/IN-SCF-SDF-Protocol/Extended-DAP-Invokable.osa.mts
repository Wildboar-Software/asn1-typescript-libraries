/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { search } from "../DirectoryAbstractService/search.oa.mjs";
// export { search } from "../DirectoryAbstractService/search.oa.mjs";
import { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
// export { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
// export { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";
// export { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";
import { execute } from "../IN-SCF-SDF-operations/execute.oa.mjs";
// export { execute } from "../IN-SCF-SDF-operations/execute.oa.mjs";


/**
 * @summary Extended_DAP_Invokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Extended-DAP-Invokable OPERATION ::= {search | addEntry | removeEntry | modifyEntry | execute}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Extended_DAP_Invokable: (OPERATION)[] = [ search, addEntry, removeEntry, modifyEntry, execute, ];

/* eslint-enable */
