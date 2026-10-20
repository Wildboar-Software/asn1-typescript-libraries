/* eslint-disable */
// export { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
// export { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
import { scfBind } from "../IN-CS2-SCF-SCF-ops-args/scfBind.oa.mjs";
// export { scfBind } from "../IN-CS2-SCF-SCF-ops-args/scfBind.oa.mjs";
import { scfUnbind } from "../IN-CS2-SCF-SCF-ops-args/scfUnbind.oa.mjs";
// export { scfUnbind } from "../IN-CS2-SCF-SCF-ops-args/scfUnbind.oa.mjs";
import { id_package_dsspConnection } from "../IN-CS2-object-identifiers/id-package-dsspConnection.va.mjs";
// export { id_package_dsspConnection } from "../IN-CS2-object-identifiers/id-package-dsspConnection.va.mjs";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";


/**
 * @summary dsspConnectionPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dsspConnectionPackage CONNECTION-PACKAGE ::= {
 *   BIND              scfBind
 *   UNBIND            scfUnbind
 *   RESPONDER UNBIND  FALSE
 *   ID                id-package-dsspConnection
 * }
 * ```
 * 
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export
const dsspConnectionPackage: CONNECTION_PACKAGE = {
    class: "CONNECTION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&bind": scfBind /* OBJECT_FIELD_SETTING */,
    "&unbind": scfUnbind /* OBJECT_FIELD_SETTING */,
    "&responderCanUnbind": false /* OBJECT_FIELD_SETTING */,
    "&id": id_package_dsspConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&unbindCanFail": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
