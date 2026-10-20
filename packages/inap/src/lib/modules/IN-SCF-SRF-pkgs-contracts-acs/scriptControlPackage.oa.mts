/* eslint-disable */
import { scriptClose } from "../IN-SCF-SRF-ops-args/scriptClose.oa.mjs";
// export { scriptClose } from "../IN-SCF-SRF-ops-args/scriptClose.oa.mjs";
import { scriptRun } from "../IN-SCF-SRF-ops-args/scriptRun.oa.mjs";
// export { scriptRun } from "../IN-SCF-SRF-ops-args/scriptRun.oa.mjs";
import { scriptInformation } from "../IN-SCF-SRF-ops-args/scriptInformation.oa.mjs";
// export { scriptInformation } from "../IN-SCF-SRF-ops-args/scriptInformation.oa.mjs";
import { scriptEvent } from "../IN-SCF-SRF-ops-args/scriptEvent.oa.mjs";
// export { scriptEvent } from "../IN-SCF-SRF-ops-args/scriptEvent.oa.mjs";
import { id_package_scriptControl } from "../IN-object-identifiers/id-package-scriptControl.va.mjs";
// export { id_package_scriptControl } from "../IN-object-identifiers/id-package-scriptControl.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary scriptControlPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scriptControlPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {scriptClose | scriptRun | scriptInformation}
 *   SUPPLIER INVOKES  {scriptEvent}
 *   ID                id-package-scriptControl
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const scriptControlPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ scriptClose, scriptRun, scriptInformation, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ scriptEvent, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_scriptControl /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
