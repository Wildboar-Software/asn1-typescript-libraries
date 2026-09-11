import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { playAnnouncement } from "../CAP-gsmSCF-gsmSRF-ops-args/playAnnouncement.oa.mjs";
import { promptAndCollectUserInformation } from "../CAP-gsmSCF-gsmSRF-ops-args/promptAndCollectUserInformation.oa.mjs";
import { specializedResourceReport } from "../CAP-gsmSCF-gsmSRF-ops-args/specializedResourceReport.oa.mjs";
import { id_package_specializedResourceControl } from "../CAP-object-identifiers/id-package-specializedResourceControl.va.mjs";

/**
 * @summary specializedResourceControlPackage
 * @description
 *
 * gsmSRF-gsmSCF specialized resource control package: gsmSCF (consumer) invokes
 * `playAnnouncement` and `promptAndCollectUserInformation`; gsmSRF (supplier)
 * invokes `specializedResourceReport`. Used in `gsmSRF-gsmSCF-contract` and
 * imported into the CS generic and assist-handoff contracts. Package ID same as
 * Rel-5. (3GPP TS 29.078 V19.0.0 clauses 6.2.2 and 6.1.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * specializedResourceControlPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{playAnnouncement {bound} |
 * 			promptAndCollectUserInformation {bound}}
 * 	SUPPLIER INVOKES	{specializedResourceReport}
 * 	ID			id-package-specializedResourceControl}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const specializedResourceControlPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ playAnnouncement, promptAndCollectUserInformation, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ specializedResourceReport, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_specializedResourceControl /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
