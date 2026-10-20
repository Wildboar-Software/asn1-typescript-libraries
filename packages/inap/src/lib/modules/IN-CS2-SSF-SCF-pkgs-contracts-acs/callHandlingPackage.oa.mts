/* eslint-disable */
import { holdCallInNetwork } from "../IN-CS2-SSF-SCF-ops-args/holdCallInNetwork.oa.mjs";
// export { holdCallInNetwork } from "../IN-CS2-SSF-SCF-ops-args/holdCallInNetwork.oa.mjs";
import { releaseCall } from "../IN-CS2-SSF-SCF-ops-args/releaseCall.oa.mjs";
// export { releaseCall } from "../IN-CS2-SSF-SCF-ops-args/releaseCall.oa.mjs";
import { id_package_callHandling } from "../IN-CS2-object-identifiers/id-package-callHandling.va.mjs";
// export { id_package_callHandling } from "../IN-CS2-object-identifiers/id-package-callHandling.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary callHandlingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callHandlingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {holdCallInNetwork | releaseCall}
 *   ID                id-package-callHandling
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const callHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ holdCallInNetwork, releaseCall, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_callHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
