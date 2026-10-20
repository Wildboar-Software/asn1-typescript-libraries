/* eslint-disable */
import { read } from "../DirectoryAbstractService/read.oa.mjs";
// export { read } from "../DirectoryAbstractService/read.oa.mjs";
import { compare } from "../DirectoryAbstractService/compare.oa.mjs";
// export { compare } from "../DirectoryAbstractService/compare.oa.mjs";
import { abandon } from "../DirectoryAbstractService/abandon.oa.mjs";
// export { abandon } from "../DirectoryAbstractService/abandon.oa.mjs";
import { id_package_read } from "../ProtocolObjectIdentifiers/id-package-read.va.mjs";
// export { id_package_read } from "../ProtocolObjectIdentifiers/id-package-read.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary readPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * readPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {read | compare | abandon}
 *   ID                id-package-read
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const readPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ read, compare, abandon, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_read /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
