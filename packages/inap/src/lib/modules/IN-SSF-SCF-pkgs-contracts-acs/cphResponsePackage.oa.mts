/* eslint-disable */
import { continueWithArgument } from "../IN-SSF-SCF-ops-args/continueWithArgument.oa.mjs";
// export { continueWithArgument } from "../IN-SSF-SCF-ops-args/continueWithArgument.oa.mjs";
import { disconnectLeg } from "../IN-SSF-SCF-ops-args/disconnectLeg.oa.mjs";
// export { disconnectLeg } from "../IN-SSF-SCF-ops-args/disconnectLeg.oa.mjs";
import { mergeCallSegments } from "../IN-SSF-SCF-ops-args/mergeCallSegments.oa.mjs";
// export { mergeCallSegments } from "../IN-SSF-SCF-ops-args/mergeCallSegments.oa.mjs";
import { moveCallSegments } from "../IN-SSF-SCF-ops-args/moveCallSegments.oa.mjs";
// export { moveCallSegments } from "../IN-SSF-SCF-ops-args/moveCallSegments.oa.mjs";
import { moveLeg } from "../IN-SSF-SCF-ops-args/moveLeg.oa.mjs";
// export { moveLeg } from "../IN-SSF-SCF-ops-args/moveLeg.oa.mjs";
import { createCallSegmentAssociation } from "../IN-SSF-SCF-ops-args/createCallSegmentAssociation.oa.mjs";
// export { createCallSegmentAssociation } from "../IN-SSF-SCF-ops-args/createCallSegmentAssociation.oa.mjs";
import { reconnect } from "../IN-SSF-SCF-ops-args/reconnect.oa.mjs";
// export { reconnect } from "../IN-SSF-SCF-ops-args/reconnect.oa.mjs";
import { splitLeg } from "../IN-SSF-SCF-ops-args/splitLeg.oa.mjs";
// export { splitLeg } from "../IN-SSF-SCF-ops-args/splitLeg.oa.mjs";
import { id_package_cphResponse } from "../IN-object-identifiers/id-package-cphResponse.va.mjs";
// export { id_package_cphResponse } from "../IN-object-identifiers/id-package-cphResponse.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cphResponsePackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cphResponsePackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {continueWithArgument | disconnectLeg |
 *       mergeCallSegments | moveCallSegments | moveLeg |
 *       createCallSegmentAssociation | reconnect |
 *       splitLeg}
 *   ID                id-package-cphResponse
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cphResponsePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ continueWithArgument, disconnectLeg, mergeCallSegments, moveCallSegments, moveLeg, createCallSegmentAssociation, reconnect, splitLeg, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cphResponse /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
