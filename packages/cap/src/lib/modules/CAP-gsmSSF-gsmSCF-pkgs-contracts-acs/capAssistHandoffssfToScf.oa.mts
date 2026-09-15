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
import { gsmSRF_scfActivationOfAssistPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/gsmSRF-scfActivationOfAssistPackage.oa.mjs";
// export { gsmSRF_scfActivationOfAssistPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/gsmSRF-scfActivationOfAssistPackage.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { activityTestPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { cancelPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/cancelPackage.oa.mjs";
// export { cancelPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/cancelPackage.oa.mjs";
import { genericDisconnectResourcePackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/genericDisconnectResourcePackage.oa.mjs";
// export { genericDisconnectResourcePackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/genericDisconnectResourcePackage.oa.mjs";
import { nonAssistedConnectionEstablishmentPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/nonAssistedConnectionEstablishmentPackage.oa.mjs";
// export { nonAssistedConnectionEstablishmentPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/nonAssistedConnectionEstablishmentPackage.oa.mjs";
import { timerPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/timerPackage.oa.mjs";
// export { timerPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/timerPackage.oa.mjs";
import { specializedResourceControlPackage } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
import { id_CAPAssistHandoffssfToScf } from "../CAP-object-identifiers/id-CAPAssistHandoffssfToScf.va.mjs";
// export { id_CAPAssistHandoffssfToScf } from "../CAP-object-identifiers/id-CAPAssistHandoffssfToScf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary capAssistHandoffssfToScf
 * @description
 * 
 * Assist-handoff gsmSSF-to-gsmSCF CS contract. Dialogue initiated by gsmSSF
 * with `assistRequestInstructions`. Initiator consumes
 * `gsmSRF-scfActivationOfAssistPackage`. Responder (gsmSCF) consumes
 * `activityTestPackage`, `cancelPackage`, `genericDisconnectResourcePackage`,
 * `nonAssistedConnectionEstablishmentPackage`,
 * `specializedResourceControlPackage` (defined in
 * CAP-gsmSCF-gsmSRF-pkgs-contracts-acs), and `timerPackage`. Used by
 * `capssf-scfAssistHandoffAC`. Contract ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * capAssistHandoffssfToScf CONTRACT ::= {
 * -- dialogue initiated by gsmSSF with AssistRequestInstructions
 *     INITIATOR CONSUMER OF    {gsmSRF-scfActivationOfAssistPackage {cAPSpecificBoundSet}}
 *     RESPONDER CONSUMER OF    {activityTestPackage |
 *                 cancelPackage {cAPSpecificBoundSet} |
 *                 genericDisconnectResourcePackage {cAPSpecificBoundSet} |
 *                 nonAssistedConnectionEstablishmentPackage {cAPSpecificBoundSet} |
 *                 specializedResourceControlPackage {cAPSpecificBoundSet} |
 *                 timerPackage {cAPSpecificBoundSet}}
 *     ID                id-CAPAssistHandoffssfToScf}
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const capAssistHandoffssfToScf: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ gsmSRF_scfActivationOfAssistPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ activityTestPackage, cancelPackage, genericDisconnectResourcePackage, nonAssistedConnectionEstablishmentPackage, specializedResourceControlPackage, timerPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_CAPAssistHandoffssfToScf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
