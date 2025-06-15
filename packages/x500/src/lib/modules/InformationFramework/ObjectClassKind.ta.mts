/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_ObjectClassKind */
/**
 * @summary ObjectClassKind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```@enum {number}
 */
export enum _enum_for_ObjectClassKind {
    abstract = 0,
    structural = 1,
    auxiliary = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION ObjectClassKind */
/**
 * @summary ObjectClassKind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```@enum {number}
 */
export type ObjectClassKind = _enum_for_ObjectClassKind;
/* END_OF_SYMBOL_DEFINITION ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION ObjectClassKind */
/**
 * @summary ObjectClassKind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```@enum {number}
 */
export const ObjectClassKind = _enum_for_ObjectClassKind;
/* END_OF_SYMBOL_DEFINITION ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION ObjectClassKind_abstract */
/**
 * @summary ObjectClassKind_abstract
 * @constant
 * @type {number}
 */
export const ObjectClassKind_abstract: ObjectClassKind =
    ObjectClassKind.abstract; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ObjectClassKind_abstract */

/* START_OF_SYMBOL_DEFINITION abstract */
/**
 * @summary abstract
 * @constant
 * @type {number}
 */
export const abstract: ObjectClassKind =
    ObjectClassKind.abstract; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION abstract */

/* START_OF_SYMBOL_DEFINITION ObjectClassKind_structural */
/**
 * @summary ObjectClassKind_structural
 * @constant
 * @type {number}
 */
export const ObjectClassKind_structural: ObjectClassKind =
    ObjectClassKind.structural; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ObjectClassKind_structural */

/* START_OF_SYMBOL_DEFINITION structural */
/**
 * @summary structural
 * @constant
 * @type {number}
 */
export const structural: ObjectClassKind =
    ObjectClassKind.structural; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION structural */

/* START_OF_SYMBOL_DEFINITION ObjectClassKind_auxiliary */
/**
 * @summary ObjectClassKind_auxiliary
 * @constant
 * @type {number}
 */
export const ObjectClassKind_auxiliary: ObjectClassKind =
    ObjectClassKind.auxiliary; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ObjectClassKind_auxiliary */

/* START_OF_SYMBOL_DEFINITION auxiliary */
/**
 * @summary auxiliary
 * @constant
 * @type {number}
 */
export const auxiliary: ObjectClassKind =
    ObjectClassKind.auxiliary; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION auxiliary */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectClassKind */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectClassKind */
export const _decode_ObjectClassKind = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectClassKind */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectClassKind */
export const _encode_ObjectClassKind = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ObjectClassKind */

/* eslint-enable */
