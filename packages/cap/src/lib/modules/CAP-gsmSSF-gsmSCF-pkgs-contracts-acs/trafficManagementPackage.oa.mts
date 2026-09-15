import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { callGap } from "../CAP-gsmSSF-gsmSCF-ops-args/callGap.oa.mjs";
import { id_package_trafficManagement } from "../CAP-object-identifiers/id-package-trafficManagement.va.mjs";

/**
 * @summary trafficManagementPackage
 * @description
 *
 * gsmSSF-gsmSCF traffic management package: gsmSCF (consumer) invokes
 * `callGap`. Used in `capSsfToScfGeneric` only. Package ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * trafficManagementPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{callGap {bound}}
 * 	ID			id-package-trafficManagement}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const trafficManagementPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ callGap, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_trafficManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
