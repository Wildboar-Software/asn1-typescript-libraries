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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ConversionWithLossProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionWithLossProhibited  ::=  ENUMERATED {
 *   conversion-with-loss-allowed(0), conversion-with-loss-prohibited(1)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ConversionWithLossProhibited {
    conversion_with_loss_allowed = 0,
    conversion_with_loss_prohibited = 1,
}

/**
 * @summary ConversionWithLossProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionWithLossProhibited  ::=  ENUMERATED {
 *   conversion-with-loss-allowed(0), conversion-with-loss-prohibited(1)
 * }
 * ```
 *
 * @enum {number}
 */
export type ConversionWithLossProhibited = _enum_for_ConversionWithLossProhibited;

/**
 * @summary ConversionWithLossProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionWithLossProhibited  ::=  ENUMERATED {
 *   conversion-with-loss-allowed(0), conversion-with-loss-prohibited(1)
 * }
 * ```
 *
 * @enum {number}
 */
export const ConversionWithLossProhibited = _enum_for_ConversionWithLossProhibited;

/**
 * @summary ConversionWithLossProhibited_conversion_with_loss_allowed
 * @constant
 * @type {number}
 */
export const ConversionWithLossProhibited_conversion_with_loss_allowed: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_allowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conversion_with_loss_allowed
 * @constant
 * @type {number}
 */
export const conversion_with_loss_allowed: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConversionWithLossProhibited_conversion_with_loss_prohibited
 * @constant
 * @type {number}
 */
export const ConversionWithLossProhibited_conversion_with_loss_prohibited: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conversion_with_loss_prohibited
 * @constant
 * @type {number}
 */
export const conversion_with_loss_prohibited: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ConversionWithLossProhibited = $._decodeEnumerated;


export const _encode_ConversionWithLossProhibited = $._encodeEnumerated;


/* eslint-enable */
