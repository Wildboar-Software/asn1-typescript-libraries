/* eslint-disable */
import { requestReportFacilityEvent } from "../IN-SSF-SCF-ops-args/requestReportFacilityEvent.oa.mjs";
// export { requestReportFacilityEvent } from "../IN-SSF-SCF-ops-args/requestReportFacilityEvent.oa.mjs";
import { sendFacilityInformation } from "../IN-SSF-SCF-ops-args/sendFacilityInformation.oa.mjs";
// export { sendFacilityInformation } from "../IN-SSF-SCF-ops-args/sendFacilityInformation.oa.mjs";
import { eventReportFacility } from "../IN-SSF-SCF-ops-args/eventReportFacility.oa.mjs";
// export { eventReportFacility } from "../IN-SSF-SCF-ops-args/eventReportFacility.oa.mjs";
import { id_package_facilityIEHandling } from "../IN-object-identifiers/id-package-facilityIEHandling.va.mjs";
// export { id_package_facilityIEHandling } from "../IN-object-identifiers/id-package-facilityIEHandling.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary facilityIEHandlingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * facilityIEHandlingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {requestReportFacilityEvent | sendFacilityInformation}
 *   SUPPLIER INVOKES  {eventReportFacility}
 *   ID                id-package-facilityIEHandling
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const facilityIEHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestReportFacilityEvent, sendFacilityInformation, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ eventReportFacility, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_facilityIEHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
