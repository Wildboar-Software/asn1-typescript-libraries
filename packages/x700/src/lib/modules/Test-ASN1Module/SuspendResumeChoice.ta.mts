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

/* START_OF_SYMBOL_DEFINITION _enum_for_SuspendResumeChoice */
/**
 * @summary SuspendResumeChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuspendResumeChoice  ::=  ENUMERATED {suspend(0), resume(1)}
 * ```@enum {number}
 */
export enum _enum_for_SuspendResumeChoice {
    suspend = 0,
    resume = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SuspendResumeChoice */

/* START_OF_SYMBOL_DEFINITION SuspendResumeChoice */
/**
 * @summary SuspendResumeChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuspendResumeChoice  ::=  ENUMERATED {suspend(0), resume(1)}
 * ```@enum {number}
 */
export type SuspendResumeChoice = _enum_for_SuspendResumeChoice;
/* END_OF_SYMBOL_DEFINITION SuspendResumeChoice */

/* START_OF_SYMBOL_DEFINITION SuspendResumeChoice */
/**
 * @summary SuspendResumeChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuspendResumeChoice  ::=  ENUMERATED {suspend(0), resume(1)}
 * ```@enum {number}
 */
export const SuspendResumeChoice = _enum_for_SuspendResumeChoice;
/* END_OF_SYMBOL_DEFINITION SuspendResumeChoice */

/* START_OF_SYMBOL_DEFINITION SuspendResumeChoice_suspend */
/**
 * @summary SuspendResumeChoice_suspend
 * @constant
 * @type {number}
 */
export const SuspendResumeChoice_suspend: SuspendResumeChoice =
    SuspendResumeChoice.suspend; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SuspendResumeChoice_suspend */

/* START_OF_SYMBOL_DEFINITION suspend */
/**
 * @summary suspend
 * @constant
 * @type {number}
 */
export const suspend: SuspendResumeChoice =
    SuspendResumeChoice.suspend; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION suspend */

/* START_OF_SYMBOL_DEFINITION SuspendResumeChoice_resume */
/**
 * @summary SuspendResumeChoice_resume
 * @constant
 * @type {number}
 */
export const SuspendResumeChoice_resume: SuspendResumeChoice =
    SuspendResumeChoice.resume; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SuspendResumeChoice_resume */

/* START_OF_SYMBOL_DEFINITION resume */
/**
 * @summary resume
 * @constant
 * @type {number}
 */
export const resume: SuspendResumeChoice =
    SuspendResumeChoice.resume; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resume */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SuspendResumeChoice */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SuspendResumeChoice */

/* START_OF_SYMBOL_DEFINITION _decode_SuspendResumeChoice */
export const _decode_SuspendResumeChoice = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_SuspendResumeChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SuspendResumeChoice */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SuspendResumeChoice */

/* START_OF_SYMBOL_DEFINITION _encode_SuspendResumeChoice */
export const _encode_SuspendResumeChoice = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_SuspendResumeChoice */

/* eslint-enable */
