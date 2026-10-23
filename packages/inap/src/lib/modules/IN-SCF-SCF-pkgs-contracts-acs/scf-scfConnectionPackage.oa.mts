/* eslint-disable */
// export { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
// export { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
import { scfBind } from "../IN-SCF-SCF-ops-args/scfBind.oa.mjs";
// export { scfBind } from "../IN-SCF-SCF-ops-args/scfBind.oa.mjs";
import { inUnbind } from "../IN-common-classes/inUnbind.oa.mjs";
// export { inUnbind } from "../IN-common-classes/inUnbind.oa.mjs";
import { id_package_scf_scfConnection } from "../IN-object-identifiers/id-package-scf-scfConnection.va.mjs";
// export { id_package_scf_scfConnection } from "../IN-object-identifiers/id-package-scf-scfConnection.va.mjs";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";


/**
 * @summary scf_scfConnectionPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-scfConnectionPackage CONNECTION-PACKAGE ::= {
 *   BIND              scfBind
 *   UNBIND            inUnbind
 *   RESPONDER UNBIND  TRUE
 *   ID                id-package-scf-scfConnection
 * }
 * ```
 * 
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export
const scf_scfConnectionPackage: CONNECTION_PACKAGE = {
    class: "CONNECTION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&bind": scfBind /* OBJECT_FIELD_SETTING */,
    "&unbind": inUnbind /* OBJECT_FIELD_SETTING */,
    "&responderCanUnbind": true /* OBJECT_FIELD_SETTING */,
    "&id": id_package_scf_scfConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&unbindCanFail": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
