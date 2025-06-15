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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProtectionSwitchMode */
/**
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```@enum {number}
 */
export enum _enum_for_ProtectionSwitchMode {
    bidirectional = 0,
    unidirectional = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION ProtectionSwitchMode */
/**
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```@enum {number}
 */
export type ProtectionSwitchMode = _enum_for_ProtectionSwitchMode;
/* END_OF_SYMBOL_DEFINITION ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION ProtectionSwitchMode */
/**
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```@enum {number}
 */
export const ProtectionSwitchMode = _enum_for_ProtectionSwitchMode;
/* END_OF_SYMBOL_DEFINITION ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION ProtectionSwitchMode_bidirectional */
/**
 * @summary ProtectionSwitchMode_bidirectional
 * @constant
 * @type {number}
 */
export const ProtectionSwitchMode_bidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionSwitchMode_bidirectional */

/* START_OF_SYMBOL_DEFINITION bidirectional */
/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectional */

/* START_OF_SYMBOL_DEFINITION ProtectionSwitchMode_unidirectional */
/**
 * @summary ProtectionSwitchMode_unidirectional
 * @constant
 * @type {number}
 */
export const ProtectionSwitchMode_unidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.unidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionSwitchMode_unidirectional */

/* START_OF_SYMBOL_DEFINITION unidirectional */
/**
 * @summary unidirectional
 * @constant
 * @type {number}
 */
export const unidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.unidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unidirectional */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionSwitchMode */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionSwitchMode */
export const _decode_ProtectionSwitchMode = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionSwitchMode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionSwitchMode */
export const _encode_ProtectionSwitchMode = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionSwitchMode */

/* eslint-enable */
