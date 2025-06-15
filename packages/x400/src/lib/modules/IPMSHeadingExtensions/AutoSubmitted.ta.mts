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

/* START_OF_SYMBOL_DEFINITION _enum_for_AutoSubmitted */
/**
 * @summary AutoSubmitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSubmitted  ::=  ENUMERATED {
 *   not-auto-submitted(0), auto-generated(1), auto-replied(2)}
 * ```@enum {number}
 */
export enum _enum_for_AutoSubmitted {
    not_auto_submitted = 0,
    auto_generated = 1,
    auto_replied = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION AutoSubmitted */
/**
 * @summary AutoSubmitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSubmitted  ::=  ENUMERATED {
 *   not-auto-submitted(0), auto-generated(1), auto-replied(2)}
 * ```@enum {number}
 */
export type AutoSubmitted = _enum_for_AutoSubmitted;
/* END_OF_SYMBOL_DEFINITION AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION AutoSubmitted */
/**
 * @summary AutoSubmitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSubmitted  ::=  ENUMERATED {
 *   not-auto-submitted(0), auto-generated(1), auto-replied(2)}
 * ```@enum {number}
 */
export const AutoSubmitted = _enum_for_AutoSubmitted;
/* END_OF_SYMBOL_DEFINITION AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION AutoSubmitted_not_auto_submitted */
/**
 * @summary AutoSubmitted_not_auto_submitted
 * @constant
 * @type {number}
 */
export const AutoSubmitted_not_auto_submitted: AutoSubmitted =
    AutoSubmitted.not_auto_submitted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSubmitted_not_auto_submitted */

/* START_OF_SYMBOL_DEFINITION not_auto_submitted */
/**
 * @summary not_auto_submitted
 * @constant
 * @type {number}
 */
export const not_auto_submitted: AutoSubmitted =
    AutoSubmitted.not_auto_submitted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION not_auto_submitted */

/* START_OF_SYMBOL_DEFINITION AutoSubmitted_auto_generated */
/**
 * @summary AutoSubmitted_auto_generated
 * @constant
 * @type {number}
 */
export const AutoSubmitted_auto_generated: AutoSubmitted =
    AutoSubmitted.auto_generated; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSubmitted_auto_generated */

/* START_OF_SYMBOL_DEFINITION auto_generated */
/**
 * @summary auto_generated
 * @constant
 * @type {number}
 */
export const auto_generated: AutoSubmitted =
    AutoSubmitted.auto_generated; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION auto_generated */

/* START_OF_SYMBOL_DEFINITION AutoSubmitted_auto_replied */
/**
 * @summary AutoSubmitted_auto_replied
 * @constant
 * @type {number}
 */
export const AutoSubmitted_auto_replied: AutoSubmitted =
    AutoSubmitted.auto_replied; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSubmitted_auto_replied */

/* START_OF_SYMBOL_DEFINITION auto_replied */
/**
 * @summary auto_replied
 * @constant
 * @type {number}
 */
export const auto_replied: AutoSubmitted =
    AutoSubmitted.auto_replied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION auto_replied */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoSubmitted */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION _decode_AutoSubmitted */
export const _decode_AutoSubmitted = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoSubmitted */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION _encode_AutoSubmitted */
export const _encode_AutoSubmitted = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AutoSubmitted */

/* eslint-enable */
