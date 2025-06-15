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

/* START_OF_SYMBOL_DEFINITION _enum_for_Completeness */
/**
 * @summary Completeness
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```@enum {number}
 */
export enum _enum_for_Completeness {
    completenessUnknown = 0,
    knownComplete = 1,
    knownNotComplete = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Completeness */

/* START_OF_SYMBOL_DEFINITION Completeness */
/**
 * @summary Completeness
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```@enum {number}
 */
export type Completeness = _enum_for_Completeness;
/* END_OF_SYMBOL_DEFINITION Completeness */

/* START_OF_SYMBOL_DEFINITION Completeness */
/**
 * @summary Completeness
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```@enum {number}
 */
export const Completeness = _enum_for_Completeness;
/* END_OF_SYMBOL_DEFINITION Completeness */

/* START_OF_SYMBOL_DEFINITION Completeness_completenessUnknown */
/**
 * @summary Completeness_completenessUnknown
 * @constant
 * @type {number}
 */
export const Completeness_completenessUnknown: Completeness =
    Completeness.completenessUnknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Completeness_completenessUnknown */

/* START_OF_SYMBOL_DEFINITION completenessUnknown */
/**
 * @summary completenessUnknown
 * @constant
 * @type {number}
 */
export const completenessUnknown: Completeness =
    Completeness.completenessUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION completenessUnknown */

/* START_OF_SYMBOL_DEFINITION Completeness_knownComplete */
/**
 * @summary Completeness_knownComplete
 * @constant
 * @type {number}
 */
export const Completeness_knownComplete: Completeness =
    Completeness.knownComplete; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Completeness_knownComplete */

/* START_OF_SYMBOL_DEFINITION knownComplete */
/**
 * @summary knownComplete
 * @constant
 * @type {number}
 */
export const knownComplete: Completeness =
    Completeness.knownComplete; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION knownComplete */

/* START_OF_SYMBOL_DEFINITION Completeness_knownNotComplete */
/**
 * @summary Completeness_knownNotComplete
 * @constant
 * @type {number}
 */
export const Completeness_knownNotComplete: Completeness =
    Completeness.knownNotComplete; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Completeness_knownNotComplete */

/* START_OF_SYMBOL_DEFINITION knownNotComplete */
/**
 * @summary knownNotComplete
 * @constant
 * @type {number}
 */
export const knownNotComplete: Completeness =
    Completeness.knownNotComplete; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION knownNotComplete */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Completeness */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Completeness */

/* START_OF_SYMBOL_DEFINITION _decode_Completeness */
export const _decode_Completeness = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_Completeness */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Completeness */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Completeness */

/* START_OF_SYMBOL_DEFINITION _encode_Completeness */
export const _encode_Completeness = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_Completeness */

/* eslint-enable */
