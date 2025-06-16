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
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_ControlActionType {
    closeContinuously = 0,
    openContinuously = 1,
    closeMomentarily = 2,
    openMomentarily = 3,
}


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
 * ```
 * 
 * @enum {number}
 */
export type ControlActionType = _enum_for_ControlActionType;


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
 * ```
 * 
 * @enum {number}
 */
export const ControlActionType = _enum_for_ControlActionType;


/**
 * @summary ControlActionType_closeContinuously
 * @constant
 * @type {number}
 */
export const ControlActionType_closeContinuously: ControlActionType =
    ControlActionType.closeContinuously; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary closeContinuously
 * @constant
 * @type {number}
 */
export const closeContinuously: ControlActionType =
    ControlActionType.closeContinuously; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlActionType_openContinuously
 * @constant
 * @type {number}
 */
export const ControlActionType_openContinuously: ControlActionType =
    ControlActionType.openContinuously; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary openContinuously
 * @constant
 * @type {number}
 */
export const openContinuously: ControlActionType =
    ControlActionType.openContinuously; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlActionType_closeMomentarily
 * @constant
 * @type {number}
 */
export const ControlActionType_closeMomentarily: ControlActionType =
    ControlActionType.closeMomentarily; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary closeMomentarily
 * @constant
 * @type {number}
 */
export const closeMomentarily: ControlActionType =
    ControlActionType.closeMomentarily; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlActionType_openMomentarily
 * @constant
 * @type {number}
 */
export const ControlActionType_openMomentarily: ControlActionType =
    ControlActionType.openMomentarily; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary openMomentarily
 * @constant
 * @type {number}
 */
export const openMomentarily: ControlActionType =
    ControlActionType.openMomentarily; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ControlActionType = $._decodeEnumerated;




export const _encode_ControlActionType = $._encodeEnumerated;


/* eslint-enable */
