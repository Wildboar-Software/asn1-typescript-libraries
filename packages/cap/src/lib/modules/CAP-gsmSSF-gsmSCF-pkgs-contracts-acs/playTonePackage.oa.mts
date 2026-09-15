import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { playTone } from "../CAP-gsmSSF-gsmSCF-ops-args/playTone.oa.mjs";
import { id_package_playTone } from "../CAP-object-identifiers/id-package-playTone.va.mjs";

/**
 * @summary playTonePackage
 * @description
 *
 * gsmSSF-gsmSCF play-tone package: gsmSCF (consumer) invokes `playTone`. Used
 * in `capSsfToScfGeneric` and `capScfToSsfGeneric`. Package ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * playTonePackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{playTone {bound}}
 * 	ID			id-package-playTone}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const playTonePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ playTone, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_playTone /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
