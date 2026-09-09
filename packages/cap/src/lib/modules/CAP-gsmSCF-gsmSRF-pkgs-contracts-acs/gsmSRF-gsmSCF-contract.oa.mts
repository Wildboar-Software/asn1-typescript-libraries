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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { specializedResourceControlPackage } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
// export { specializedResourceControlPackage } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
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
