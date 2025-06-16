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
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_ProtectionSwitchMode {
    bidirectional = 0,
    unidirectional = 1,
}


/**
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```
 * 
 * @enum {number}
 */
export type ProtectionSwitchMode = _enum_for_ProtectionSwitchMode;


/**
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```
 * 
 * @enum {number}
 */
export const ProtectionSwitchMode = _enum_for_ProtectionSwitchMode;


/**
 * @summary ProtectionSwitchMode_bidirectional
 * @constant
 * @type {number}
 */
export const ProtectionSwitchMode_bidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtectionSwitchMode_unidirectional
 * @constant
 * @type {number}
 */
export const ProtectionSwitchMode_unidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.unidirectional; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unidirectional
 * @constant
 * @type {number}
 */
export const unidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.unidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ProtectionSwitchMode = $._decodeEnumerated;




export const _encode_ProtectionSwitchMode = $._encodeEnumerated;


/* eslint-enable */
