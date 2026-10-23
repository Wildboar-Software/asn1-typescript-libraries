/* eslint-disable */
// export { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
// export { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
import { tfcBind } from "../IN-SCF-SDF-operations/tfcBind.oa.mjs";
// export { tfcBind } from "../IN-SCF-SDF-operations/tfcBind.oa.mjs";
import { inUnbind } from "../IN-common-classes/inUnbind.oa.mjs";
// export { inUnbind } from "../IN-common-classes/inUnbind.oa.mjs";
import { id_package_tfcConnection } from "../IN-object-identifiers/id-package-tfcConnection.va.mjs";
// export { id_package_tfcConnection } from "../IN-object-identifiers/id-package-tfcConnection.va.mjs";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";


/**
 * @summary tfcConnectionPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tfcConnectionPackage CONNECTION-PACKAGE ::= {
 *   BIND    tfcBind
 *   UNBIND  inUnbind
 *   ID      id-package-tfcConnection
 * }
 * ```
 * 
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export
const tfcConnectionPackage: CONNECTION_PACKAGE = {
    class: "CONNECTION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&bind": tfcBind /* OBJECT_FIELD_SETTING */,
    "&unbind": inUnbind /* OBJECT_FIELD_SETTING */,
    "&id": id_package_tfcConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&responderCanUnbind": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&unbindCanFail": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
