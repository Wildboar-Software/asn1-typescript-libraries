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

/* START_OF_SYMBOL_DEFINITION _enum_for_ControlledTestRequestType */
/**
 * @summary ControlledTestRequestType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```@enum {number}
 */
export enum _enum_for_ControlledTestRequestType {
    independent = 0,
    related = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION ControlledTestRequestType */
/**
 * @summary ControlledTestRequestType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```@enum {number}
 */
export type ControlledTestRequestType = _enum_for_ControlledTestRequestType;
/* END_OF_SYMBOL_DEFINITION ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION ControlledTestRequestType */
/**
 * @summary ControlledTestRequestType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```@enum {number}
 */
export const ControlledTestRequestType = _enum_for_ControlledTestRequestType;
/* END_OF_SYMBOL_DEFINITION ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION ControlledTestRequestType_independent */
/**
 * @summary ControlledTestRequestType_independent
 * @constant
 * @type {number}
 */
export const ControlledTestRequestType_independent: ControlledTestRequestType =
    ControlledTestRequestType.independent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlledTestRequestType_independent */

/* START_OF_SYMBOL_DEFINITION independent */
/**
 * @summary independent
 * @constant
 * @type {number}
 */
export const independent: ControlledTestRequestType =
    ControlledTestRequestType.independent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION independent */

/* START_OF_SYMBOL_DEFINITION ControlledTestRequestType_related */
/**
 * @summary ControlledTestRequestType_related
 * @constant
 * @type {number}
 */
export const ControlledTestRequestType_related: ControlledTestRequestType =
    ControlledTestRequestType.related; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlledTestRequestType_related */

/* START_OF_SYMBOL_DEFINITION related */
/**
 * @summary related
 * @constant
 * @type {number}
 */
export const related: ControlledTestRequestType =
    ControlledTestRequestType.related; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION related */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlledTestRequestType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION _decode_ControlledTestRequestType */
export const _decode_ControlledTestRequestType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlledTestRequestType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION _encode_ControlledTestRequestType */
export const _encode_ControlledTestRequestType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ControlledTestRequestType */

/* eslint-enable */
