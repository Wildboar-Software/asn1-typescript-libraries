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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FunctionalUnits
 * @description
 *
 * Optional VT functional units offered in ASQ or accepted in ASR. Bit=1
 * means offered (ASQ) or accepted (ASR); bit=0 means not. Kernel
 * facilities (everything not listed here) are always available.
 * ISO/IEC 9040:1997 §10; ISO/IEC 9041-1:1997 §6.2.2 h, §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FunctionalUnits  ::=  BIT STRING {
 *     profileSwitch       (0),
 *     multipleIntNeg      (1),
 *     negotiatedRelease   (2),
 *     urgentData          (3),
 *     destructiveBreak    (4),   -- for any bit, value 1 implies offered/accepted
 *     enhancedAccess      (5),   --  value 0 implies not offered/not accepted
 *     structuredCOs       (6),   --  depending on occurrence in ASQ or ASR
 *     blocks              (7),
 *     fields              (8),
 *     referenceInfOs      (9),
 *     ripple              (10),
 *     exceptions          (11),
 *     contextRetention    (12)
 * }
 * ```
 */
export
type FunctionalUnits = BIT_STRING;

/**
 * @summary FunctionalUnits_profileSwitch
 * @description
 *
 * Switch Profile Negotiation. Confirmed VT-SWITCH-PROFILE. ISO/IEC
 * 9040:1997 §10.1.1.
 * @constant
 */
export
const FunctionalUnits_profileSwitch: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary profileSwitch
 * @description
 *
 * Switch Profile Negotiation. Confirmed VT-SWITCH-PROFILE. ISO/IEC
 * 9040:1997 §10.1.1.
 * @constant
 */
export
const profileSwitch: number = FunctionalUnits_profileSwitch; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_multipleIntNeg
 * @description
 *
 * Multiple Interaction Negotiation (MIN). Requires Switch Profile also
 * selected. INVITE/OFFER/ACCEPT/REJECT. ISO/IEC 9040:1997 §10.1.2.
 * @constant
 */
export
const FunctionalUnits_multipleIntNeg: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary multipleIntNeg
 * @description
 *
 * Multiple Interaction Negotiation (MIN). Requires Switch Profile also
 * selected. INVITE/OFFER/ACCEPT/REJECT. ISO/IEC 9040:1997 §10.1.2.
 * @constant
 */
export
const multipleIntNeg: number = FunctionalUnits_multipleIntNeg; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_negotiatedRelease
 * @description
 *
 * Peer may reject VT-RELEASE. Without this FU a release cannot be
 * refused. ISO/IEC 9040:1997 §10.2.
 * @constant
 */
export
const FunctionalUnits_negotiatedRelease: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary negotiatedRelease
 * @description
 *
 * Peer may reject VT-RELEASE. Without this FU a release cannot be
 * refused. ISO/IEC 9040:1997 §10.2.
 * @constant
 */
export
const negotiatedRelease: number = FunctionalUnits_negotiatedRelease; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_urgentData
 * @description
 *
 * Urgent CO updates, possibly bypassing earlier traffic. Enhances
 * non-destructive interrupt. ISO/IEC 9040:1997 §10.3.
 * @constant
 */
export
const FunctionalUnits_urgentData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary urgentData
 * @description
 *
 * Urgent CO updates, possibly bypassing earlier traffic. Enhances
 * non-destructive interrupt. ISO/IEC 9040:1997 §10.3.
 * @constant
 */
export
const urgentData: number = FunctionalUnits_urgentData; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_destructiveBreak
 * @description
 *
 * Break FU: destructive interrupt / VT-BREAK. ISO/IEC 9040:1997
 * §10.4.
 * @constant
 */
export
const FunctionalUnits_destructiveBreak: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary destructiveBreak
 * @description
 *
 * Break FU: destructive interrupt / VT-BREAK. ISO/IEC 9040:1997
 * §10.4.
 * @constant
 */
export
const destructiveBreak: number = FunctionalUnits_destructiveBreak; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_enhancedAccess
 * @description
 *
 * Extra CO access-rules. A-mode adds `no-access`. S-mode adds WACI,
 * WACA, WAVAR&WACI, WAVAR&WACA, and `no-access`. ISO/IEC 9040:1997
 * §10.5, §9 table 1.
 * @constant
 */
export
const FunctionalUnits_enhancedAccess: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary enhancedAccess
 * @description
 *
 * Extra CO access-rules. A-mode adds `no-access`. S-mode adds WACI,
 * WACA, WAVAR&WACI, WAVAR&WACA, and `no-access`. ISO/IEC 9040:1997
 * §10.5, §9 table 1.
 * @constant
 */
export
const enhancedAccess: number = FunctionalUnits_enhancedAccess; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_structuredCOs
 * @description
 *
 * Parametric COs with more than one data element; independent element
 * update; non-parametric partial update. Required by Fields (FDCO
 * etc.) and by Ripple (RMCO). ISO/IEC 9040:1997 §10.6.
 * @constant
 */
export
const FunctionalUnits_structuredCOs: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary structuredCOs
 * @description
 *
 * Parametric COs with more than one data element; independent element
 * update; non-parametric partial update. Required by Fields (FDCO
 * etc.) and by Ripple (RMCO). ISO/IEC 9040:1997 §10.6.
 * @constant
 */
export
const structuredCOs: number = FunctionalUnits_structuredCOs; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_blocks
 * @description
 *
 * Block structuring of a display object. Actual use via
 * `block-definition-capability`. ISO/IEC 9040:1997 §10.7.
 * @constant
 */
export
const FunctionalUnits_blocks: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary blocks
 * @description
 *
 * Block structuring of a display object. Actual use via
 * `block-definition-capability`. ISO/IEC 9040:1997 §10.7.
 * @constant
 */
export
const blocks: number = FunctionalUnits_blocks; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_fields
 * @description
 *
 * Field structuring of a display object. Actual use via
 * `field-definition-capability`. Needs a CO that requires Structured
 * COs. ISO/IEC 9040:1997 §10.8.
 * @constant
 */
export
const FunctionalUnits_fields: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary fields
 * @description
 *
 * Field structuring of a display object. Actual use via
 * `field-definition-capability`. Needs a CO that requires Structured
 * COs. ISO/IEC 9040:1997 §10.8.
 * @constant
 */
export
const fields: number = FunctionalUnits_fields; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_referenceInfOs
 * @description
 *
 * Reference Information Object (RIO) COs allowed in the VTE. ISO/IEC
 * 9040:1997 §10.9.
 * @constant
 */
export
const FunctionalUnits_referenceInfOs: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary referenceInfOs
 * @description
 *
 * Reference Information Object (RIO) COs allowed in the VTE. ISO/IEC
 * 9040:1997 §10.9.
 * @constant
 */
export
const referenceInfOs: number = FunctionalUnits_referenceInfOs; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_ripple
 * @description
 *
 * Insert/delete/copy on a display object (basic and logical
 * addressing). Requires Structured COs. ISO/IEC 9040:1997 §10.10.
 * @constant
 */
export
const FunctionalUnits_ripple: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ripple
 * @description
 *
 * Insert/delete/copy on a display object (basic and logical
 * addressing). Requires Structured COs. ISO/IEC 9040:1997 §10.10.
 * @constant
 */
export
const ripple: number = FunctionalUnits_ripple; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_exceptions
 * @description
 *
 * Non-fatal exceptions instead of abort. Requires Break. ISO/IEC
 * 9040:1997 §10.11.
 * @constant
 */
export
const FunctionalUnits_exceptions: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary exceptions
 * @description
 *
 * Non-fatal exceptions instead of abort. Requires Break. ISO/IEC
 * 9040:1997 §10.11.
 * @constant
 */
export
const exceptions: number = FunctionalUnits_exceptions; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_contextRetention
 * @description
 *
 * Keep selected DO/CO contents across VTE switches. Requires Switch
 * Profile. ISO/IEC 9040:1997 §10.12.
 * @constant
 */
export
const FunctionalUnits_contextRetention: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary contextRetention
 * @description
 *
 * Keep selected DO/CO contents across VTE switches. Requires Switch
 * Profile. ISO/IEC 9040:1997 §10.12.
 * @constant
 */
export
const contextRetention: number = FunctionalUnits_contextRetention; /* SHORT_NAMED_BIT */
export const _decode_FunctionalUnits = $._decodeBitString;
export const _encode_FunctionalUnits = $._encodeBitString;


/* eslint-enable */
