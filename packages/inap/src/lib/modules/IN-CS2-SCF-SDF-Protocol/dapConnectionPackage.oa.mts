/* eslint-disable */
// export { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
// export { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
import { directoryBind } from "../DirectoryAbstractService/directoryBind.oa.mjs";
// export { directoryBind } from "../DirectoryAbstractService/directoryBind.oa.mjs";
import { in_directoryUnbind } from "../IN-CS2-SCF-SDF-Operations/in-directoryUnbind.oa.mjs";
// export { in_directoryUnbind } from "../IN-CS2-SCF-SDF-Operations/in-directoryUnbind.oa.mjs";
import { id_package_dapConnection } from "../IN-CS2-object-identifiers/id-package-dapConnection.va.mjs";
// export { id_package_dapConnection } from "../IN-CS2-object-identifiers/id-package-dapConnection.va.mjs";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";


/**
 * @summary dapConnectionPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dapConnectionPackage CONNECTION-PACKAGE ::= {
 *   BIND    directoryBind
 *   UNBIND  in-directoryUnbind
 *   ID      id-package-dapConnection
 * }
 * ```
 * 
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export
const dapConnectionPackage: CONNECTION_PACKAGE = {
    class: "CONNECTION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&bind": directoryBind /* OBJECT_FIELD_SETTING */,
    "&unbind": in_directoryUnbind /* OBJECT_FIELD_SETTING */,
    "&id": id_package_dapConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&responderCanUnbind": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&unbindCanFail": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
