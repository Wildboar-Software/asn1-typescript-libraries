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
 * @summary SwitchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchType  ::=  ENUMERATED {manual(0), forced(1), lockout(2)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_SwitchType {
    manual = 0,
    forced = 1,
    lockout = 2,
}


/**
 * @summary SwitchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchType  ::=  ENUMERATED {manual(0), forced(1), lockout(2)}
 * ```
 * 
 * @enum {number}
 */
export type SwitchType = _enum_for_SwitchType;


/**
 * @summary SwitchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchType  ::=  ENUMERATED {manual(0), forced(1), lockout(2)}
 * ```
 * 
 * @enum {number}
 */
export const SwitchType = _enum_for_SwitchType;


/**
 * @summary SwitchType_manual
 * @constant
 * @type {number}
 */
export const SwitchType_manual: SwitchType =
    SwitchType.manual; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary manual
 * @constant
 * @type {number}
 */
export const manual: SwitchType =
    SwitchType.manual; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SwitchType_forced
 * @constant
 * @type {number}
 */
export const SwitchType_forced: SwitchType =
    SwitchType.forced; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary forced
 * @constant
 * @type {number}
 */
export const forced: SwitchType =
    SwitchType.forced; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SwitchType_lockout
 * @constant
 * @type {number}
 */
export const SwitchType_lockout: SwitchType =
    SwitchType.lockout; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary lockout
 * @constant
 * @type {number}
 */
export const lockout: SwitchType =
    SwitchType.lockout; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_SwitchType = $._decodeEnumerated;




export const _encode_SwitchType = $._encodeEnumerated;


/* eslint-enable */
