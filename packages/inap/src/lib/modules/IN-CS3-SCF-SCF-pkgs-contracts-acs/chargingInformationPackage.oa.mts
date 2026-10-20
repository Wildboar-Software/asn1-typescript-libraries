/* eslint-disable */
import { establishChargingRecord } from "../IN-CS3-SCF-SCF-ops-args/establishChargingRecord.oa.mjs";
// export { establishChargingRecord } from "../IN-CS3-SCF-SCF-ops-args/establishChargingRecord.oa.mjs";
import { confirmedReportChargingInformation } from "../IN-CS3-SCF-SCF-ops-args/confirmedReportChargingInformation.oa.mjs";
// export { confirmedReportChargingInformation } from "../IN-CS3-SCF-SCF-ops-args/confirmedReportChargingInformation.oa.mjs";
import { reportChargingInformation } from "../IN-CS3-SCF-SCF-ops-args/reportChargingInformation.oa.mjs";
// export { reportChargingInformation } from "../IN-CS3-SCF-SCF-ops-args/reportChargingInformation.oa.mjs";
import { id_package_chargingInformation } from "../IN-CS3-object-identifiers/id-package-chargingInformation.va.mjs";
// export { id_package_chargingInformation } from "../IN-CS3-object-identifiers/id-package-chargingInformation.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary chargingInformationPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chargingInformationPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {establishChargingRecord}
 *   SUPPLIER INVOKES
 *     {confirmedReportChargingInformation |
 *       reportChargingInformation}
 *   ID                id-package-chargingInformation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const chargingInformationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ establishChargingRecord, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ confirmedReportChargingInformation, reportChargingInformation, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_chargingInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
