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



/**
 * @summary ODB_GeneralData
 * @description
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
 * @constant
 */
export
const ODB_GeneralData_allOG_CallsBarred: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary allOG_CallsBarred
 * @constant
 */
export
const allOG_CallsBarred: number = ODB_GeneralData_allOG_CallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_internationalOGCallsBarred
 * @constant
 */
export
const ODB_GeneralData_internationalOGCallsBarred: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary internationalOGCallsBarred
 * @constant
 */
export
const internationalOGCallsBarred: number = ODB_GeneralData_internationalOGCallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_internationalOGCallsNotToHPLMN_CountryBarred
 * @constant
 */
export
const ODB_GeneralData_internationalOGCallsNotToHPLMN_CountryBarred: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary internationalOGCallsNotToHPLMN_CountryBarred
 * @constant
 */
export
const internationalOGCallsNotToHPLMN_CountryBarred: number = ODB_GeneralData_internationalOGCallsNotToHPLMN_CountryBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_interzonalOGCallsBarred
 * @constant
 */
export
const ODB_GeneralData_interzonalOGCallsBarred: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary interzonalOGCallsBarred
 * @constant
 */
export
const interzonalOGCallsBarred: number = ODB_GeneralData_interzonalOGCallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_interzonalOGCallsNotToHPLMN_CountryBarred
 * @constant
 */
export
const ODB_GeneralData_interzonalOGCallsNotToHPLMN_CountryBarred: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary interzonalOGCallsNotToHPLMN_CountryBarred
 * @constant
 */
export
const interzonalOGCallsNotToHPLMN_CountryBarred: number = ODB_GeneralData_interzonalOGCallsNotToHPLMN_CountryBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred
 * @constant
 */
export
const ODB_GeneralData_interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred
 * @constant
 */
export
const interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred: number = ODB_GeneralData_interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_premiumRateInformationOGCallsBarred
 * @constant
 */
export
const ODB_GeneralData_premiumRateInformationOGCallsBarred: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary premiumRateInformationOGCallsBarred
 * @constant
 */
export
const premiumRateInformationOGCallsBarred: number = ODB_GeneralData_premiumRateInformationOGCallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_premiumRateEntertainementOGCallsBarred
 * @constant
 */
export
const ODB_GeneralData_premiumRateEntertainementOGCallsBarred: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary premiumRateEntertainementOGCallsBarred
 * @constant
 */
export
const premiumRateEntertainementOGCallsBarred: number = ODB_GeneralData_premiumRateEntertainementOGCallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_ss_AccessBarred
 * @constant
 */
export
const ODB_GeneralData_ss_AccessBarred: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ss_AccessBarred
 * @constant
 */
export
const ss_AccessBarred: number = ODB_GeneralData_ss_AccessBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_allECT_Barred
 * @constant
 */
export
const ODB_GeneralData_allECT_Barred: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary allECT_Barred
 * @constant
 */
export
const allECT_Barred: number = ODB_GeneralData_allECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_chargeableECT_Barred
 * @constant
 */
export
const ODB_GeneralData_chargeableECT_Barred: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary chargeableECT_Barred
 * @constant
 */
export
const chargeableECT_Barred: number = ODB_GeneralData_chargeableECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_internationalECT_Barred
 * @constant
 */
export
const ODB_GeneralData_internationalECT_Barred: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary internationalECT_Barred
 * @constant
 */
export
const internationalECT_Barred: number = ODB_GeneralData_internationalECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_interzonalECT_Barred
 * @constant
 */
export
const ODB_GeneralData_interzonalECT_Barred: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary interzonalECT_Barred
 * @constant
 */
export
const interzonalECT_Barred: number = ODB_GeneralData_interzonalECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_doublyChargeableECT_Barred
 * @constant
 */
export
const ODB_GeneralData_doublyChargeableECT_Barred: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary doublyChargeableECT_Barred
 * @constant
 */
export
const doublyChargeableECT_Barred: number = ODB_GeneralData_doublyChargeableECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_multipleECT_Barred
 * @constant
 */
export
const ODB_GeneralData_multipleECT_Barred: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary multipleECT_Barred
 * @constant
 */
export
const multipleECT_Barred: number = ODB_GeneralData_multipleECT_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_allPacketOrientedServicesBarred
 * @constant
 */
export
const ODB_GeneralData_allPacketOrientedServicesBarred: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary allPacketOrientedServicesBarred
 * @constant
 */
export
const allPacketOrientedServicesBarred: number = ODB_GeneralData_allPacketOrientedServicesBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamerAccessToHPLMN_AP_Barred
 * @constant
 */
export
const ODB_GeneralData_roamerAccessToHPLMN_AP_Barred: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary roamerAccessToHPLMN_AP_Barred
 * @constant
 */
export
const roamerAccessToHPLMN_AP_Barred: number = ODB_GeneralData_roamerAccessToHPLMN_AP_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamerAccessToVPLMN_AP_Barred
 * @constant
 */
