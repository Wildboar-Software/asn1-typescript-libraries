/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { gprsReleasePackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsReleasePackage.oa.mjs";
// export { gprsReleasePackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsReleasePackage.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { gprsEventHandlingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsEventHandlingPackage.oa.mjs";
// export { gprsEventHandlingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsEventHandlingPackage.oa.mjs";
import { gprsBillingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsBillingPackage.oa.mjs";
// export { gprsBillingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsBillingPackage.oa.mjs";
import { gprsChargingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsChargingPackage.oa.mjs";
// export { gprsChargingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsChargingPackage.oa.mjs";
import { gprsActivityTestPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsActivityTestPackage.oa.mjs";
// export { gprsActivityTestPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsActivityTestPackage.oa.mjs";
import { gprsCancelPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsCancelPackage.oa.mjs";
// export { gprsCancelPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsCancelPackage.oa.mjs";
import { gprsChargeAdvicePackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsChargeAdvicePackage.oa.mjs";
// export { gprsChargeAdvicePackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsChargeAdvicePackage.oa.mjs";
import { id_capGsmScfToGprsSsf } from "../CAP-object-identifiers/id-capGsmScfToGprsSsf.va.mjs";
// export { id_capGsmScfToGprsSsf } from "../CAP-object-identifiers/id-capGsmScfToGprsSsf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary capGsmScfToGprsSsf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * capGsmScfToGprsSsf CONTRACT ::= {
 * -- dialogue initiated by gsmSCF with ApplyChargingGPRS, ActivityTestGPRS,
 * -- CancelGPRS, FurnishChargingInformationGPRS, ReleaseGPRS,
 * -- RequestReportGPRSEvent and SendChargingInformationGPRS Operations
 *     INITIATOR CONSUMER OF    {gprsReleasePackage {cAPSpecificBoundSet} |
 *                 gprsEventHandlingPackage {cAPSpecificBoundSet} |
 *                 gprsBillingPackage {cAPSpecificBoundSet} |
 *                 gprsChargingPackage |
 *                 gprsActivityTestPackage |
 *                 gprsCancelPackage |
 *                 gprsChargeAdvicePackage {cAPSpecificBoundSet}}
 *     ID                id-capGsmScfToGprsSsf}
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const capGsmScfToGprsSsf: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ gprsReleasePackage, gprsEventHandlingPackage, gprsBillingPackage, gprsChargingPackage, gprsActivityTestPackage, gprsCancelPackage, gprsChargeAdvicePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_capGsmScfToGprsSsf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
