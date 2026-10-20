/* eslint-disable */
// export { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
// export { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
import { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa.mjs";
// export { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa.mjs";
import { dSAShadowUnbind } from "../DirectoryShadowAbstractService/dSAShadowUnbind.oa.mjs";
// export { dSAShadowUnbind } from "../DirectoryShadowAbstractService/dSAShadowUnbind.oa.mjs";
import { id_package_dispConnection } from "../ProtocolObjectIdentifiers/id-package-dispConnection.va.mjs";
// export { id_package_dispConnection } from "../ProtocolObjectIdentifiers/id-package-dispConnection.va.mjs";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";


/**
 * @summary dispConnectionPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dispConnectionPackage CONNECTION-PACKAGE ::= {
 *   BIND    dSAShadowBind
 *   UNBIND  dSAShadowUnbind
 *   ID      id-package-dispConnection
 * }
 * ```
 * 
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export
const dispConnectionPackage: CONNECTION_PACKAGE = {
    class: "CONNECTION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&bind": dSAShadowBind /* OBJECT_FIELD_SETTING */,
    "&unbind": dSAShadowUnbind /* OBJECT_FIELD_SETTING */,
    "&id": id_package_dispConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&responderCanUnbind": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&unbindCanFail": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
