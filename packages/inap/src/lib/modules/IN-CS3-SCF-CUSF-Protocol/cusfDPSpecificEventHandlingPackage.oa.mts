/* eslint-disable */
import { requestReportBCUSMEvent } from "../IN-CS3-SCF-CUSF-Operations/requestReportBCUSMEvent.oa.mjs";
// export { requestReportBCUSMEvent } from "../IN-CS3-SCF-CUSF-Operations/requestReportBCUSMEvent.oa.mjs";
import { componentReceived } from "../IN-CS3-SCF-CUSF-Operations/componentReceived.oa.mjs";
// export { componentReceived } from "../IN-CS3-SCF-CUSF-Operations/componentReceived.oa.mjs";
import { associationReleaseRequested } from "../IN-CS3-SCF-CUSF-Operations/associationReleaseRequested.oa.mjs";
// export { associationReleaseRequested } from "../IN-CS3-SCF-CUSF-Operations/associationReleaseRequested.oa.mjs";
import { id_package_cusfDPSpecificEventHandling } from "../IN-CS3-object-identifiers/id-package-cusfDPSpecificEventHandling.va.mjs";
// export { id_package_cusfDPSpecificEventHandling } from "../IN-CS3-object-identifiers/id-package-cusfDPSpecificEventHandling.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cusfDPSpecificEventHandlingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfDPSpecificEventHandlingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {requestReportBCUSMEvent}
 *   SUPPLIER INVOKES
 *     {componentReceived | associationReleaseRequested}
 *   ID                id-package-cusfDPSpecificEventHandling
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cusfDPSpecificEventHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestReportBCUSMEvent, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ componentReceived, associationReleaseRequested, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cusfDPSpecificEventHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
