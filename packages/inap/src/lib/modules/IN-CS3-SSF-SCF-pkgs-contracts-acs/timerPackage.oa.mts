/* eslint-disable */
import { resetTimer } from "../IN-CS3-SSF-SCF-ops-args/resetTimer.oa.mjs";
// export { resetTimer } from "../IN-CS3-SSF-SCF-ops-args/resetTimer.oa.mjs";
import { id_package_timer } from "../IN-CS3-object-identifiers/id-package-timer.va.mjs";
// export { id_package_timer } from "../IN-CS3-object-identifiers/id-package-timer.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary timerPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * timerPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {resetTimer}
 *   ID                id-package-timer
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const timerPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ resetTimer, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_timer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
