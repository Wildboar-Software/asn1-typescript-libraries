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
import { activityTestPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { assistConnectionEstablishmentPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/assistConnectionEstablishmentPackage.oa.mjs";
// export { assistConnectionEstablishmentPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/assistConnectionEstablishmentPackage.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
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
import { scfCallInitiationPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/scfCallInitiationPackage.oa.mjs";
// export { scfCallInitiationPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/scfCallInitiationPackage.oa.mjs";
import { ssfCallProcessingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/ssfCallProcessingPackage.oa.mjs";
// export { ssfCallProcessingPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/ssfCallProcessingPackage.oa.mjs";
import { timerPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/timerPackage.oa.mjs";
// export { timerPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/timerPackage.oa.mjs";
import { exceptionInformPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/exceptionInformPackage.oa.mjs";
// export { exceptionInformPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/exceptionInformPackage.oa.mjs";
import { specializedResourceControlPackage } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
import { id_CAPScfToSsfGeneric } from "../CAP-object-identifiers/id-CAPScfToSsfGeneric.va.mjs";
// export { id_CAPScfToSsfGeneric } from "../CAP-object-identifiers/id-CAPScfToSsfGeneric.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary capScfToSsfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * capScfToSsfGeneric CONTRACT ::= {
 * -- dialogue initiated by gsmSCF with InitiateCallAttempt, Generic Case
 *     INITIATOR CONSUMER OF    {activityTestPackage |
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
 *                 scfCallInitiationPackage {cAPSpecificBoundSet} |
 *                 specializedResourceControlPackage {cAPSpecificBoundSet} |
 *                 ssfCallProcessingPackage {cAPSpecificBoundSet} |
 *                 timerPackage {cAPSpecificBoundSet}}
 *     RESPONDER CONSUMER OF    {exceptionInformPackage {cAPSpecificBoundSet}}
 *     ID                id-CAPScfToSsfGeneric}
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const capScfToSsfGeneric: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ activityTestPackage, assistConnectionEstablishmentPackage, bcsmEventHandlingPackage, billingPackage, callHandlingPackage, callReportPackage, cancelPackage, chargingPackage, connectPackage, cphResponsePackage, genericDisconnectResourcePackage, nonAssistedConnectionEstablishmentPackage, playTonePackage, scfCallInitiationPackage, specializedResourceControlPackage, ssfCallProcessingPackage, timerPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ exceptionInformPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_CAPScfToSsfGeneric /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
