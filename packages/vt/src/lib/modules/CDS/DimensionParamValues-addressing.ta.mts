/* eslint-disable */
import {
    INTEGER,
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
 * @summary DimensionParamValues_addressing
 * @description
 *
 * Selected `d-addressing`: `noConstraint`(0), `higherOnly`(1;
 * default `"higher only"`), `notPermitted`(2). ISO/IEC 9040:1997
 * §18.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamValues-addressing ::= INTEGER {
 *     noConstraint (0),
 *     higherOnly   (1),
 *     notPermitted (2)
 * }
 * ```
 */
export
type DimensionParamValues_addressing = INTEGER;

/**
 * @summary DimensionParamValues_addressing_noConstraint
 * @description
 *
 * `d-addressing` = `"no constraint"`: explicit ops may raise or
 * lower this coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 * @type {number}
 */
export
const DimensionParamValues_addressing_noConstraint: DimensionParamValues_addressing = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary noConstraint
 * @description
 *
 * `d-addressing` = `"no constraint"`: explicit ops may raise or
 * lower this coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 * @type {number}
 */
export
const noConstraint: DimensionParamValues_addressing = DimensionParamValues_addressing_noConstraint; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DimensionParamValues_addressing_higherOnly
 * @description
 *
 * `d-addressing` = `"higher only"` (default): explicit ops cannot
 * decrease this coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 * @type {number}
 */
export
const DimensionParamValues_addressing_higherOnly: DimensionParamValues_addressing = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary higherOnly
 * @description
 *
 * `d-addressing` = `"higher only"` (default): explicit ops cannot
 * decrease this coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 * @type {number}
 */
export
const higherOnly: DimensionParamValues_addressing = DimensionParamValues_addressing_higherOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DimensionParamValues_addressing_notPermitted
 * @description
 *
 * `d-addressing` = `"not permitted"`: no explicit change of this
 * coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 * @type {number}
 */
export
const DimensionParamValues_addressing_notPermitted: DimensionParamValues_addressing = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary notPermitted
 * @description
 *
 * `d-addressing` = `"not permitted"`: no explicit change of this
 * coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 * @type {number}
 */
export
const notPermitted: DimensionParamValues_addressing = DimensionParamValues_addressing_notPermitted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DimensionParamValues_addressing = $._decodeInteger;
export const _encode_DimensionParamValues_addressing = $._encodeInteger;


/* eslint-enable */
