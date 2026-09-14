/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary ParameterSupportOptions
 * @description
 * 
 * Named parameter CBBs negotiated
 * at Initiate. Each bit enables a parameter/feature (arrays, names,
 * addresses, companion-standard extensions, UTF-8 identifiers, …).
 * SIZE(18). ISO 9506-1:2003 §8.1.3.15, §8.2; ISO 9506-2:2003 Initiate PDUs.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterSupportOptions  ::=  BIT STRING {
 *     str1                       (0),
 *     str2                       (1),
 *     vnam                       (2),
 *     valt                       (3),
 *     vadr                       (4),
 *     -- bit 5 is reserved for the services defined in Annex E.
 *     vsca                       (5),
 *     tpy                        (6),
 *     vlis                       (7),
 *     -- bit 8 is reserved
 *     -- bit 9 is reserved
 *     cei                        (10),
 *     aco                        (11),
 *     sem                        (12),
 *     csr                        (13),
 *     csnc                       (14),
 *     csplc                      (15),
 *     cspi                       (16),
 *     char                       (17)
 * } (SIZE(18))
 * ```
 */
export
type ParameterSupportOptions = BIT_STRING;

/**
 * @summary ParameterSupportOptions_str1
 * @description
 *
 * ARRAY Kind Of Type / INDEX Alternate Access / ARRAY Kind Of Data; &nest > 0.
 * ISO 9506-1:2003 §8.1.3.15.1.
 *
 * @constant
 */
export
const ParameterSupportOptions_str1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary str1
 * @description
 *
 * ARRAY Kind Of Type / INDEX Alternate Access / ARRAY Kind Of Data; &nest > 0.
 * ISO 9506-1:2003 §8.1.3.15.1.
 *
 * @constant
 */
export
const str1: number = ParameterSupportOptions_str1; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_str2
 * @description
 *
 * STRUCTURE Kind Of Type / COMPONENT Alternate Access / STRUCTURE Kind Of Data;
 * &nest > 0. ISO 9506-1:2003 §8.1.3.15.2.
 *
 * @constant
 */
export
const ParameterSupportOptions_str2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary str2
 * @description
 *
 * STRUCTURE Kind Of Type / COMPONENT Alternate Access / STRUCTURE Kind Of Data;
 * &nest > 0. ISO 9506-1:2003 §8.1.3.15.2.
 *
 * @constant
 */
export
const str2: number = ParameterSupportOptions_str2; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_vnam
 * @description
 *
 * NAMED Kind Of Variable (Variable Specification and
 * GetVariableAccessAttributes). ISO 9506-1:2003 §8.1.3.15.3.
 *
 * @constant
 */
export
const ParameterSupportOptions_vnam: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary vnam
 * @description
 *
 * NAMED Kind Of Variable (Variable Specification and
 * GetVariableAccessAttributes). ISO 9506-1:2003 §8.1.3.15.3.
 *
 * @constant
 */
export
const vnam: number = ParameterSupportOptions_vnam; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_valt
 * @description
 *
 * Alternate Access and Component Name parameters. ISO 9506-1:2003 §8.1.3.15.4.
 *
 * @constant
 */
export
const ParameterSupportOptions_valt: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary valt
 * @description
 *
 * Alternate Access and Component Name parameters. ISO 9506-1:2003 §8.1.3.15.4.
 *
 * @constant
 */
export
const valt: number = ParameterSupportOptions_valt; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_vadr
 * @description
 *
 * Address parameter; UNNAMED/SINGLE Kind Of Variable; Packed = true on
 * array/structure. ISO 9506-1:2003 §8.1.3.15.5.
 *
 * @constant
 */
export
const ParameterSupportOptions_vadr: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary vadr
 * @description
 *
 * Address parameter; UNNAMED/SINGLE Kind Of Variable; Packed = true on
 * array/structure. ISO 9506-1:2003 §8.1.3.15.5.
 *
 * @constant
 */
export
const vadr: number = ParameterSupportOptions_vadr; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_vsca
 * @description
 *
 * First-edition scattered-access facilities (annex E); bit 5 reserved. ISO
 * 9506-1:2003 §8.1.3.15.6.
 *
 * @constant
 */
export
const ParameterSupportOptions_vsca: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary vsca
 * @description
 *
 * First-edition scattered-access facilities (annex E); bit 5 reserved. ISO
 * 9506-1:2003 §8.1.3.15.6.
 *
 * @constant
 */
export
const vsca: number = ParameterSupportOptions_vsca; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_tpy
 * @description
 *
 * Third-party communication to obtain resources for a service. ISO 9506-1:2003
 * §8.1.3.15.7.
 *
 * @constant
 */
export
const ParameterSupportOptions_tpy: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary tpy
 * @description
 *
 * Third-party communication to obtain resources for a service. ISO 9506-1:2003
 * §8.1.3.15.7.
 *
 * @constant
 */
export
const tpy: number = ParameterSupportOptions_tpy; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_vlis
 * @description
 *
 * Variable List Name as Kind of Access. ISO 9506-1:2003 §8.1.3.15.8.
 *
 * @constant
 */
export
const ParameterSupportOptions_vlis: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary vlis
 * @description
 *
 * Variable List Name as Kind of Access. ISO 9506-1:2003 §8.1.3.15.8.
 *
 * @constant
 */
export
const vlis: number = ParameterSupportOptions_vlis; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_cei
 * @description
 *
 * Evaluation Interval on AlterEventConditionMonitoring. ISO 9506-1:2003
 * §8.1.3.15.9.
 *
 * @constant
 */
export
const ParameterSupportOptions_cei: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary cei
 * @description
 *
 * Evaluation Interval on AlterEventConditionMonitoring. ISO 9506-1:2003
 * §8.1.3.15.9.
 *
 * @constant
 */
export
const cei: number = ParameterSupportOptions_cei; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_aco
 * @description
 *
 * Access Control parameter wherever it occurs. ISO 9506-1:2003 §8.1.3.15.10.
 *
 * @constant
 */
export
const ParameterSupportOptions_aco: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary aco
 * @description
 *
 * Access Control parameter wherever it occurs. ISO 9506-1:2003 §8.1.3.15.10.
 *
 * @constant
 */
export
const aco: number = ParameterSupportOptions_aco; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_sem
 * @description
 *
 * Meaning on GetVariableAccessAttributes / GetNamedTypeAttributes. ISO
 * 9506-1:2003 §8.1.3.15.11.
 *
 * @constant
 */
export
const ParameterSupportOptions_sem: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary sem
 * @description
 *
 * Meaning on GetVariableAccessAttributes / GetNamedTypeAttributes. ISO
 * 9506-1:2003 §8.1.3.15.11.
 *
 * @constant
 */
export
const sem: number = ParameterSupportOptions_sem; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_csr
 * @description
 *
 * ISO/IEC 9506-3 companion-standard service/parameter extensions. ISO
 * 9506-1:2003 §8.1.3.15.12.
 *
 * @constant
 */
export
const ParameterSupportOptions_csr: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary csr
 * @description
 *
 * ISO/IEC 9506-3 companion-standard service/parameter extensions. ISO
 * 9506-1:2003 §8.1.3.15.12.
 *
 * @constant
 */
export
const csr: number = ParameterSupportOptions_csr; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_csnc
 * @description
 *
 * ISO/IEC 9506-4 companion-standard extensions. ISO 9506-1:2003 §8.1.3.15.13.
 *
 * @constant
 */
export
const ParameterSupportOptions_csnc: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary csnc
 * @description
 *
 * ISO/IEC 9506-4 companion-standard extensions. ISO 9506-1:2003 §8.1.3.15.13.
 *
 * @constant
 */
export
const csnc: number = ParameterSupportOptions_csnc; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_csplc
 * @description
 *
 * ISO/IEC 9506-5 companion-standard extensions. ISO 9506-1:2003 §8.1.3.15.14.
 *
 * @constant
 */
export
const ParameterSupportOptions_csplc: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary csplc
 * @description
 *
 * ISO/IEC 9506-5 companion-standard extensions. ISO 9506-1:2003 §8.1.3.15.14.
 *
 * @constant
 */
export
const csplc: number = ParameterSupportOptions_csplc; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_cspi
 * @description
 *
 * ISO/IEC 9506-6 companion-standard extensions. ISO 9506-1:2003 §8.1.3.15.15.
 *
 * @constant
 */
export
const ParameterSupportOptions_cspi: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary cspi
 * @description
 *
 * ISO/IEC 9506-6 companion-standard extensions. ISO 9506-1:2003 §8.1.3.15.15.
 *
 * @constant
 */
export
const cspi: number = ParameterSupportOptions_cspi; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_char
 * @description
 *
 * UTF8String identifiers and strings; else VisibleString subset. ISO
 * 9506-1:2003 §8.1.3.15.16.
 *
 * @constant
 */
export
const ParameterSupportOptions_char: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary char
 * @description
 *
 * UTF8String identifiers and strings; else VisibleString subset. ISO
 * 9506-1:2003 §8.1.3.15.16.
 *
 * @constant
 */
export
const char: number = ParameterSupportOptions_char; /* SHORT_NAMED_BIT */
export const _decode_ParameterSupportOptions = $._decodeBitString;
export const _encode_ParameterSupportOptions = $._encodeBitString;


/* eslint-enable */
