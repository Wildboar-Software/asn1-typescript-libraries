/* eslint-disable */
import { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.mjs";
// export { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa.mjs";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
// export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
import { id_package_shadowSupplier } from "../IN-CS2-object-identifiers/id-package-shadowSupplier.va.mjs";
// export { id_package_shadowSupplier } from "../IN-CS2-object-identifiers/id-package-shadowSupplier.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary shadowSupplierPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shadowSupplierPackage OPERATION-PACKAGE ::= {
 *   SUPPLIER INVOKES  {coordinateShadowUpdate | updateShadow}
 *   ID                id-package-shadowSupplier
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const shadowSupplierPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ coordinateShadowUpdate, updateShadow, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_shadowSupplier /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
