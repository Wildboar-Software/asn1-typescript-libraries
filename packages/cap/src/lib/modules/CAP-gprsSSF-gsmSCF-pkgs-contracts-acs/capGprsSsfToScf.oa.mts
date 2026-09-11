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
import { gprsScfActivationPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsScfActivationPackage.oa.mjs";
// export { gprsScfActivationPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsScfActivationPackage.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { gprsEventHandlingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsEventHandlingPackage.oa.mjs";
// export { gprsEventHandlingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsEventHandlingPackage.oa.mjs";
import { gprsChargingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsChargingPackage.oa.mjs";
// export { gprsChargingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsChargingPackage.oa.mjs";
import { gprsExceptionInformationPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsExceptionInformationPackage.oa.mjs";
// export { gprsExceptionInformationPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsExceptionInformationPackage.oa.mjs";
import { gprsConnectPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsConnectPackage.oa.mjs";
// export { gprsConnectPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsConnectPackage.oa.mjs";
import { gprsProcessingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsProcessingPackage.oa.mjs";
// export { gprsProcessingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsProcessingPackage.oa.mjs";
import { gprsReleasePackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsReleasePackage.oa.mjs";
// export { gprsReleasePackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsReleasePackage.oa.mjs";
import { gprsTimerPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsTimerPackage.oa.mjs";
// export { gprsTimerPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsTimerPackage.oa.mjs";
import { gprsBillingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsBillingPackage.oa.mjs";
// export { gprsBillingPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsBillingPackage.oa.mjs";
import { gprsCancelPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsCancelPackage.oa.mjs";
// export { gprsCancelPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsCancelPackage.oa.mjs";
import { gprsChargeAdvicePackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsChargeAdvicePackage.oa.mjs";
// export { gprsChargeAdvicePackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsChargeAdvicePackage.oa.mjs";
import { id_capGprsSsfTogsmScf } from "../CAP-object-identifiers/id-capGprsSsfTogsmScf.va.mjs";
// export { id_capGprsSsfTogsmScf } from "../CAP-object-identifiers/id-capGprsSsfTogsmScf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary capGprsSsfToScf
 * @description
 * 
 * gprsSSF-to-gsmSCF GPRS contract. Dialogue initiated by gprsSSF with
 * `initialDPGPRS`, `applyChargingReportGPRS`, `entityReleasedGPRS`, or
 * `eventReportGPRS`. Initiator consumes `gprsScfActivationPackage`,
 * `gprsEventHandlingPackage`, `gprsChargingPackage`, and
 * `gprsExceptionInformationPackage`. Responder (gsmSCF) consumes
 * `gprsConnectPackage`, `gprsProcessingPackage`, `gprsReleasePackage`,
 * `gprsEventHandlingPackage`, `gprsTimerPackage`, `gprsBillingPackage`,
 * `gprsChargingPackage`, `gprsCancelPackage`, and `gprsChargeAdvicePackage`.
 * Used by `cap-gprssf-scfAC`. Contract OID updated in Rel-6.
 * (3GPP TS 29.078 V19.0.0 clause 8.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * capGprsSsfToScf CONTRACT ::= {
 * -- dialogue initiated by gprsSSF with InitialDPGPRS, ApplyChargingReportGPRS,
 * -- EntityReleasedGPRS and EventReportGPRS Operations
 *     INITIATOR CONSUMER OF    {gprsScfActivationPackage {cAPSpecificBoundSet} |
 *                 gprsEventHandlingPackage {cAPSpecificBoundSet} |
 *                 gprsChargingPackage |
 *                 gprsExceptionInformationPackage {cAPSpecificBoundSet}}
 *     RESPONDER CONSUMER OF    {gprsConnectPackage {cAPSpecificBoundSet} |
 *                 gprsProcessingPackage |
 *                 gprsReleasePackage {cAPSpecificBoundSet} |
 *                 gprsEventHandlingPackage {cAPSpecificBoundSet} |
 *                 gprsTimerPackage |
 *                 gprsBillingPackage {cAPSpecificBoundSet} |
 *                 gprsChargingPackage |
 *                 gprsCancelPackage |
 *                 gprsChargeAdvicePackage {cAPSpecificBoundSet}}
 *     ID                id-capGprsSsfTogsmScf}
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const capGprsSsfToScf: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ gprsScfActivationPackage, gprsEventHandlingPackage, gprsChargingPackage, gprsExceptionInformationPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ gprsConnectPackage, gprsProcessingPackage, gprsReleasePackage, gprsEventHandlingPackage, gprsTimerPackage, gprsBillingPackage, gprsChargingPackage, gprsCancelPackage, gprsChargeAdvicePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_capGprsSsfTogsmScf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
