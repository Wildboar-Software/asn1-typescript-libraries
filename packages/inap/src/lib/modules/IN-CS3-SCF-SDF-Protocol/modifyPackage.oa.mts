import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
/* eslint-disable */
import { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
// export { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
// export { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";
// export { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";
import { id_package_modify } from "../IN-CS3-object-identifiers/id-package-modify.va.mjs";
// export { id_package_modify } from "../IN-CS3-object-identifiers/id-package-modify.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary modifyPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * modifyPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {addEntry | removeEntry | modifyEntry}
 *   ID                id-package-modify
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const modifyPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ addEntry, removeEntry, modifyEntry, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_modify /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
