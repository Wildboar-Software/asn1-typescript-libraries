import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { collectInformation } from "../CAP-gsmSSF-gsmSCF-ops-args/collectInformation.oa.mjs";
import { continueWithArgument } from "../CAP-gsmSSF-gsmSCF-ops-args/continueWithArgument.oa.mjs";
import { continue_ } from "../CAP-gsmSSF-gsmSCF-ops-args/continue.oa.mjs";
import { id_package_ssfCallProcessing } from "../CAP-object-identifiers/id-package-ssfCallProcessing.va.mjs";

/**
 * @summary ssfCallProcessingPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ssfCallProcessingPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{ collectInformation | continueWithArgument {bound} | continue}
 * 	ID			id-package-ssfCallProcessing}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const ssfCallProcessingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ collectInformation, continueWithArgument, continue_, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_ssfCallProcessing /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
