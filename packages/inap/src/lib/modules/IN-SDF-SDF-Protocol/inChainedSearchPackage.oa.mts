import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
/* eslint-disable */
import { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
// export { chainedSearch } from "../DistributedOperations/chainedSearch.oa.mjs";
import { id_package_inchainedSearch } from "../IN-object-identifiers/id-package-inchainedSearch.va.mjs";
// export { id_package_inchainedSearch } from "../IN-object-identifiers/id-package-inchainedSearch.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary inChainedSearchPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inChainedSearchPackage OPERATION-PACKAGE ::= {
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
const inChainedSearchPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ chainedSearch, ] as unknown as OPERATION[] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_inchainedSearch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
