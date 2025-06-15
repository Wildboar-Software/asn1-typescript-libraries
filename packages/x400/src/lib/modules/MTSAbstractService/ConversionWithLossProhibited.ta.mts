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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_ConversionWithLossProhibited */
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
 * ```@enum {number}
 */
export enum _enum_for_ConversionWithLossProhibited {
    conversion_with_loss_allowed = 0,
    conversion_with_loss_prohibited = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION ConversionWithLossProhibited */
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
 * ```@enum {number}
 */
export type ConversionWithLossProhibited = _enum_for_ConversionWithLossProhibited;
/* END_OF_SYMBOL_DEFINITION ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION ConversionWithLossProhibited */
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
 * ```@enum {number}
 */
export const ConversionWithLossProhibited = _enum_for_ConversionWithLossProhibited;
/* END_OF_SYMBOL_DEFINITION ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION ConversionWithLossProhibited_conversion_with_loss_allowed */
/**
 * @summary ConversionWithLossProhibited_conversion_with_loss_allowed
 * @constant
 * @type {number}
 */
export const ConversionWithLossProhibited_conversion_with_loss_allowed: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_allowed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ConversionWithLossProhibited_conversion_with_loss_allowed */

/* START_OF_SYMBOL_DEFINITION conversion_with_loss_allowed */
/**
 * @summary conversion_with_loss_allowed
 * @constant
 * @type {number}
 */
export const conversion_with_loss_allowed: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION conversion_with_loss_allowed */

/* START_OF_SYMBOL_DEFINITION ConversionWithLossProhibited_conversion_with_loss_prohibited */
/**
 * @summary ConversionWithLossProhibited_conversion_with_loss_prohibited
 * @constant
 * @type {number}
 */
export const ConversionWithLossProhibited_conversion_with_loss_prohibited: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ConversionWithLossProhibited_conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION conversion_with_loss_prohibited */
/**
 * @summary conversion_with_loss_prohibited
 * @constant
 * @type {number}
 */
export const conversion_with_loss_prohibited: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConversionWithLossProhibited */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION _decode_ConversionWithLossProhibited */
export const _decode_ConversionWithLossProhibited = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConversionWithLossProhibited */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION _encode_ConversionWithLossProhibited */
export const _encode_ConversionWithLossProhibited = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ConversionWithLossProhibited */

/* eslint-enable */
