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
import { smsActivationPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsActivationPackage.oa.mjs";
// export { smsActivationPackage } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/smsActivationPackage.oa.mjs";
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
import { id_cap4SmsSsfTogsmScf } from "../CAP-object-identifiers/id-cap4SmsSsfTogsmScf.va.mjs";
// export { id_cap4SmsSsfTogsmScf } from "../CAP-object-identifiers/id-cap4SmsSsfTogsmScf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary cap4SMS
 * @description
 * 
 * MT-SMS contract (`smsSSF-V4` initiates this). Dialogue initiated by gsmSSF or
 * gprsSSF with `initialDPSMS`. Same packages as `cap3SMS`: initiator consumes
 * `smsActivationPackage`; responder consumes `smsConnectPackage`,
 * `smsReleasePackage`, `smsEventHandlingPackage`, `smsTimerPackage`,
 * `smsBillingPackage`, and `smsProcessingPackage`. Used by `cap4-sms-AC`.
 * Contract ID same as Rel-5. (3GPP TS 29.078 V19.0.0 clause 7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cap4SMS CONTRACT ::= {
 * -- dialogue initiated by gprsSSF or gsmSSF with InitialDPSMS Operation
 *     INITIATOR CONSUMER OF    {smsActivationPackage {cAPSpecificBoundSet}}
 *     RESPONDER CONSUMER OF    {smsConnectPackage {cAPSpecificBoundSet} |
 *                 smsReleasePackage |
 *                 smsEventHandlingPackage {cAPSpecificBoundSet} |
 *                 smsTimerPackage {cAPSpecificBoundSet} |
 *                 smsBillingPackage {cAPSpecificBoundSet} |
 *                 smsProcessingPackage }
 *     ID                id-cap4SmsSsfTogsmScf}
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const cap4SMS: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ smsActivationPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ smsConnectPackage, smsReleasePackage, smsEventHandlingPackage, smsTimerPackage, smsBillingPackage, smsProcessingPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_cap4SmsSsfTogsmScf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
