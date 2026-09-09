/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { gprsScfActivationPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsScfActivationPackage.oa.mjs";
// export { gprsScfActivationPackage } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gprsScfActivationPackage.oa.mjs";
import { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
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
