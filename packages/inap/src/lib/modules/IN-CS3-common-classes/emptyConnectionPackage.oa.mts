/* eslint-disable */
import { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
// export { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
// export { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
import { inUnbind } from "../IN-CS3-common-classes/inUnbind.oa.mjs";
// export { inUnbind } from "../IN-CS3-common-classes/inUnbind.oa.mjs";
import { id_package_emptyConnection } from "../IN-CS3-object-identifiers/id-package-emptyConnection.va.mjs";
// export { id_package_emptyConnection } from "../IN-CS3-object-identifiers/id-package-emptyConnection.va.mjs";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";


/**
 * @summary emptyConnectionPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * emptyConnectionPackage CONNECTION-PACKAGE ::= {
 *   BIND              emptyBind
 *   UNBIND            inUnbind
 *   RESPONDER UNBIND  TRUE
 *   ID                id-package-emptyConnection
 * }
 * ```
 * 
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export
const emptyConnectionPackage: CONNECTION_PACKAGE = {
    class: "CONNECTION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&bind": emptyBind /* OBJECT_FIELD_SETTING */,
    "&unbind": inUnbind /* OBJECT_FIELD_SETTING */,
    "&responderCanUnbind": true /* OBJECT_FIELD_SETTING */,
    "&id": id_package_emptyConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&unbindCanFail": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
