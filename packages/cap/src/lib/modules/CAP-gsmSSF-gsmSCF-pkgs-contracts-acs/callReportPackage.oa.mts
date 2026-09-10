import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { callInformationRequest } from "../CAP-gsmSSF-gsmSCF-ops-args/callInformationRequest.oa.mjs";
import { callInformationReport } from "../CAP-gsmSSF-gsmSCF-ops-args/callInformationReport.oa.mjs";
import { id_package_callReport } from "../CAP-object-identifiers/id-package-callReport.va.mjs";

/**
 * @summary callReportPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * callReportPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{callInformationRequest {bound}}
 * 	SUPPLIER INVOKES	{callInformationReport {bound}}
 * 	ID			id-package-callReport}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const callReportPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ callInformationRequest, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ callInformationReport, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_callReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
