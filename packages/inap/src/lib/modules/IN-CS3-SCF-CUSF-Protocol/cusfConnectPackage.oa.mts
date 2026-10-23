/* eslint-disable */
import { connectAssociation } from "../IN-CS3-SCF-CUSF-Operations/connectAssociation.oa.mjs";
// export { connectAssociation } from "../IN-CS3-SCF-CUSF-Operations/connectAssociation.oa.mjs";
import { id_package_cusfConnect } from "../IN-CS3-object-identifiers/id-package-cusfConnect.va.mjs";
// export { id_package_cusfConnect } from "../IN-CS3-object-identifiers/id-package-cusfConnect.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cusfConnectPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfConnectPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {connectAssociation}
 *   ID                id-package-cusfConnect
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cusfConnectPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ connectAssociation, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cusfConnect /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
