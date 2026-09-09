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
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { specializedResourceControlPackage } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
// export { specializedResourceControlPackage } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
import { gsmSRF_scfActivationOfAssistPackage } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/gsmSRF-scfActivationOfAssistPackage.oa.mjs";
import { activityTestPackage } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { gsmSRF_scfCancelPackage } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/gsmSRF-scfCancelPackage.oa.mjs";
// export { gsmSRF_scfCancelPackage } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/gsmSRF-scfCancelPackage.oa.mjs";
import { id_contract_gsmSRF_gsmSCF } from "../CAP-object-identifiers/id-contract-gsmSRF-gsmSCF.va.mjs";
// export { id_contract_gsmSRF_gsmSCF } from "../CAP-object-identifiers/id-contract-gsmSRF-gsmSCF.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary gsmSRF_gsmSCF_contract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsmSRF-gsmSCF-contract CONTRACT ::= {
 *     INITIATOR CONSUMER OF    {gsmSRF-scfActivationOfAssistPackage {cAPSpecificBoundSet}}
 *     RESPONDER CONSUMER OF    {specializedResourceControlPackage {cAPSpecificBoundSet} |
 *                 activityTestPackage |
 *                 gsmSRF-scfCancelPackage {cAPSpecificBoundSet} }
 *     ID                id-contract-gsmSRF-gsmSCF}
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const gsmSRF_gsmSCF_contract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ gsmSRF_scfActivationOfAssistPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ specializedResourceControlPackage, activityTestPackage, gsmSRF_scfCancelPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_gsmSRF_gsmSCF /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
