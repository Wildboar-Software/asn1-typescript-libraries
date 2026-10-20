/* eslint-disable */
import { chainedList } from "../DistributedOperations/chainedList.oa.mjs";
// export { chainedList } from "../DistributedOperations/chainedList.oa.mjs";
import { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
// export { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
import { id_package_chainedSearch } from "../ProtocolObjectIdentifiers/id-package-chainedSearch.va.mjs";
// export { id_package_chainedSearch } from "../ProtocolObjectIdentifiers/id-package-chainedSearch.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary chainedSearchPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedSearchPackage OPERATION-PACKAGE ::= {
 *   OPERATIONS  {chainedList | chainedSearch}
 *   ID          id-package-chainedSearch
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const chainedSearchPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Both": [ chainedList, chainedSearch, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_chainedSearch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
