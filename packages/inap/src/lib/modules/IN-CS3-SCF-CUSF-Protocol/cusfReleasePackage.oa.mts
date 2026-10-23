/* eslint-disable */
import { releaseAssociation } from "../IN-CS3-SCF-CUSF-Operations/releaseAssociation.oa.mjs";
// export { releaseAssociation } from "../IN-CS3-SCF-CUSF-Operations/releaseAssociation.oa.mjs";
import { id_package_cusfRelease } from "../IN-CS3-object-identifiers/id-package-cusfRelease.va.mjs";
// export { id_package_cusfRelease } from "../IN-CS3-object-identifiers/id-package-cusfRelease.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cusfReleasePackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfReleasePackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {releaseAssociation}
 *   ID                id-package-cusfRelease
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cusfReleasePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ releaseAssociation, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cusfRelease /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
