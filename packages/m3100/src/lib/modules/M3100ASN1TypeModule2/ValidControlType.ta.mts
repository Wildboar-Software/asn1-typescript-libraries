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

/* START_OF_SYMBOL_DEFINITION _enum_for_ValidControlType */
/**
 * @summary ValidControlType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidControlType  ::=  ENUMERATED {momentaryOnly(0), continuousOnly(1), both(2)}
 * ```@enum {number}
 */
export enum _enum_for_ValidControlType {
    momentaryOnly = 0,
    continuousOnly = 1,
    both = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ValidControlType */

/* START_OF_SYMBOL_DEFINITION ValidControlType */
/**
 * @summary ValidControlType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidControlType  ::=  ENUMERATED {momentaryOnly(0), continuousOnly(1), both(2)}
 * ```@enum {number}
 */
export type ValidControlType = _enum_for_ValidControlType;
/* END_OF_SYMBOL_DEFINITION ValidControlType */

/* START_OF_SYMBOL_DEFINITION ValidControlType */
/**
 * @summary ValidControlType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidControlType  ::=  ENUMERATED {momentaryOnly(0), continuousOnly(1), both(2)}
 * ```@enum {number}
 */
export const ValidControlType = _enum_for_ValidControlType;
/* END_OF_SYMBOL_DEFINITION ValidControlType */

/* START_OF_SYMBOL_DEFINITION ValidControlType_momentaryOnly */
/**
 * @summary ValidControlType_momentaryOnly
 * @constant
 * @type {number}
 */
export const ValidControlType_momentaryOnly: ValidControlType =
    ValidControlType.momentaryOnly; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ValidControlType_momentaryOnly */

/* START_OF_SYMBOL_DEFINITION momentaryOnly */
/**
 * @summary momentaryOnly
 * @constant
 * @type {number}
 */
export const momentaryOnly: ValidControlType =
    ValidControlType.momentaryOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION momentaryOnly */

/* START_OF_SYMBOL_DEFINITION ValidControlType_continuousOnly */
/**
 * @summary ValidControlType_continuousOnly
 * @constant
 * @type {number}
 */
export const ValidControlType_continuousOnly: ValidControlType =
    ValidControlType.continuousOnly; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ValidControlType_continuousOnly */

/* START_OF_SYMBOL_DEFINITION continuousOnly */
/**
 * @summary continuousOnly
 * @constant
 * @type {number}
 */
export const continuousOnly: ValidControlType =
    ValidControlType.continuousOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION continuousOnly */

/* START_OF_SYMBOL_DEFINITION ValidControlType_both */
/**
 * @summary ValidControlType_both
 * @constant
 * @type {number}
 */
export const ValidControlType_both: ValidControlType =
    ValidControlType.both; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ValidControlType_both */

/* START_OF_SYMBOL_DEFINITION both */
/**
 * @summary both
 * @constant
 * @type {number}
 */
export const both: ValidControlType =
    ValidControlType.both; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION both */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidControlType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidControlType */

/* START_OF_SYMBOL_DEFINITION _decode_ValidControlType */
export const _decode_ValidControlType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ValidControlType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidControlType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidControlType */

/* START_OF_SYMBOL_DEFINITION _encode_ValidControlType */
export const _encode_ValidControlType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ValidControlType */

/* eslint-enable */
