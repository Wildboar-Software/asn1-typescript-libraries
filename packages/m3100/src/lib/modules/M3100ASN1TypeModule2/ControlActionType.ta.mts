/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


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
export const ControlActionType: typeof _enum_for_ControlActionType = _enum_for_ControlActionType;


/**
 * @summary ControlActionType_closeContinuously
 * @constant
 * @type {number}
 */
export const ControlActionType_closeContinuously: _enum_for_ControlActionType.closeContinuously =
    ControlActionType.closeContinuously; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary closeContinuously
 * @constant
 * @type {number}
 */
export const closeContinuously: _enum_for_ControlActionType.closeContinuously =
    ControlActionType.closeContinuously; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlActionType_openContinuously
 * @constant
 * @type {number}
 */
export const ControlActionType_openContinuously: _enum_for_ControlActionType.openContinuously =
    ControlActionType.openContinuously; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary openContinuously
 * @constant
 * @type {number}
 */
export const openContinuously: _enum_for_ControlActionType.openContinuously =
    ControlActionType.openContinuously; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlActionType_closeMomentarily
 * @constant
 * @type {number}
 */
export const ControlActionType_closeMomentarily: _enum_for_ControlActionType.closeMomentarily =
    ControlActionType.closeMomentarily; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary closeMomentarily
 * @constant
 * @type {number}
 */
export const closeMomentarily: _enum_for_ControlActionType.closeMomentarily =
    ControlActionType.closeMomentarily; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlActionType_openMomentarily
 * @constant
 * @type {number}
 */
export const ControlActionType_openMomentarily: _enum_for_ControlActionType.openMomentarily =
    ControlActionType.openMomentarily; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary openMomentarily
 * @constant
 * @type {number}
 */
export const openMomentarily: _enum_for_ControlActionType.openMomentarily =
    ControlActionType.openMomentarily; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_ControlActionType(el: _Element): ControlActionType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ControlActionType.closeContinuously: return ControlActionType.closeContinuously;
        case ControlActionType.openContinuously: return ControlActionType.openContinuously;
        case ControlActionType.closeMomentarily: return ControlActionType.closeMomentarily;
        case ControlActionType.openMomentarily: return ControlActionType.openMomentarily;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ControlActionType.',
                el,
            );
    }
}




export const _encode_ControlActionType: $.ASN1Encoder<ControlActionType> = $._encodeEnumerated as $.ASN1Encoder<ControlActionType>;


/* eslint-enable */
