/* eslint-disable */
import { initiateAssociation } from "../IN-SCF-CUSF-Operations/initiateAssociation.oa.mjs";
// export { initiateAssociation } from "../IN-SCF-CUSF-Operations/initiateAssociation.oa.mjs";
import { id_package_cusfSCFInitiation } from "../IN-object-identifiers/id-package-cusfSCFInitiation.va.mjs";
// export { id_package_cusfSCFInitiation } from "../IN-object-identifiers/id-package-cusfSCFInitiation.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cusfSCFInitiationPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfSCFInitiationPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {initiateAssociation}
 *   ID                id-package-cusfSCFInitiation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cusfSCFInitiationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ initiateAssociation, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cusfSCFInitiation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
