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
import { smsActivationPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsActivationPackage.oa.mjs";
// export { smsActivationPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsActivationPackage.oa.mjs";
import { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { smsConnectPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsConnectPackage.oa.mjs";
// export { smsConnectPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsConnectPackage.oa.mjs";
import { smsReleasePackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsReleasePackage.oa.mjs";
// export { smsReleasePackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsReleasePackage.oa.mjs";
import { smsEventHandlingPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsEventHandlingPackage.oa.mjs";
// export { smsEventHandlingPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsEventHandlingPackage.oa.mjs";
import { smsTimerPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsTimerPackage.oa.mjs";
// export { smsTimerPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsTimerPackage.oa.mjs";
import { smsBillingPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsBillingPackage.oa.mjs";
// export { smsBillingPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsBillingPackage.oa.mjs";
import { smsProcessingPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsProcessingPackage.oa.mjs";
// export { smsProcessingPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsProcessingPackage.oa.mjs";
import { id_cap3SmsSsfTogsmScf } from "../CAP-object-identifiers/id-cap3SmsSsfTogsmScf.va.mjs";
// export { id_cap3SmsSsfTogsmScf } from "../CAP-object-identifiers/id-cap3SmsSsfTogsmScf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary cap3SMS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cap3SMS CONTRACT ::= {
 * -- dialogue initiated by gprsSSF or gsmSSF with InitialDPSMS Operation
 *     INITIATOR CONSUMER OF    {smsActivationPackage {cAPSpecificBoundSet}}
 *     RESPONDER CONSUMER OF    {smsConnectPackage {cAPSpecificBoundSet} |
 *                 smsReleasePackage |
 *                 smsEventHandlingPackage {cAPSpecificBoundSet} |
 *                 smsTimerPackage {cAPSpecificBoundSet} |
 *                 smsBillingPackage {cAPSpecificBoundSet} |
 *                 smsProcessingPackage}
 *     ID                id-cap3SmsSsfTogsmScf}
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const cap3SMS: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ smsActivationPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ smsConnectPackage, smsReleasePackage, smsEventHandlingPackage, smsTimerPackage, smsBillingPackage, smsProcessingPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_cap3SmsSsfTogsmScf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
