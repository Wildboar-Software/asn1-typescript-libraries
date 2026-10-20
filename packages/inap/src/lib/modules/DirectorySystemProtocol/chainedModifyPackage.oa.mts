/* eslint-disable */
import { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.mjs";
// export { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa.mjs";
import { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.mjs";
// export { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa.mjs";
import { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.mjs";
// export { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa.mjs";
import { chainedModifyDN } from "../DistributedOperations/chainedModifyDN.oa.mjs";
// export { chainedModifyDN } from "../DistributedOperations/chainedModifyDN.oa.mjs";
import { id_package_chainedModify } from "../ProtocolObjectIdentifiers/id-package-chainedModify.va.mjs";
// export { id_package_chainedModify } from "../ProtocolObjectIdentifiers/id-package-chainedModify.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary chainedModifyPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedModifyPackage OPERATION-PACKAGE ::= {
 *   OPERATIONS
 *     {chainedAddEntry | chainedRemoveEntry | chainedModifyEntry |
 *       chainedModifyDN}
 *   ID          id-package-chainedModify
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const chainedModifyPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Both": [ chainedAddEntry, chainedRemoveEntry, chainedModifyEntry, chainedModifyDN, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_chainedModify /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
