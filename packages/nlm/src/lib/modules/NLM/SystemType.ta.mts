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
 * @summary SystemType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemType  ::=  ENUMERATED {eS(1), iS(2)}
 * ```@enum {number}
 */
export enum _enum_for_SystemType {
    eS = 1,
    iS = 2,
}


/**
 * @summary SystemType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemType  ::=  ENUMERATED {eS(1), iS(2)}
 * ```@enum {number}
 */
export type SystemType = _enum_for_SystemType;


/**
 * @summary SystemType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemType  ::=  ENUMERATED {eS(1), iS(2)}
 * ```@enum {number}
 */
export const SystemType = _enum_for_SystemType;


/**
 * @summary SystemType_eS
 * @constant
 * @type {number}
 */
export const SystemType_eS: SystemType =
    SystemType.eS; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary eS
 * @constant
 * @type {number}
 */
export const eS: SystemType = SystemType.eS; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SystemType_iS
 * @constant
 * @type {number}
 */
export const SystemType_iS: SystemType =
    SystemType.iS; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary iS
 * @constant
 * @type {number}
 */
export const iS: SystemType = SystemType.iS; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_SystemType = $._decodeEnumerated;




export const _encode_SystemType = $._encodeEnumerated;


/* eslint-enable */
