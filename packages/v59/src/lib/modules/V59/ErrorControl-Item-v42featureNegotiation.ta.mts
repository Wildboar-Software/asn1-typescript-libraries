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
 * @summary ErrorControl_Item_v42featureNegotiation
 * @description
 *
 * V.42 features as a packed BIT STRING (Table 19/V.59). `1` =
 * available/enabled. Bit 0 is LSB when displayed (ITU-T Rec. V.59 Cor.1
 * (07/2001)). ITU-T Rec. V.59 (11/2000) §6.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorControl-Item-v42featureNegotiation ::= BIT STRING {singleSREJ(0), multipleSREJ(1), hDLCBalMode(2),
 *                             testFrameSup(3), fcs16(4), fcs32(5),
 *                             v42phaseDetused(6), odpAdpbypassed(7),
 *                             v42fallbackDisc(8), v42fallbackBuf(9),
 *                             v42fallbackUnBuf(10)}
 * ```
 */
export
type ErrorControl_Item_v42featureNegotiation = BIT_STRING;

/**
 * @summary ErrorControl_Item_v42featureNegotiation_singleSREJ
 * @description
 *
 * Bit 0: Single selective reject enabled. Table 19/V.59. ITU-T Rec. V.59
 * (11/2000) §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_singleSREJ: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary singleSREJ
 * @constant
 */
export
const singleSREJ: number = ErrorControl_Item_v42featureNegotiation_singleSREJ; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_multipleSREJ
 * @description
 *
 * Bit 1: Multiple selective reject enabled. Table 19/V.59. ITU-T Rec. V.59
 * (11/2000) §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_multipleSREJ: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary multipleSREJ
 * @constant
 */
export
const multipleSREJ: number = ErrorControl_Item_v42featureNegotiation_multipleSREJ; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_hDLCBalMode
 * @description
 *
 * Bit 2: Normal error-control (HDLC balanced) enabled. Table 19/V.59. ITU-T
 * Rec. V.59 (11/2000) §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_hDLCBalMode: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary hDLCBalMode
 * @constant
 */
export
const hDLCBalMode: number = ErrorControl_Item_v42featureNegotiation_hDLCBalMode; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_testFrameSup
 * @description
 *
 * Bit 3: TEST frame supported. Table 19/V.59. ITU-T Rec. V.59 (11/2000) §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_testFrameSup: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary testFrameSup
 * @constant
 */
export
const testFrameSup: number = ErrorControl_Item_v42featureNegotiation_testFrameSup; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_fcs16
 * @description
 *
 * Bit 4: 16-bit FCS enabled. Table 19/V.59. ITU-T Rec. V.59 (11/2000) §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_fcs16: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary fcs16
 * @constant
 */
export
const fcs16: number = ErrorControl_Item_v42featureNegotiation_fcs16; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_fcs32
 * @description
 *
 * Bit 5: 32-bit FCS enabled. Table 19/V.59. ITU-T Rec. V.59 (11/2000) §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_fcs32: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary fcs32
 * @constant
 */
export
const fcs32: number = ErrorControl_Item_v42featureNegotiation_fcs32; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_v42phaseDetused
 * @description
 *
 * Bit 6: V.42 detection phase used. Table 19/V.59. ITU-T Rec. V.59 (11/2000)
 * §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_v42phaseDetused: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary v42phaseDetused
 * @constant
 */
export
const v42phaseDetused: number = ErrorControl_Item_v42featureNegotiation_v42phaseDetused; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_odpAdpbypassed
 * @description
 *
 * Bit 7: ODP/ADP bypassed by another mechanism (e.g. V.92). Table 19/V.59.
 * ITU-T Rec. V.59 (11/2000) §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_odpAdpbypassed: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary odpAdpbypassed
 * @constant
 */
export
const odpAdpbypassed: number = ErrorControl_Item_v42featureNegotiation_odpAdpbypassed; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_v42fallbackDisc
 * @description
 *
 * Bit 8: Disconnect if V.42 negotiation fails. Table 19/V.59. ITU-T Rec. V.59
 * (11/2000) §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_v42fallbackDisc: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary v42fallbackDisc
 * @constant
 */
export
const v42fallbackDisc: number = ErrorControl_Item_v42featureNegotiation_v42fallbackDisc; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_v42fallbackBuf
 * @description
 *
 * Bit 9: V.14 buffered mode if V.42 negotiation fails. Table 19/V.59. ITU-T
 * Rec. V.59 (11/2000) §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_v42fallbackBuf: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary v42fallbackBuf
 * @constant
 */
export
const v42fallbackBuf: number = ErrorControl_Item_v42featureNegotiation_v42fallbackBuf; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_v42fallbackUnBuf
 * @description
 *
 * Bit 10: V.14 unbuffered mode if V.42 negotiation fails. Table 19/V.59. ITU-T
 * Rec. V.59 (11/2000) §6.12.
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_v42fallbackUnBuf: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary v42fallbackUnBuf
 * @constant
 */
export
const v42fallbackUnBuf: number = ErrorControl_Item_v42featureNegotiation_v42fallbackUnBuf; /* SHORT_NAMED_BIT */
export const _decode_ErrorControl_Item_v42featureNegotiation = $._decodeBitString;
export const _encode_ErrorControl_Item_v42featureNegotiation = $._encodeBitString;

/* eslint-enable */
