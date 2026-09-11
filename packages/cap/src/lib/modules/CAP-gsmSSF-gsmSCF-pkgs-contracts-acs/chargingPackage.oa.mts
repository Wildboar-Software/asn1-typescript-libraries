import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { applyCharging } from "../CAP-gsmSSF-gsmSCF-ops-args/applyCharging.oa.mjs";
import { applyChargingReport } from "../CAP-gsmSSF-gsmSCF-ops-args/applyChargingReport.oa.mjs";
import { id_package_charging } from "../CAP-object-identifiers/id-package-charging.va.mjs";

/**
 * @summary chargingPackage
 * @description
 *
 * gsmSSF-gsmSCF charging package: gsmSCF (consumer) invokes `applyCharging`;
 * gsmSSF (supplier) invokes `applyChargingReport`. Used in `capSsfToScfGeneric`
 * and `capScfToSsfGeneric`. Package ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chargingPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{applyCharging {bound}}
 * 	SUPPLIER INVOKES	{applyChargingReport {bound}}
 * 	ID			id-package-charging}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const chargingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ applyCharging, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ applyChargingReport, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_charging /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
