import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { sendChargingInformation } from "../CAP-gsmSSF-gsmSCF-ops-args/sendChargingInformation.oa.mjs";
import { id_package_signallingControl } from "../CAP-object-identifiers/id-package-signallingControl.va.mjs";

/**
 * @summary signallingControlPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signallingControlPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{sendChargingInformation {bound}}
 * 	ID			id-package-signallingControl}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const signallingControlPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ sendChargingInformation, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_signallingControl /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
