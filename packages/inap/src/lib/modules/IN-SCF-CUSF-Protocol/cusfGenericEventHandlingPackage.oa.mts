/* eslint-disable */
import { requestReportBCUSMEvent } from "../IN-SCF-CUSF-Operations/requestReportBCUSMEvent.oa.mjs";
// export { requestReportBCUSMEvent } from "../IN-SCF-CUSF-Operations/requestReportBCUSMEvent.oa.mjs";
import { eventReportBCUSM } from "../IN-SCF-CUSF-Operations/eventReportBCUSM.oa.mjs";
// export { eventReportBCUSM } from "../IN-SCF-CUSF-Operations/eventReportBCUSM.oa.mjs";
import { id_package_cusfGenericEventHandling } from "../IN-object-identifiers/id-package-cusfGenericEventHandling.va.mjs";
// export { id_package_cusfGenericEventHandling } from "../IN-object-identifiers/id-package-cusfGenericEventHandling.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cusfGenericEventHandlingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfGenericEventHandlingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {requestReportBCUSMEvent}
 *   SUPPLIER INVOKES  {eventReportBCUSM}
 *   ID                id-package-cusfGenericEventHandling
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cusfGenericEventHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestReportBCUSMEvent, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ eventReportBCUSM, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cusfGenericEventHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