export
const ODB_GeneralData_roamerAccessToVPLMN_AP_Barred: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary roamerAccessToVPLMN_AP_Barred
 * @constant
 */
export
const roamerAccessToVPLMN_AP_Barred: number = ODB_GeneralData_roamerAccessToVPLMN_AP_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamingOutsidePLMNOG_CallsBarred
 * @constant
 */
export
const ODB_GeneralData_roamingOutsidePLMNOG_CallsBarred: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary roamingOutsidePLMNOG_CallsBarred
 * @constant
 */
export
const roamingOutsidePLMNOG_CallsBarred: number = ODB_GeneralData_roamingOutsidePLMNOG_CallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_allIC_CallsBarred
 * @constant
 */
export
const ODB_GeneralData_allIC_CallsBarred: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary allIC_CallsBarred
 * @constant
 */
export
const allIC_CallsBarred: number = ODB_GeneralData_allIC_CallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamingOutsidePLMNIC_CallsBarred
 * @constant
 */
export
const ODB_GeneralData_roamingOutsidePLMNIC_CallsBarred: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary roamingOutsidePLMNIC_CallsBarred
 * @constant
 */
export
const roamingOutsidePLMNIC_CallsBarred: number = ODB_GeneralData_roamingOutsidePLMNIC_CallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamingOutsidePLMNICountryIC_CallsBarred
 * @constant
 */
export
const ODB_GeneralData_roamingOutsidePLMNICountryIC_CallsBarred: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary roamingOutsidePLMNICountryIC_CallsBarred
 * @constant
 */
export
const roamingOutsidePLMNICountryIC_CallsBarred: number = ODB_GeneralData_roamingOutsidePLMNICountryIC_CallsBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamingOutsidePLMN_Barred
 * @constant
 */
export
const ODB_GeneralData_roamingOutsidePLMN_Barred: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary roamingOutsidePLMN_Barred
 * @constant
 */
export
const roamingOutsidePLMN_Barred: number = ODB_GeneralData_roamingOutsidePLMN_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_roamingOutsidePLMN_CountryBarred
 * @constant
 */
export
const ODB_GeneralData_roamingOutsidePLMN_CountryBarred: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary roamingOutsidePLMN_CountryBarred
 * @constant
 */
export
const roamingOutsidePLMN_CountryBarred: number = ODB_GeneralData_roamingOutsidePLMN_CountryBarred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_registrationAllCF_Barred
 * @constant
 */
export
const ODB_GeneralData_registrationAllCF_Barred: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary registrationAllCF_Barred
 * @constant
 */
export
const registrationAllCF_Barred: number = ODB_GeneralData_registrationAllCF_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_registrationCFNotToHPLMN_Barred
 * @constant
 */
export
const ODB_GeneralData_registrationCFNotToHPLMN_Barred: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary registrationCFNotToHPLMN_Barred
 * @constant
 */
export
const registrationCFNotToHPLMN_Barred: number = ODB_GeneralData_registrationCFNotToHPLMN_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_registrationInterzonalCF_Barred
 * @constant
 */
export
const ODB_GeneralData_registrationInterzonalCF_Barred: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary registrationInterzonalCF_Barred
 * @constant
 */
export
const registrationInterzonalCF_Barred: number = ODB_GeneralData_registrationInterzonalCF_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_registrationInterzonalCFNotToHPLMN_Barred
 * @constant
 */
export
const ODB_GeneralData_registrationInterzonalCFNotToHPLMN_Barred: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary registrationInterzonalCFNotToHPLMN_Barred
 * @constant
 */
export
const registrationInterzonalCFNotToHPLMN_Barred: number = ODB_GeneralData_registrationInterzonalCFNotToHPLMN_Barred; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_GeneralData_registrationInternationalCF_Barred
 * @constant
 */
export
const ODB_GeneralData_registrationInternationalCF_Barred: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary registrationInternationalCF_Barred
 * @constant
 */
export
const registrationInternationalCF_Barred: number = ODB_GeneralData_registrationInternationalCF_Barred; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ODB_GeneralData: $.ASN1Decoder<ODB_GeneralData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ODB_GeneralData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ODB_GeneralData (el: _Element): ODB_GeneralData {
    if (!_cached_decoder_for_ODB_GeneralData) { _cached_decoder_for_ODB_GeneralData = $._decodeBitString; }
    return _cached_decoder_for_ODB_GeneralData(el);
}

let _cached_encoder_for_ODB_GeneralData: $.ASN1Encoder<ODB_GeneralData> | null = null;

/**
 * @summary Encodes a(n) ODB_GeneralData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ODB_GeneralData, encoded as an ASN.1 Element.
 */
export
function _encode_ODB_GeneralData (value: ODB_GeneralData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ODB_GeneralData) { _cached_encoder_for_ODB_GeneralData = $._encodeBitString; }
    return _cached_encoder_for_ODB_GeneralData(value, elGetter);
}


/* eslint-enable */
