/* eslint-disable */
import { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.mjs";
// export { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.mjs";
import { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.mjs";
// export { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.mjs";
import { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.mjs";
// export { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.mjs";
import { id_package_inchainedModify } from "../IN-CS2-object-identifiers/id-package-inchainedModify.va.mjs";
// export { id_package_inchainedModify } from "../IN-CS2-object-identifiers/id-package-inchainedModify.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary inchainedModifyPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inchainedModifyPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {chainedAddEntry | chainedRemoveEntry | chainedModifyEntry}
 *   ID                id-package-inchainedModify
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const inchainedModifyPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ chainedAddEntry, chainedRemoveEntry, chainedModifyEntry, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_inchainedModify /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
