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
import { exceptionInformPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/exceptionInformPackage.oa.mjs";
// export { exceptionInformPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/exceptionInformPackage.oa.mjs";
import { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { scfActivationPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/scfActivationPackage.oa.mjs";
// export { scfActivationPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/scfActivationPackage.oa.mjs";
import { activityTestPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { assistConnectionEstablishmentPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/assistConnectionEstablishmentPackage.oa.mjs";
// export { assistConnectionEstablishmentPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/assistConnectionEstablishmentPackage.oa.mjs";
import { bcsmEventHandlingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/bcsmEventHandlingPackage.oa.mjs";
// export { bcsmEventHandlingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/bcsmEventHandlingPackage.oa.mjs";
import { billingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/billingPackage.oa.mjs";
// export { billingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/billingPackage.oa.mjs";
import { callHandlingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/callHandlingPackage.oa.mjs";
// export { callHandlingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/callHandlingPackage.oa.mjs";
import { callReportPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/callReportPackage.oa.mjs";
// export { callReportPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/callReportPackage.oa.mjs";
import { cancelPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/cancelPackage.oa.mjs";
// export { cancelPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/cancelPackage.oa.mjs";
import { chargingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/chargingPackage.oa.mjs";
// export { chargingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/chargingPackage.oa.mjs";
import { connectPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/connectPackage.oa.mjs";
// export { connectPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/connectPackage.oa.mjs";
import { cphResponsePackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/cphResponsePackage.oa.mjs";
// export { cphResponsePackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/cphResponsePackage.oa.mjs";
import { genericDisconnectResourcePackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/genericDisconnectResourcePackage.oa.mjs";
// export { genericDisconnectResourcePackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/genericDisconnectResourcePackage.oa.mjs";
import { nonAssistedConnectionEstablishmentPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/nonAssistedConnectionEstablishmentPackage.oa.mjs";
// export { nonAssistedConnectionEstablishmentPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/nonAssistedConnectionEstablishmentPackage.oa.mjs";
import { playTonePackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/playTonePackage.oa.mjs";
// export { playTonePackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/playTonePackage.oa.mjs";
import { signallingControlPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/signallingControlPackage.oa.mjs";
// export { signallingControlPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/signallingControlPackage.oa.mjs";
import { ssfCallProcessingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/ssfCallProcessingPackage.oa.mjs";
// export { ssfCallProcessingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/ssfCallProcessingPackage.oa.mjs";
import { timerPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/timerPackage.oa.mjs";
// export { timerPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/timerPackage.oa.mjs";
import { trafficManagementPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/trafficManagementPackage.oa.mjs";
// export { trafficManagementPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/trafficManagementPackage.oa.mjs";
import { scfCallInitiationPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/scfCallInitiationPackage.oa.mjs";
// export { scfCallInitiationPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/scfCallInitiationPackage.oa.mjs";
import { id_CAPSsfToScfGeneric } from "../CAP-object-identifiers/id-CAPSsfToScfGeneric.va.mjs";
// export { id_CAPSsfToScfGeneric } from "../CAP-object-identifiers/id-CAPSsfToScfGeneric.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary capSsfToScfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * capSsfToScfGeneric CONTRACT ::= {
 * -- dialogue initiated by gsmSSF with InitialDP Operation
 *     INITIATOR CONSUMER OF    {exceptionInformPackage {cAPSpecificBoundSet} |
 *                 scfActivationPackage {cAPSpecificBoundSet}}
 *     RESPONDER CONSUMER OF    {activityTestPackage |
 *                 assistConnectionEstablishmentPackage {cAPSpecificBoundSet} |
 *                 bcsmEventHandlingPackage {cAPSpecificBoundSet} |
 *                 billingPackage {cAPSpecificBoundSet} |
 *                 callHandlingPackage {cAPSpecificBoundSet} |
 *                 callReportPackage {cAPSpecificBoundSet} |
 *                 cancelPackage {cAPSpecificBoundSet} |
 *                 chargingPackage {cAPSpecificBoundSet} |
 *                 connectPackage {cAPSpecificBoundSet} |
 *                 cphResponsePackage {cAPSpecificBoundSet} |
 *                 genericDisconnectResourcePackage {cAPSpecificBoundSet} |
 *                 nonAssistedConnectionEstablishmentPackage {cAPSpecificBoundSet} |
 *                 playTonePackage {cAPSpecificBoundSet} |
 *                 signallingControlPackage {cAPSpecificBoundSet} |
 *                 specializedResourceControlPackage {cAPSpecificBoundSet} |
 *                 ssfCallProcessingPackage {cAPSpecificBoundSet} |
 *                 timerPackage {cAPSpecificBoundSet} |
 *                 trafficManagementPackage {cAPSpecificBoundSet} |
 *                 scfCallInitiationPackage {cAPSpecificBoundSet}}
 *     ID                id-CAPSsfToScfGeneric}
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const capSsfToScfGeneric: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ exceptionInformPackage, scfActivationPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ activityTestPackage, assistConnectionEstablishmentPackage, bcsmEventHandlingPackage, billingPackage, callHandlingPackage, callReportPackage, cancelPackage, chargingPackage, connectPackage, cphResponsePackage, genericDisconnectResourcePackage, nonAssistedConnectionEstablishmentPackage, playTonePackage, signallingControlPackage, specializedResourceControlPackage, ssfCallProcessingPackage, timerPackage, trafficManagementPackage, scfCallInitiationPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_CAPSsfToScfGeneric /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
