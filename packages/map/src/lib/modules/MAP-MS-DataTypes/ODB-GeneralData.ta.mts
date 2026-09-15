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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ODB_GeneralData
 * @description
 *
 * ODB categories that may apply in any PLMN. Controlled in VLR, SGSN/MME,
 * and/or interrogatable by gsmSCF as in the table of clause 7.6.3.9. Unknown
 * bit assignments shall be treated as unsupported ODB-GeneralData. When this
 * type is removed from the HLR, NoteSubscriberDataModified toward the gsmSCF
 * shall set all bits to `0`. SIZE (15..32). (3GPP TS 29.002 V19.1.0 clauses
 * 7.6.3.9, 8.8.1.3, and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ODB-GeneralData  ::=  BIT STRING {
 *     allOG-CallsBarred  (0),
 *     internationalOGCallsBarred  (1),
 *     internationalOGCallsNotToHPLMN-CountryBarred  (2),
 *     interzonalOGCallsBarred (6),
 *     interzonalOGCallsNotToHPLMN-CountryBarred (7),
 *     interzonalOGCallsAndInternationalOGCallsNotToHPLMN-CountryBarred (8),
 *     premiumRateInformationOGCallsBarred  (3),
 *     premiumRateEntertainementOGCallsBarred  (4),
 *     ss-AccessBarred  (5),
 *     allECT-Barred (9),
 *     chargeableECT-Barred (10),
 *     internationalECT-Barred (11),
 *     interzonalECT-Barred (12),
 *     doublyChargeableECT-Barred (13),
 *     multipleECT-Barred (14),
 *     allPacketOrientedServicesBarred (15),
 *     roamerAccessToHPLMN-AP-Barred  (16),
 *     roamerAccessToVPLMN-AP-Barred  (17),
 *     roamingOutsidePLMNOG-CallsBarred  (18),
 *     allIC-CallsBarred  (19),
 *     roamingOutsidePLMNIC-CallsBarred  (20),
 *     roamingOutsidePLMNICountryIC-CallsBarred  (21),
 *     roamingOutsidePLMN-Barred  (22),
 *     roamingOutsidePLMN-CountryBarred  (23),
 *     registrationAllCF-Barred  (24),
 *     registrationCFNotToHPLMN-Barred  (25),
 *     registrationInterzonalCF-Barred  (26),
 *     registrationInterzonalCFNotToHPLMN-Barred  (27),
 *     registrationInternationalCF-Barred  (28)} (SIZE (15..32))
 * ```
 */
export
type ODB_GeneralData = BIT_STRING;

/**
 * @summary ODB_GeneralData_allOG_CallsBarred
 * @description
 *
 * All outgoing calls barred. Controlled in VLR, SGSN/MME, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_allOG_CallsBarred: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary allOG_CallsBarred
 * @description
 *
 * All outgoing calls barred. Controlled in VLR, SGSN/MME, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const allOG_CallsBarred: number = ODB_GeneralData_allOG_CallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_internationalOGCallsBarred
 * @description
 *
 * International outgoing calls barred. Controlled in VLR, SGSN/MME, gsmSCF.
 * (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_internationalOGCallsBarred: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary internationalOGCallsBarred
 * @description
 *
 * International outgoing calls barred. Controlled in VLR, SGSN/MME, gsmSCF.
 * (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const internationalOGCallsBarred: number = ODB_GeneralData_internationalOGCallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_internationalOGCallsNotToHPLMN_CountryBarred
 * @description
 *
 * International outgoing calls except those to the home PLMN country barred.
 * Controlled in VLR, SGSN/MME, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_internationalOGCallsNotToHPLMN_CountryBarred: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary internationalOGCallsNotToHPLMN_CountryBarred
 * @description
 *
 * International outgoing calls except those to the home PLMN country barred.
 * Controlled in VLR, SGSN/MME, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const internationalOGCallsNotToHPLMN_CountryBarred: number = ODB_GeneralData_internationalOGCallsNotToHPLMN_CountryBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_interzonalOGCallsBarred
 * @description
 *
 * Interzonal outgoing calls barred. Controlled in VLR, SGSN/MME, gsmSCF. (3GPP
 * TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_interzonalOGCallsBarred: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary interzonalOGCallsBarred
 * @description
 *
 * Interzonal outgoing calls barred. Controlled in VLR, SGSN/MME, gsmSCF. (3GPP
 * TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const interzonalOGCallsBarred: number = ODB_GeneralData_interzonalOGCallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_interzonalOGCallsNotToHPLMN_CountryBarred
 * @description
 *
 * Interzonal outgoing calls except those to the home PLMN country barred.
 * Controlled in VLR, SGSN/MME, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_interzonalOGCallsNotToHPLMN_CountryBarred: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary interzonalOGCallsNotToHPLMN_CountryBarred
 * @description
 *
 * Interzonal outgoing calls except those to the home PLMN country barred.
 * Controlled in VLR, SGSN/MME, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const interzonalOGCallsNotToHPLMN_CountryBarred: number = ODB_GeneralData_interzonalOGCallsNotToHPLMN_CountryBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred
 * @description
 *
 * Interzonal outgoing calls and international outgoing calls except those to
 * the home PLMN country barred. Controlled in VLR, SGSN/MME, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred
 * @description
 *
 * Interzonal outgoing calls and international outgoing calls except those to
 * the home PLMN country barred. Controlled in VLR, SGSN/MME, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred: number = ODB_GeneralData_interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_premiumRateInformationOGCallsBarred
 * @description
 *
 * Premium rate (information) outgoing calls barred. Controlled in VLR, gsmSCF.
 * (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_premiumRateInformationOGCallsBarred: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary premiumRateInformationOGCallsBarred
 * @description
 *
 * Premium rate (information) outgoing calls barred. Controlled in VLR, gsmSCF.
 * (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const premiumRateInformationOGCallsBarred: number = ODB_GeneralData_premiumRateInformationOGCallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_premiumRateEntertainementOGCallsBarred
 * @description
 *
 * Premium rate (entertainment) outgoing calls barred. Controlled in VLR,
 * gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_premiumRateEntertainementOGCallsBarred: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary premiumRateEntertainementOGCallsBarred
 * @description
 *
 * Premium rate (entertainment) outgoing calls barred. Controlled in VLR,
 * gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const premiumRateEntertainementOGCallsBarred: number = ODB_GeneralData_premiumRateEntertainementOGCallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_ss_AccessBarred
 * @description
 *
 * Supplementary service access barred. Controlled in VLR, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_ss_AccessBarred: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ss_AccessBarred
 * @description
 *
 * Supplementary service access barred. Controlled in VLR, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ss_AccessBarred: number = ODB_GeneralData_ss_AccessBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_allECT_Barred
 * @description
 *
 * Invocation of call transfer barred. Controlled in VLR, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_allECT_Barred: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary allECT_Barred
 * @description
 *
 * Invocation of call transfer barred. Controlled in VLR, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const allECT_Barred: number = ODB_GeneralData_allECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_chargeableECT_Barred
 * @description
 *
 * Invocation of chargeable call transfer barred. Controlled in VLR, gsmSCF.
 * (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_chargeableECT_Barred: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary chargeableECT_Barred
 * @description
 *
 * Invocation of chargeable call transfer barred. Controlled in VLR, gsmSCF.
 * (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const chargeableECT_Barred: number = ODB_GeneralData_chargeableECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_internationalECT_Barred
 * @description
 *
 * Invocation of internationally chargeable call transfer barred. Controlled in
 * VLR, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_internationalECT_Barred: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary internationalECT_Barred
 * @description
 *
 * Invocation of internationally chargeable call transfer barred. Controlled in
 * VLR, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const internationalECT_Barred: number = ODB_GeneralData_internationalECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_interzonalECT_Barred
 * @description
 *
 * Invocation of interzonally chargeable call transfer barred. Controlled in
 * VLR, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_interzonalECT_Barred: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary interzonalECT_Barred
 * @description
 *
 * Invocation of interzonally chargeable call transfer barred. Controlled in
 * VLR, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const interzonalECT_Barred: number = ODB_GeneralData_interzonalECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_doublyChargeableECT_Barred
 * @description
 *
 * Invocation of call transfer where both legs are chargeable barred. Controlled
 * in VLR, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_doublyChargeableECT_Barred: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary doublyChargeableECT_Barred
 * @description
 *
 * Invocation of call transfer where both legs are chargeable barred. Controlled
 * in VLR, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const doublyChargeableECT_Barred: number = ODB_GeneralData_doublyChargeableECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_multipleECT_Barred
 * @description
 *
 * Invocation of call transfer if there is already an ongoing transferred call
 * barred. Controlled in VLR, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_multipleECT_Barred: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary multipleECT_Barred
 * @description
 *
 * Invocation of call transfer if there is already an ongoing transferred call
 * barred. Controlled in VLR, gsmSCF. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const multipleECT_Barred: number = ODB_GeneralData_multipleECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_allPacketOrientedServicesBarred
 * @description
 *
 * All packet-oriented services barred. Controlled in SGSN/MME, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_allPacketOrientedServicesBarred: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary allPacketOrientedServicesBarred
 * @description
 *
 * All packet-oriented services barred. Controlled in SGSN/MME, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const allPacketOrientedServicesBarred: number = ODB_GeneralData_allPacketOrientedServicesBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamerAccessToHPLMN_AP_Barred
 * @description
 *
 * Roamer access to HPLMN-AP barred. Controlled in SGSN/MME, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_roamerAccessToHPLMN_AP_Barred: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary roamerAccessToHPLMN_AP_Barred
 * @description
 *
 * Roamer access to HPLMN-AP barred. Controlled in SGSN/MME, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const roamerAccessToHPLMN_AP_Barred: number = ODB_GeneralData_roamerAccessToHPLMN_AP_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamerAccessToVPLMN_AP_Barred
 * @description
 *
 * Roamer access to VPLMN-AP barred. Controlled in SGSN/MME, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_roamerAccessToVPLMN_AP_Barred: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary roamerAccessToVPLMN_AP_Barred
 * @description
 *
 * Roamer access to VPLMN-AP barred. Controlled in SGSN/MME, gsmSCF. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const roamerAccessToVPLMN_AP_Barred: number = ODB_GeneralData_roamerAccessToVPLMN_AP_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamingOutsidePLMNOG_CallsBarred
 * @description
 *
 * Outgoing calls when roaming outside the home PLMN country barred. Controlled
 * in VLR. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_roamingOutsidePLMNOG_CallsBarred: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary roamingOutsidePLMNOG_CallsBarred
 * @description
 *
 * Outgoing calls when roaming outside the home PLMN country barred. Controlled
 * in VLR. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const roamingOutsidePLMNOG_CallsBarred: number = ODB_GeneralData_roamingOutsidePLMNOG_CallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_allIC_CallsBarred
 * @description
 *
 * All incoming calls barred. Controlled in VLR. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_allIC_CallsBarred: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary allIC_CallsBarred
 * @description
 *
 * All incoming calls barred. Controlled in VLR. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.9)
 *
 * @constant
 */
export
const allIC_CallsBarred: number = ODB_GeneralData_allIC_CallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamingOutsidePLMNIC_CallsBarred
 * @description
 *
 * Incoming calls when roaming outside the home PLMN country barred. Controlled
 * in VLR. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_roamingOutsidePLMNIC_CallsBarred: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary roamingOutsidePLMNIC_CallsBarred
 * @description
 *
 * Incoming calls when roaming outside the home PLMN country barred. Controlled
 * in VLR. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const roamingOutsidePLMNIC_CallsBarred: number = ODB_GeneralData_roamingOutsidePLMNIC_CallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamingOutsidePLMNICountryIC_CallsBarred
 * @description
 *
 * Incoming calls when roaming outside the zone of the home PLMN country barred.
 * Controlled in VLR. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_roamingOutsidePLMNICountryIC_CallsBarred: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary roamingOutsidePLMNICountryIC_CallsBarred
 * @description
 *
 * Incoming calls when roaming outside the zone of the home PLMN country barred.
 * Controlled in VLR. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const roamingOutsidePLMNICountryIC_CallsBarred: number = ODB_GeneralData_roamingOutsidePLMNICountryIC_CallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamingOutsidePLMN_Barred
 * @description
 *
 * Roaming outside the home PLMN barred. Controlled in VLR. (3GPP TS 29.002
 * V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_roamingOutsidePLMN_Barred: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary roamingOutsidePLMN_Barred
 * @description
 *
 * Roaming outside the home PLMN barred. Controlled in VLR. (3GPP TS 29.002
 * V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const roamingOutsidePLMN_Barred: number = ODB_GeneralData_roamingOutsidePLMN_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamingOutsidePLMN_CountryBarred
 * @description
 *
 * Roaming outside the home PLMN country barred. Controlled in VLR. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_roamingOutsidePLMN_CountryBarred: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary roamingOutsidePLMN_CountryBarred
 * @description
 *
 * Roaming outside the home PLMN country barred. Controlled in VLR. (3GPP TS
 * 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const roamingOutsidePLMN_CountryBarred: number = ODB_GeneralData_roamingOutsidePLMN_CountryBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_registrationAllCF_Barred
 * @description
 *
 * Registration of any call forwarded-to number barred. Controlled in VLR. (3GPP
 * TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_registrationAllCF_Barred: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary registrationAllCF_Barred
 * @description
 *
 * Registration of any call forwarded-to number barred. Controlled in VLR. (3GPP
 * TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const registrationAllCF_Barred: number = ODB_GeneralData_registrationAllCF_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_registrationCFNotToHPLMN_Barred
 * @description
 *
 * Registration of any international call forwarded-to number except within the
 * HPLMN country barred. Controlled in VLR. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_registrationCFNotToHPLMN_Barred: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary registrationCFNotToHPLMN_Barred
 * @description
 *
 * Registration of any international call forwarded-to number except within the
 * HPLMN country barred. Controlled in VLR. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.9)
 *
 * @constant
 */
export
const registrationCFNotToHPLMN_Barred: number = ODB_GeneralData_registrationCFNotToHPLMN_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_registrationInterzonalCF_Barred
 * @description
 *
 * Registration of any inter-zone call forwarded-to number barred. Controlled in
 * VLR. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_registrationInterzonalCF_Barred: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary registrationInterzonalCF_Barred
 * @description
 *
 * Registration of any inter-zone call forwarded-to number barred. Controlled in
 * VLR. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const registrationInterzonalCF_Barred: number = ODB_GeneralData_registrationInterzonalCF_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_registrationInterzonalCFNotToHPLMN_Barred
 * @description
 *
 * Registration of any inter-zone call forwarded-to number except within the
 * HPLMN country barred. Controlled in VLR. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_registrationInterzonalCFNotToHPLMN_Barred: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary registrationInterzonalCFNotToHPLMN_Barred
 * @description
 *
 * Registration of any inter-zone call forwarded-to number except within the
 * HPLMN country barred. Controlled in VLR. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.9)
 *
 * @constant
 */
export
const registrationInterzonalCFNotToHPLMN_Barred: number = ODB_GeneralData_registrationInterzonalCFNotToHPLMN_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_registrationInternationalCF_Barred
 * @description
 *
 * Registration of any international call forwarded-to number barred. Controlled
 * in VLR. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const ODB_GeneralData_registrationInternationalCF_Barred: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary registrationInternationalCF_Barred
 * @description
 *
 * Registration of any international call forwarded-to number barred. Controlled
 * in VLR. (3GPP TS 29.002 V19.1.0 clause 7.6.3.9)
 *
 * @constant
 */
export
const registrationInternationalCF_Barred: number = ODB_GeneralData_registrationInternationalCF_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) ODB_GeneralData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ODB_GeneralData = (el: _Element): ODB_GeneralData => {
    const value = $._decodeBitString(el);
    if (value.length < 15 || value.length > 32) {
        throw new ASN1SizeError("ODB_GeneralData violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ODB_GeneralData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ODB_GeneralData, encoded as an ASN.1 Element.
 */
export const _encode_ODB_GeneralData = $._encodeBitString;


/* eslint-enable */
