/* eslint-disable */
import { activityTest } from "../IN-CS2-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS2-SSF-SCF-ops-args/activityTest.oa.mjs";
import { id_package_activityTest } from "../IN-CS2-object-identifiers/id-package-activityTest.va.mjs";
// export { id_package_activityTest } from "../IN-CS2-object-identifiers/id-package-activityTest.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary activityTestPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activityTestPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {activityTest}
 *   ID                id-package-activityTest
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const activityTestPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ activityTest, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_activityTest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
