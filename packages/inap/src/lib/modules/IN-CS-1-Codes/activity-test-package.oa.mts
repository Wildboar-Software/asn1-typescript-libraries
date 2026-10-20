/* eslint-disable */
import { activityTest } from "../IN-CS-1-Operations/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS-1-Operations/activityTest.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary activity_test_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activity-test-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF/SRF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {activityTest}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const activity_test_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ activityTest, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
