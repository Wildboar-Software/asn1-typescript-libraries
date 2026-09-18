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
 * @summary DimensionParamOffer_addressing
 * @description
 *
 * Offered `d-addressing` bits. Bit = 1 is offered: `noConstraint`(0),
 * `higherOnly`(1; default `"higher only"`), `notPermitted`(2).
 * Controls whether explicit pointer ops may decrease the coordinate
 * or change it at all. ISO/IEC 9040:1997 §18.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamOffer-addressing ::= BIT STRING {
 *     noConstraint (0),
 *     higherOnly   (1),
 *     notPermitted (2)
 * }
 * ```
 */
export
type DimensionParamOffer_addressing = BIT_STRING;

/**
 * @summary DimensionParamOffer_addressing_noConstraint
 * @description
 *
 * Offer `d-addressing` = `"no constraint"`: explicit ops may raise
 * or lower this coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 */
export
const DimensionParamOffer_addressing_noConstraint: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary noConstraint
 * @description
 *
 * Offer `d-addressing` = `"no constraint"`: explicit ops may raise
 * or lower this coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 */
export
const noConstraint: number = DimensionParamOffer_addressing_noConstraint; /* SHORT_NAMED_BIT */

/**
 * @summary DimensionParamOffer_addressing_higherOnly
 * @description
 *
 * Offer `d-addressing` = `"higher only"` (default): explicit ops
 * cannot decrease this coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 */
export
const DimensionParamOffer_addressing_higherOnly: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary higherOnly
 * @description
 *
 * Offer `d-addressing` = `"higher only"` (default): explicit ops
 * cannot decrease this coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 */
export
const higherOnly: number = DimensionParamOffer_addressing_higherOnly; /* SHORT_NAMED_BIT */

/**
 * @summary DimensionParamOffer_addressing_notPermitted
 * @description
 *
 * Offer `d-addressing` = `"not permitted"`: no explicit change of
 * this coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 */
export
const DimensionParamOffer_addressing_notPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary notPermitted
 * @description
 *
 * Offer `d-addressing` = `"not permitted"`: no explicit change of
 * this coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 */
export
const notPermitted: number = DimensionParamOffer_addressing_notPermitted; /* SHORT_NAMED_BIT */
export const _decode_DimensionParamOffer_addressing = $._decodeBitString;
export const _encode_DimensionParamOffer_addressing = $._encodeBitString;


/* eslint-enable */
