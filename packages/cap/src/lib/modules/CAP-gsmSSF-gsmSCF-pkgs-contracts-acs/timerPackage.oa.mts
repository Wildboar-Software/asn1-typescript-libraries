import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { resetTimer } from "../CAP-gsmSSF-gsmSCF-ops-args/resetTimer.oa.mjs";
import { id_package_timer } from "../CAP-object-identifiers/id-package-timer.va.mjs";

/**
 * @summary timerPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * timerPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{resetTimer {bound}}
 * 	ID			id-package-timer}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const timerPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ resetTimer, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_timer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
