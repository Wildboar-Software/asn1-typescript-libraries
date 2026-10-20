import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
/* eslint-disable */
import { search } from "../DirectoryAbstractService/search.oa.mjs";
// export { search } from "../DirectoryAbstractService/search.oa.mjs";
import { id_package_search } from "../SDFProtocolObjectIdentifiers/id-package-search.va.mjs";
// export { id_package_search } from "../SDFProtocolObjectIdentifiers/id-package-search.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary searchPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * searchPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {search}
 *   ID                id-package-search
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const searchPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ search, ] as unknown as OPERATION[] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_search /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
