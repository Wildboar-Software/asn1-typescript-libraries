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
