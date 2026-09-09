import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { continueWithArgument } from "../CAP-gsmSSF-gsmSCF-ops-args/continueWithArgument.oa.mjs";
import { disconnectLeg } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectLeg.oa.mjs";
import { moveLeg } from "../CAP-gsmSSF-gsmSCF-ops-args/moveLeg.oa.mjs";
import { splitLeg } from "../CAP-gsmSSF-gsmSCF-ops-args/splitLeg.oa.mjs";
import { id_package_cphResponse } from "../CAP-object-identifiers/id-package-cphResponse.va.mjs";

/**
 * @summary cphResponsePackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cphResponsePackage OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{continueWithArgument {bound} |
 * 			disconnectLeg {bound} |
 * 			moveLeg {bound} |
 * 			splitLeg {bound}}
 * 	ID			id-package-cphResponse}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cphResponsePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ continueWithArgument, disconnectLeg, moveLeg, splitLeg, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cphResponse /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
