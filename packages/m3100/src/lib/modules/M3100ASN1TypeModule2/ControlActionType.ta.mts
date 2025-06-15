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

/* START_OF_SYMBOL_DEFINITION _enum_for_ControlActionType */
/**
 * @summary ControlActionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlActionType  ::=  ENUMERATED {
 *   closeContinuously(0), openContinuously(1), closeMomentarily(2),
 *   openMomentarily(3)}
 * ```@enum {number}
 */
export enum _enum_for_ControlActionType {
    closeContinuously = 0,
    openContinuously = 1,
    closeMomentarily = 2,
    openMomentarily = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ControlActionType */

/* START_OF_SYMBOL_DEFINITION ControlActionType */
/**
 * @summary ControlActionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlActionType  ::=  ENUMERATED {
 *   closeContinuously(0), openContinuously(1), closeMomentarily(2),
 *   openMomentarily(3)}
 * ```@enum {number}
 */
export type ControlActionType = _enum_for_ControlActionType;
/* END_OF_SYMBOL_DEFINITION ControlActionType */

/* START_OF_SYMBOL_DEFINITION ControlActionType */
/**
 * @summary ControlActionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlActionType  ::=  ENUMERATED {
 *   closeContinuously(0), openContinuously(1), closeMomentarily(2),
 *   openMomentarily(3)}
 * ```@enum {number}
 */
export const ControlActionType = _enum_for_ControlActionType;
/* END_OF_SYMBOL_DEFINITION ControlActionType */

/* START_OF_SYMBOL_DEFINITION ControlActionType_closeContinuously */
/**
 * @summary ControlActionType_closeContinuously
 * @constant
 * @type {number}
 */
export const ControlActionType_closeContinuously: ControlActionType =
    ControlActionType.closeContinuously; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlActionType_closeContinuously */

/* START_OF_SYMBOL_DEFINITION closeContinuously */
/**
 * @summary closeContinuously
 * @constant
 * @type {number}
 */
export const closeContinuously: ControlActionType =
    ControlActionType.closeContinuously; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION closeContinuously */

/* START_OF_SYMBOL_DEFINITION ControlActionType_openContinuously */
/**
 * @summary ControlActionType_openContinuously
 * @constant
 * @type {number}
 */
export const ControlActionType_openContinuously: ControlActionType =
    ControlActionType.openContinuously; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlActionType_openContinuously */

/* START_OF_SYMBOL_DEFINITION openContinuously */
/**
 * @summary openContinuously
 * @constant
 * @type {number}
 */
export const openContinuously: ControlActionType =
    ControlActionType.openContinuously; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION openContinuously */

/* START_OF_SYMBOL_DEFINITION ControlActionType_closeMomentarily */
/**
 * @summary ControlActionType_closeMomentarily
 * @constant
 * @type {number}
 */
export const ControlActionType_closeMomentarily: ControlActionType =
    ControlActionType.closeMomentarily; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlActionType_closeMomentarily */

/* START_OF_SYMBOL_DEFINITION closeMomentarily */
/**
 * @summary closeMomentarily
 * @constant
 * @type {number}
 */
export const closeMomentarily: ControlActionType =
    ControlActionType.closeMomentarily; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION closeMomentarily */

/* START_OF_SYMBOL_DEFINITION ControlActionType_openMomentarily */
/**
 * @summary ControlActionType_openMomentarily
 * @constant
 * @type {number}
 */
export const ControlActionType_openMomentarily: ControlActionType =
    ControlActionType.openMomentarily; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlActionType_openMomentarily */

/* START_OF_SYMBOL_DEFINITION openMomentarily */
/**
 * @summary openMomentarily
 * @constant
 * @type {number}
 */
export const openMomentarily: ControlActionType =
    ControlActionType.openMomentarily; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION openMomentarily */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlActionType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlActionType */

/* START_OF_SYMBOL_DEFINITION _decode_ControlActionType */
export const _decode_ControlActionType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ControlActionType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlActionType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlActionType */

/* START_OF_SYMBOL_DEFINITION _encode_ControlActionType */
export const _encode_ControlActionType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ControlActionType */

/* eslint-enable */
