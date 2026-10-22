import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
/* eslint-disable */
import { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
// export { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
import { id_package_inchainedSearch } from "../IN-CS2-object-identifiers/id-package-inchainedSearch.va.mjs";
// export { id_package_inchainedSearch } from "../IN-CS2-object-identifiers/id-package-inchainedSearch.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary inchainedSearchPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inchainedSearchPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {chainedSearch}
 *   ID                id-package-inchainedSearch
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const inchainedSearchPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ chainedSearch, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_inchainedSearch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
