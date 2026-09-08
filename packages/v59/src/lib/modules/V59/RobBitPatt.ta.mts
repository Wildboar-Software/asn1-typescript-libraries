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
 * @summary RobBitPatt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RobBitPatt  ::=  BIT STRING {
 *   robBit0(0), robBit1(1), robBit2(2), robBit3(3), robBit4(4), robBit5(5)
 * }
 * ```
 */
export
type RobBitPatt = BIT_STRING;

/**
 * @summary RobBitPatt_robBit0
 * @constant
 */
export
const RobBitPatt_robBit0: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary robBit0
 * @constant
 */
export
const robBit0: number = RobBitPatt_robBit0; /* SHORT_NAMED_BIT */

/**
 * @summary RobBitPatt_robBit1
 * @constant
 */
export
const RobBitPatt_robBit1: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary robBit1
 * @constant
 */
export
const robBit1: number = RobBitPatt_robBit1; /* SHORT_NAMED_BIT */

/**
 * @summary RobBitPatt_robBit2
 * @constant
 */
export
const RobBitPatt_robBit2: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary robBit2
 * @constant
 */
export
const robBit2: number = RobBitPatt_robBit2; /* SHORT_NAMED_BIT */

/**
 * @summary RobBitPatt_robBit3
 * @constant
 */
export
const RobBitPatt_robBit3: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary robBit3
 * @constant
 */
export
const robBit3: number = RobBitPatt_robBit3; /* SHORT_NAMED_BIT */

/**
 * @summary RobBitPatt_robBit4
 * @constant
 */
export
const RobBitPatt_robBit4: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary robBit4
 * @constant
 */
export
const robBit4: number = RobBitPatt_robBit4; /* SHORT_NAMED_BIT */

/**
 * @summary RobBitPatt_robBit5
 * @constant
 */
export
const RobBitPatt_robBit5: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary robBit5
 * @constant
 */
export
const robBit5: number = RobBitPatt_robBit5; /* SHORT_NAMED_BIT */
export const _decode_RobBitPatt = $._decodeBitString;
export const _encode_RobBitPatt = $._encodeBitString;

/* eslint-enable */
