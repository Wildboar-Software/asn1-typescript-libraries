import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
/* eslint-disable */
// export { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
// export { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
import { dSABind } from "../DistributedOperations/dSABind.oa.mjs";
// export { dSABind } from "../DistributedOperations/dSABind.oa.mjs";
import { in_DSAUnbind } from "../IN-CS2-SDF-SDF-Protocol/in-DSAUnbind.oa.mjs";
// export { in_DSAUnbind } from "../IN-CS2-SDF-SDF-Protocol/in-DSAUnbind.oa.mjs";
import { id_package_dspConnection } from "../IN-CS2-object-identifiers/id-package-dspConnection.va.mjs";
// export { id_package_dspConnection } from "../IN-CS2-object-identifiers/id-package-dspConnection.va.mjs";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";


/**
 * @summary dspConnectionPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dspConnectionPackage CONNECTION-PACKAGE ::= {
 *   BIND    dSABind
 *   UNBIND  in-DSAUnbind
 *   ID      id-package-dspConnection
 * }
 * ```
 * 
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export
const dspConnectionPackage: CONNECTION_PACKAGE = {
    class: "CONNECTION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&bind": dSABind /* OBJECT_FIELD_SETTING */,
    "&unbind": in_DSAUnbind /* OBJECT_FIELD_SETTING */,
    "&id": id_package_dspConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&responderCanUnbind": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&unbindCanFail": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
